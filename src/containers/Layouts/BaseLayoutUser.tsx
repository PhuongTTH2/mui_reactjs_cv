import { FC } from 'react'
import { Outlet } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles'

type Props = {
  children?: React.ReactNode
}
const BaseLayoutUser: FC<Props> = ({ children }) => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
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
    // top: 0,
    // lef: 216,
    // padding: '32px',
    width: '100%',
  },
}))

export default BaseLayoutUser
