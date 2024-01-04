import { useContext, createContext, useState, ReactNode } from 'react'
import { makeStyles, Backdrop, CircularProgress } from '@material-ui/core'

const LoadingContext = createContext({
  isLoading: false,
  showLoading: () => {},
  hideLoading: () => {},
})

const LoadingProvider = ({ children }: { children: ReactNode }) => {
  const classes = useStyles()
  const [isLoading, setIsLoading] = useState(false)

  return (
    <LoadingContext.Provider
      value={{
        isLoading: isLoading,
        showLoading: () => setIsLoading(true),
        hideLoading: () => setIsLoading(false),
      }}
    >
      {children}
      <Backdrop className={classes.backdrop} open={isLoading} onClick={() => setIsLoading(false)}>
        <CircularProgress color="inherit" />
      </Backdrop>
    </LoadingContext.Provider>
  )
}

const useStyles = makeStyles((theme: any) => ({
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: '#fff',
  },
}))

const useLoading = () => useContext(LoadingContext)

export { LoadingProvider, useLoading }
