import React from 'react'
import clsx from 'clsx'
import { makeStyles } from '@material-ui/styles'
import { PATH_NAME } from 'constants/pathName'
import { List, ListItem, ListItemIcon, Typography, Box, ButtonGroup, Button } from '@material-ui/core'
const Header: React.FC = () => {
  const classes = useStyles()
  const [value, setValue] = React.useState(0)
  const [selectedIndex, setSelectedIndex] = React.useState(1)
  const [buttonActive, setButtonActive] = React.useState('DEMO')
  const appMenuItems: {
    name: string
    icon: string
    link: string
  }[] = [
    {
      name: 'DASHBOARD',
      icon: '/assets/images/dashboard.svg',
      link: PATH_NAME.PageMui,
    },
    {
      name: 'ANALYTICS',
      icon: '/assets/images/analitics.svg',
      link: PATH_NAME.PageMui,
    },
    {
      name: 'CPVs',
      icon: '/assets/images/cpvs.svg',
      link: PATH_NAME.PageMui,
    },
  ]
  const appMenuItemsRenderPool: {
    name: string
    icon: string
    link: string
  }[] = [
    {
      name: 'DASHBOARD',
      icon: '/assets/images/dashboard.svg',
      link: PATH_NAME.PageMui,
    },
    {
      name: 'ANALYTICS',
      icon: '/assets/images/analitics.svg',
      link: PATH_NAME.PageMui,
    },
  ]
  const handleMenuItemClick = (index: number) => {
    setSelectedIndex(index)
  }
  const handleButton = (value: string) => {
    setButtonActive(value)
  }

  return (
    <div className={classes.root}>
      <Box className={classes.rootMenu}>
        <Box className={classes.text}>
          <Typography variant="inherit"> Admin console</Typography>
        </Box>
        <List className={classes.menu}>
          {buttonActive !== 'RenderPool'
            ? appMenuItems.map((item, index) => (
                <ListItem
                  key={index}
                  selected={selectedIndex === index}
                  className={classes.menuItem}
                  onClick={() => handleMenuItemClick(index)}
                >
                  <div
                    style={{
                      height: '21px',
                      width: '20px',
                      backgroundImage: `url("${item.icon}")`,
                      backgroundRepeat: 'no-repeat',
                      border: '0',
                    }}
                  />
                  <Typography variant="inherit" className={classes.valueInfo}>
                    {item.name}
                  </Typography>
                </ListItem>
              ))
            : appMenuItemsRenderPool.map((item, index) => (
                <ListItem
                  key={index}
                  selected={selectedIndex === index}
                  className={classes.menuItem}
                  onClick={() => handleMenuItemClick(index)}
                >
                  <div
                    style={{
                      height: '21px',
                      width: '20px',
                      backgroundImage: `url("${item.icon}")`,
                      backgroundRepeat: 'no-repeat',
                      border: '0',
                    }}
                  />
                  <Typography variant="inherit" className={classes.valueInfo}>
                    {item.name}
                  </Typography>
                </ListItem>
              ))}
        </List>
      </Box>
      <Box className={classes.rootMode}>
        <Typography variant="inherit" className={classes.textMODE}>
          MODE:
        </Typography>
        <ButtonGroup
          className={classes.buttonGroup}
          variant="contained"
          color="primary"
          aria-label="contained primary button group"
        >
          <Button
            className={`${buttonActive === 'DEMO' ? classes.buttonActive : ''}`}
            onClick={() => handleButton('DEMO')}
          >
            DEMO
          </Button>
          <Button
            className={`${buttonActive === 'MCP' ? classes.buttonActive : ''}`}
            onClick={() => handleButton('MCP')}
          >
            MCP
          </Button>
          <Button
            className={`${buttonActive === 'RenderPool' ? classes.buttonActive : ''}`}
            onClick={() => handleButton('RenderPool')}
          >
            RenderPool
          </Button>
        </ButtonGroup>
        <Typography variant="inherit" className={classes.textDN}>
          DN
        </Typography>
        <Typography variant="inherit" className={classes.textDumny}>
          Dumny Name
        </Typography>
        <Box
          className={classes.itemIconImg}
          style={{
            height: '8px',
            width: '20px',
            backgroundImage: 'url(/assets/images/arrow-below-yellow.svg)',
            backgroundRepeat: 'no-repeat',
            border: '0',
          }}
        />
      </Box>
    </div>
  )
}

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#222222',
  },
  rootMenu: {
    height: '72px',
    display: 'flex',
  },
  text: {
    display: 'flex',
    alignItems: 'center',
    margin: '16px 16px',
    backgroundColor: '#000000',
    '& > .MuiTypography-root': {
      color: '#656565',
      padding: '0 2px',
    },
  },
  menu: {
    display: 'flex',
    '&.MuiList-padding': {
      padding: 0,
    },
  },

  menuItem: {
    width: '230px',
    backgroundColor: '#262626',
    borderLeft: '3px solid #3B3B3B',
    height: '52px',
    margin: '10px 2px',
    cursor: 'pointer',

    '&:hover': {
      backgroundColor: '#3B3B3B',
      '&.MuiTypography-root': {
        color: '#222222',
      },
      '&:nth-of-type(1) > div': {
        backgroundImage: `url('/assets/images/dashboard-hover.svg') !important`,
      },
      '&:nth-of-type(2) > div': {
        backgroundImage: `url('/assets/images/analitics-hover.svg') !important`,
      },
      '&:nth-of-type(3) > div': {
        backgroundImage: `url('/assets/images/cpvs-hover.svg') !important`,
      },
    },

    '&.Mui-selected': {
      backgroundColor: '#421B1D',
      borderLeft: '3px solid #C7020B',
      '& .MuiTypography-root': {
        color: '#FFFFFF',
      },
      '&:nth-of-type(1) > div': {
        backgroundImage: `url('/assets/images/dashboard-active.svg') !important`,
      },
      '&:nth-of-type(2) > div': {
        backgroundImage: `url('/assets/images/analitics-active.svg') !important`,
      },
      '&:nth-of-type(3) > div': {
        backgroundImage: `url('/assets/images/cpvs-active.svg') !important`,
      },
    },
    '&.Mui-selected:hover': {
      backgroundColor: '#3B3B3B',
      borderLeft: '3px solid #3B3B3B',
      '&:nth-of-type(1) > div': {
        backgroundImage: `url('/assets/images/dashboard-hover.svg') !important`,
      },
      '&:nth-of-type(2) > div': {
        backgroundImage: `url('/assets/images/analitics-hover.svg') !important`,
      },
      '&:nth-of-type(3) > div': {
        backgroundImage: `url('/assets/images/cpvs-hover.svg') !important`,
      },
    },
  },
  // itemIcon: {
  //   '&.MuiListItemIcon-root': {
  //     minWidth: '33px',
  //   },
  // },

  valueInfo: {
    fontSize: 12,
    color: '#959595',
    paddingLeft: '10px',
    fontWeight: 'bold',
  },

  rootMode: {
    display: 'flex',

    '& > *': {
      margin: '0 5px',
    },
    alignItems: 'center',
    '& > .MuiTypography-root': {
      fontSize: 12,
    },
  },
  textMODE: {
    color: '#656565',
  },
  buttonGroup: {
    height: '32px',
    marginRight: '50px',
    '& > .MuiButtonBase-root': {
      backgroundColor: '#FFFFFF',
      color: '#000000',
      fontSize: 12,
      textTransform: 'capitalize',
    },
  },
  buttonActive: {
    '&.MuiButtonBase-root': {
      backgroundColor: '#21D59B',
      color: '#FFFFFF',
    },
  },
  textDN: {
    minWidth: '28px',
    height: '28px',
    backgroundColor: '#C7C316',
    color: '#222222',
    borderRadius: '50%',

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontWeight: 'bold',
  },
  textDumny: {
    color: '#C7C316',
    fontSize: '12px',
  },

  itemIconImg: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
}))
export default Header
