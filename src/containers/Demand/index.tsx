import { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
// import PropTypes from 'prop-types'
// import clsx from 'clsx'
import { Grid, Typography, Box } from '@material-ui/core'
import { Link } from 'react-router-dom'
import { PATH_NAME } from 'constants/index'
const Demand: React.FC = () => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <Box className={classes.body}>
        <Box>
          <Box className={classes.content}>
            <Typography variant="caption" component="p">
              ■ Admin
            </Typography>
          </Box>
          <Box className={classes.text}>
            <Link to={PATH_NAME.RUNNING}>Running Admin 1</Link>
          </Box>
          <Box className={classes.text}>
            <Link to={PATH_NAME.Page8}>Admin 2</Link>
          </Box>
          <Box className={classes.text}>
            <Link to={PATH_NAME.Page9}>Admin 2 sub</Link>
          </Box>
          <Box className={classes.text}>
            <Link to={PATH_NAME.Page10}>Admin 2 sub</Link>
          </Box>
          <Box className={classes.text}>
            <Link to={PATH_NAME.PageMui}>Admin 3</Link>
          </Box>
          <Box className={classes.text}>
            <Link to={PATH_NAME.PageSetting}>Admin Setting 4</Link>
          </Box>
        </Box>
        <Box>
          <Box className={classes.content}>
            <Typography variant="caption" component="p">
              ■ User
            </Typography>
          </Box>
          <Box className={classes.text}>
            <Link to={PATH_NAME.Page4}>Example UI user 1</Link>
          </Box>
          <Box className={classes.text}>
            <Link to={PATH_NAME.Page2}>Example UI user 2</Link>
          </Box>

          <Box className={classes.text}>
            <Link to={PATH_NAME.Page1}>Example UI user 3</Link>
          </Box>
          <Box className={classes.text}>
            <Link to={PATH_NAME.RECHARTS}>Example recharts</Link>
          </Box>
        </Box>
      </Box>
    </div>
  )
}

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: '#fff',
    width: '100vw',
    height: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  body: {
    backgroundColor: '#E7EEF8',
    display: 'flex',
    padding: '30px',
    gap: 30,
  },
  content: {},
  text: {
    marginBottom: '10px',
    background: '#88ABDA',
    color: '#000',
    padding: '15px',
    // margin: 'auto',
    minWidth: '130px',
    textAlign: 'center',
    fontFamily: 'Hiragino Sans, sans-serif',
    fontSize: 15,
    fontWeight: 600,
    cursor: 'pointer',
    borderRadius: '8px',
    '&:hover': {
      background: '#547096',
    },
  },
}))

export default Demand
