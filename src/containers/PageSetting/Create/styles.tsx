import { makeStyles } from '@material-ui/core'

export const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: '32px',
    backgroundColor: '#F0F0F0',
    height: '100vh',
  },
  requiredTop: {
    fontSize: 15,
    fontWeight: 600,
    fontFamily: 'Hiragino Sans, sans-serif',
    color: '#FF0000',
  },
  tabContainer: {
    // padding: '0 20px 20px 20px',
    // fontFamily: 'Hiragino Sans, sans-serif',
    // fontSize: 12,
    // background: '#FFFFFF',
  },
  header: {
    display: 'flex',
    color: '#5F5F5F',
    backgroundColor: 'unset !important',
    height: 50,
    boxShadow: 'none  !important',
    '& .MuiTabs-flexContainer': {
      alignItems: 'center',
    },
    '& .MuiTab-root': {
      padding: '0 10px',
      minWidth: 150,
      minHeight: 50,
      fontFamily: 'Hiragino Sans, sans-serif',
      fontSize: 15,
      background: '#76A2AA',
      fontWeight: 300,
      color: '#FFFFFF',
      borderRadius: '5px 5px 0 0',
      marginRight: 1,
      opacity: 1,
    },
    '& .MuiTab-textColorInherit.Mui-selected': {
      color: '#76A2AA',
      background: '#FFF',
      borderRadius: '5px 5px 0 0',
      fontWeight: 300,
    },
    '& .MuiTab-textColorInherit:first-child.Mui-selected': {
      borderRadius: '5px 5px 0 0',
    },
  },
}))
