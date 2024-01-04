import React from 'react'
import { Box, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import clsx from 'clsx'
import moment from 'moment'
const AppMenu = () => {
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
      <Box className={classes.box}>
        <Typography variant="caption" component="span" className={clsx(classes.item, classes.time)}>
          12/31 (木)
        </Typography>
        <Typography variant="caption" component="p" className={classes.accountName}>
          {moment(new Date()).format('hh:mm')}
        </Typography>
      </Box>
      <Box className={classes.box}>
        <img src="/assets/images/pin/monitoring-icon.svg" alt="arrow-down" />
        <Typography variant="caption" component="p" className={classes.accountName}>
          モニタリング
        </Typography>
      </Box>
      <Box className={classes.box}>
        <img src="/assets/images/pin/control-icon.svg" alt="arrow-down" />
        <Typography variant="caption" component="p" className={classes.accountName}>
          充放電制御
        </Typography>
      </Box>
      <Box className={classes.box}>
        <img src="/assets/images/pin/battery-setting-icon.svg" alt="arrow-down" />
        <Typography variant="caption" component="p" className={classes.accountName}>
          設定
        </Typography>
      </Box>
    </div>
  )
}
const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: '50px',
    position: 'fixed',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'start',
    alignItems: 'start',
    width: '110px',
    height: '100vh',
    backgroundColor: 'rgb(136, 171, 218)',
    zIndex: 3,
    // padding: '0 30px',
  },
  box: {
    display: 'block',
    width: '100%',
    textAlign: 'center',
    paddingTop: '20px',
    minHeight: '90px',
    boxShadow: 'rgb(0 0 0 / 9%) 0px 0px 8px',
    '&:hover': {
      cursor: 'pointer',
    },
  },

  item: {
    borderBottom: '1px solid #fff ',
  },
  time: {
    color: '#fff',
    fontFamily: 'Meiryo UI W6", sans-serif',
    fontSize: 16,
    fontWeight: 600,
    width: '100%',
  },
  accountName: {
    color: '#fff',
    fontFamily: 'Meiryo UI W6", sans-serif',
    fontSize: 14,
    fontWeight: 600,
  },
}))
export default AppMenu
