import { makeStyles } from '@material-ui/styles'
import React from 'react'
import { Grid, Typography, Box, MenuItem, Menu } from '@material-ui/core'
import Header from './Header/Header'
import HeaderButton from './HeaderButton/HeaderButton'
const Page1: React.FC = () => {
  const classes = useStyles()
  const [anchorEl, setAnchorEl] = React.useState<null | any>(null)
  const MouseOver = (event: any) => {
    // setAnchorEl('basic-menu')
    event.target.src = '/assets/images/up.svg'
  }
  const MouseOut = (event: any) => {
    event.target.src = '/assets/images/down.svg'
  }
  const handleClick = (event: any) => {
    if (anchorEl !== event.currentTarget) {
      setAnchorEl(event.currentTarget)
    }
  }
  const handleClose = () => {
    setAnchorEl(null)
  }
  return (
    <div className={classes.root}>
      <Box className={classes.header}>
        <Box className={classes.logo}>
          <img src={'/assets/images/page1-icon-logo.svg'} alt="" />
        </Box>
        <Box className={classes.boxText}>
          <Box
            className={classes.boxTextText}
            // aria-owns={anchorEl ? 'basic-menu' : undefined}
            // aria-haspopup="true"
            // onMouseOver={handleClick}
          >
            <Typography variant="subtitle2" className={classes.text}>
              Courses
            </Typography>
            <img
              src={'/assets/images/down.svg'}
              className={classes.iconDown}
              alt=""
              onMouseOver={MouseOver}
              onMouseOut={MouseOut}
            />
            <Box className={classes.boxTextTextText}>
              <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleClose}
                MenuListProps={{ onMouseLeave: handleClose }}
              >
                <MenuItem>Profile</MenuItem>
                <MenuItem>My account</MenuItem>
                <MenuItem>Logout</MenuItem>
              </Menu>
            </Box>
            <Box className={classes.boxTextText}>
              <Typography variant="subtitle2" className={classes.text}>
                A
              </Typography>
              <Typography variant="subtitle2" className={classes.text}>
                B
              </Typography>
              <Typography variant="subtitle2" className={classes.text}>
                C
              </Typography>
            </Box>
          </Box>
          <Box className={classes.boxTextText}>
            <Typography variant="subtitle2" className={classes.text}>
              Masterclass Experience
            </Typography>
          </Box>
          <Box className={classes.boxTextText}>
            <Typography variant="subtitle2" className={classes.text}>
              More
            </Typography>
            <img
              src={'/assets/images/down.svg'}
              className={classes.iconDown}
              alt=""
              onMouseOver={MouseOver}
              onMouseOut={MouseOut}
            />
          </Box>
        </Box>
      </Box>

      <Header />
      <HeaderButton />
    </div>
  )
}
const useStyles = makeStyles((them) => ({
  root: {
    // background: 'rgb(13,17,23)',
    display: 'flex',
    flexDirection: 'column',
    padding: '16px 32px',
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    // padding: '16px 32px',
  },
  logo: { flex: 1, display: 'flex', justifyContent: 'flex-start' },
  boxText: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  boxTextText: {
    display: 'flex',
    alignItems: 'center',
    margin: '0 16px',
  },
  boxTextTextText: {
    display: 'relative',
  },
  text: {
    color: 'yellow',
    fontWeight: 400,
    fontSize: 16,
    lineHeight: 2,

    cursor: 'pointer',
    '&.MuiTypography-subtitle2:hover': {
      color: '#FFFFFF',
    },
  },
  iconDown: {
    width: 20,
    height: 20,
    paddingLeft: 10,
  },
}))
export default Page1
