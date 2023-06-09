import React, { useState } from 'react'
import { Grid, Typography, Box, FormControl, FormControlLabel } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
interface Props {
  isWidth: any
}
const LineWidth = ({ isWidth }: Props) => {
  const classes = useStyles()
  return (
    <Box className={classes.boxRelative}>
      <Box
        className={classes.boxAbsolute}
        sx={{
          width: isWidth,
        }}
      >
        <Typography>{isWidth}</Typography>
      </Box>
    </Box>
  )
}
const useStyles = makeStyles((them) => ({
  boxRelative: {
    display: 'flex',
    position: 'relative',
    background: '#C4C4C4',
    height: 48,
    width: '100%',
  },
  boxAbsolute: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: '#C7000C',
    height: '100%',
    position: 'absolute',
  },
}))
export default LineWidth
