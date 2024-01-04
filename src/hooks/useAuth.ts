import { useEffect, useState } from 'react'
import { Auth, Hub } from 'aws-amplify'
import { CognitoUser, CognitoUserPool, AuthenticationDetails } from 'amazon-cognito-identity-js'
import { HubCapsule } from '@aws-amplify/core'
import { client } from 'api/apolloClient'

export interface UseAuthHookResponse {
  currentUser: CognitoUser | null
  currentUserId: string | null
  signIn: () => void
  signOut: () => void
  isLoggingIn: boolean
}

const getCurrentUser = async (): Promise<CognitoUser | null> => {
  try {
    return await Auth.currentAuthenticatedUser()
  } catch (error) {
    console.log('Failed to get current user: ', error)
    // currentAuthenticatedUser throws an Error if not signed in
    return null
  }
}

const getAccessToken = async () => {
  try {
    var authenticationData = {
      Username: '',
      Password: '',
    }
    const userPool = new CognitoUserPool({
      UserPoolId: '',
      ClientId: '',
    })

    const user = new CognitoUser({ Username: '', Pool: userPool })
    const authenticationDetails = new AuthenticationDetails(authenticationData)

    return new Promise((resolve, reject) => {
      user.authenticateUser(authenticationDetails, {
        onSuccess: function (result: any) {
          resolve(result.getAccessToken().getJwtToken())
        },

        onFailure: function (err: any) {
          reject(err)
        },
      })
    })
  } catch (error: any) {
    console.log('Failed to get access token: ', error)
    // login again if refresh token is expired
    if (error?.code === 'NotAuthorizedException') {
      await logoutManually()
    }
    return null
  }
}

/**
 * Logout manually and redirect to login page.
 */
const logoutManually = async () => {
  await client.clearStore()
  localStorage.clear()
}

const getCurrentUserId = (currentUser: any): string | null => {
  if (!currentUser) return null
  return JSON.parse(currentUser?.attributes?.identities ?? '[]')?.[0]?.userId
}

const useAuth = (): UseAuthHookResponse => {
  const [isLoggingIn, setIsLoggingIn] = useState(false)
  const [currentUser, setCurrentUser] = useState<CognitoUser | null>(null)
  const currentUserId = getCurrentUserId(currentUser)

  useEffect(() => {
    const updateUser = async (capsule?: HubCapsule) => {
      // Check signIn event to prevent App.tsx (Routes.tsx) rerender when logging out
      const event = capsule?.payload?.event
      if (event === 'signIn') {
        setIsLoggingIn(true)
      }
      setCurrentUser(await getCurrentUser())
      if (event === 'signIn') {
        setIsLoggingIn(false)
      }
    }
    Hub.listen('auth', updateUser) // listen for login/signup events
    updateUser() // check manually the first time because we won't get a Hub event

    return () => Hub.remove('auth', updateUser)
  }, [])

  // Use customize provider (OpenID)
  const signIn = () => Auth.federatedSignIn()

  const signOut = () => Auth.signOut()

  return { currentUser, currentUserId, signIn, signOut, isLoggingIn }
}

export default useAuth
export { getCurrentUser, getAccessToken, logoutManually }
