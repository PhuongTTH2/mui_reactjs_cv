import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Avatar, Menu, MenuItem } from '@material-ui/core'

const Header: React.FC = () => {
  const classes = useStyles()
  const [anchorEl, setAnchorEl] = React.useState(null)

  const handleClick = (event: any) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
    <div className={classes.root}>
      {/* <Avatar className={classes.setting} src="/assets/images/setting.svg" onClick={handleClick} alt="" />
            <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
                className={classes.menu}
            >
                <MenuItem className={classes.item} onClick={handleClose}>利用企業一覧</MenuItem>
                <MenuItem className={classes.item} onClick={handleClose}>メンテナンス事業者一覧</MenuItem>
                <MenuItem className={classes.item} onClick={handleClose}>ユーザ一覧</MenuItem>
                <MenuItem className={classes.item} onClick={handleClose}>お知らせ</MenuItem>
            </Menu>
            <Avatar className={classes.avatar} alt="" src="/assets/images/avatar.svg" /> */}
    </div>
  )
}

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
    width: '100%',
    position: 'fixed',
    height: '48px',
    zIndex: 50,
    background: '#2B2A2A',
  },
  // avatar: {
  //     marginRight: 40,
  //     marginLeft: 22,
  //     width: '32px',
  //     height: '32px',
  // },
  // setting: {
  //     width: '24px',
  //     height: '24px',
  //     cursor: 'pointer',
  // },
  // menu: {
  //     boxShadow: '0 0 2px #e3e3e3',
  //     '& ul': {
  //         padding: 0,
  //     },
  //     '& .MuiPaper-root': {
  //         top: '55px !important',
  //         left: 'unset !important',
  //         right: '40px !important',
  //     }
  // },
  // item: {
  //     fontSize: '12px',
  //     fontFamily: 'Hiragino Sans, sans-serif',
  //     background: '#FAFAFA',
  //     borderBottom: '1px solid #fff',
  //     height: '40px',
  //     width: '200px',
  // }
}))

export default Header
