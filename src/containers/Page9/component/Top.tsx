import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Box, Typography } from '@material-ui/core'
import StyledButton from 'components/FormControl/StyledButton'
const Top = () => {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <Box className={classes.box}>
        <Typography variant="caption" component="h1">
          店舗一覧
        </Typography>
      </Box>
    </div>
  )
}
const useStyles = makeStyles((theme) => ({
  root: {
    boxSizing: 'border-box',
    margin: 0,
    width: '100%',
    position: 'fixed',
    boxShadow: '0 1px 3px #E4E7F1',
    padding: '50px  0 0 110px',
    zIndex: 2,
    backgroundColor: '#fff',
  },
  box: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '24px 32px',
  },

}))
export default Top
