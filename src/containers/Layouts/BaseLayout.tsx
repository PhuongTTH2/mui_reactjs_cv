import { FC } from 'react'
import { Outlet } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles'

import Header from './Slidebar/Header'
import AppMenu from './Slidebar/components/AppMenu'
type Props = {
  children?: React.ReactNode
}
const BaseLayout: FC<Props> = ({ children }) => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <Header />
      <AppMenu />
      <div className={classes.main}>
        {children}
        <Outlet />
      </div>
    </div>
  )
}

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  main: {
    marginTop: 48,
    marginLeft: 216,
    padding: '32px',
    width: '100%',
  },
}))

export default BaseLayout
