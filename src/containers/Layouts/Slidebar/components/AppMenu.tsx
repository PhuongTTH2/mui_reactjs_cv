import { NavLink, useNavigate } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles'
import { Box, ListItem, ListItemText, Typography } from '@material-ui/core'

import { PATH_NAME } from 'constants/index'

export default function AppMenu() {
  const classes = useStyles()
  const navigate = useNavigate()
  const appMenuItems: { name: string; link: string }[] = [
    {
      name: 'デマンド登録・設定',
      link: PATH_NAME.HOME,
    },
    {
      name: '実行中',
      link: PATH_NAME.RUNNING,
    },

    {
      name: 'ReChart',
      link: PATH_NAME.RECHARTS,
    },
  ]

  return (
    <Box className={classes.root}>
      <Box className={classes.groupLogo}>
        <Box className={classes.logo} onClick={() => navigate(PATH_NAME.HOME)}>
          {/* <img src={'/assets/images/logo.svg'} alt="logo" /> */}
          <Typography variant="subtitle2" component="span" className={classes.textLogo}>
            LOGO
          </Typography>
        </Box>
      </Box>
      {appMenuItems.map((item, index) => (
        <ListItem key={index} component={NavLink} to={item.link} className={classes.item}>
          <ListItemText primary={item.name} />
        </ListItem>
      ))}
    </Box>
  )
}

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: '#434343',
    position: 'fixed',
    maxWidth: 216,
    height: '100%',
    zIndex: 52,
  },
  groupLogo: {
    padding: 4,
    backgroundColor: '#434343',
    width: '216px',
    height: '48px',
    boxSizing: 'border-box',
  },
  logo: {
    display: 'flex',
    backgroundColor: '#C7000C',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    width: '100%',
    mixBlendMode: 'multiply',
    position: 'relative',
  },
  nav: {
    paddingTop: 0,
  },
  item: {
    borderBottom: '1px solid rgba(0, 0, 0, 0.12)',
    maxHeight: 45,
    color: '#fff',
    textAlign: 'center',
    '&.Mui-selected': {
      backgroundColor: '#2B2A2A',
    },
    '&.MuiListItem-root.Mui-selected, &.MuiListItem-root.Mui-selected:hover': {
      backgroundColor: '#2B2A2A',
    },
    '&.active': {
      backgroundColor: '#2B2A2A',
    },
  },
  textLogo: {
    color: '#C3C3C3',
    fontSize: 14,
    fontWeight: 500,
    position: 'absolute',
  },
}))
