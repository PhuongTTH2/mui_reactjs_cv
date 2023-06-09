import React from 'react'
import { Menu, MenuItem, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
const Header = () => {
  const classes = useStyles()
  const [anchorLogin, setAnchorLogin] = React.useState(null)
  const handleClickAvatar = (event: any) => {
    setAnchorLogin(event.currentTarget)
  }
  const handleCloseAvatar = () => {
    setAnchorLogin(null)
  }
  return (
    <div className={classes.root}>
      <Typography variant="caption" component="span" className={classes.accountName}>
        産業用蓄電池アプリ
      </Typography>
      <Typography variant="caption" component="span" className={classes.accountName} onClick={handleClickAvatar}>
        山田太郎
        <img src="/assets/images/arrow-down.svg" alt="arrow-down" />
      </Typography>
      <Menu
        id="simple-menu2"
        anchorEl={anchorLogin}
        keepMounted
        open={Boolean(anchorLogin)}
        onClose={handleCloseAvatar}
        className={classes.item}
      >
        <MenuItem>ログアウト</MenuItem>
      </Menu>
    </div>
  )
}

const useStyles = makeStyles((theme) => ({
  root: {
    margin: 0,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100vw',
    position: 'fixed',
    height: '50px',
    boxShadow: 'none',
    backgroundColor: '#547096',
    zIndex: 3,
    padding: '0 30px',
  },

  item: {
    fontSize: '12px',
    fontFamily: 'Hiragino Sans, sans-serif',
  },

  accountName: {
    color: '#fff',
    marginRight: 60,
    fontFamily: 'Hiragino Sans, sans-serif',
    fontSize: 15,
    fontWeight: 400,
    '&:hover': {
      cursor: 'pointer',
      opacity: 0.6,
    },
  },
}))
export default Header
