import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client'
import { onError } from '@apollo/client/link/error'
import { ApolloLink } from '@apollo/client'

import { API_URL } from 'constants/config'
// import { MultiAPILink } from '@habx/apollo-multi-endpoint-link'
import { getAccessToken } from 'hooks/useAuth'
import { setContext } from '@apollo/client/link/context'
const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors) {
    graphQLErrors.forEach(({ message, locations, path }) =>
      console.log(`[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`)
    )
  }

  if (networkError) console.log(`[Network error]: ${networkError}`)
})

const authMiddleware = setContext((_, { headers }) =>
  getAccessToken().then((token) => {
    return {
      headers: {
        ...headers,
        authorization: token || null,
      },
    }
  })
)

export const client = new ApolloClient({
  link: ApolloLink.from([
    authMiddleware,
    errorLink,
    // new MultiAPILink({
    //   endpoints: {
    //     DEMAND_API: API_URL,
    //   },
    //   createHttpLink: () => new HttpLink(),
    //   getContext: (endpoint, getCurrentContext) => {
    //     const { headers } = getCurrentContext()
    //     switch (endpoint) {
    //       case '':
    //         return {
    //           headers,
    //         }
    //       default:
    //         return {}
    //     }
    //   },
    // }),
  ]),
  cache: new InMemoryCache(),
})
