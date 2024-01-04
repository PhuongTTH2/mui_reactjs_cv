import { makeStyles } from '@material-ui/core'

export const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    background: '#F0F0F0',
    minHeight: '100vh',
    width: '100%',
    padding: '32px',
    // '& .MuiButton-root.Mui-disabled': {
    //     background: '#F0F0F0',
    //     color: '#CBCBCB !important',
    //     '& .MuiAvatar-root': {
    //         opacity: 0.3,
    //     },
    // },
  },
  requiredTop: {
    fontSize: 15,
    fontWeight: 600,
    fontFamily: 'Hiragino Sans, sans-serif',
    color: '#FF0000',
  },
  tabContainer: {
    padding: '0 20px 20px 20px',
    // fontFamily: 'Hiragino Sans, sans-serif',
    // fontSize: 12,
    // background: '#FFFFFF',
  },
  header: {
    display: 'flex',
    color: '#5F5F5F',
    backgroundColor: '#EFEFEF',
    height: 50,
    boxShadow: 'none',
  },
}))
