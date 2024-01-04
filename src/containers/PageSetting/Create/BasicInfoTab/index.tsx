import React from 'react'
import clsx from 'clsx'
import { useStyles } from '../../styles'
import { Grid, Typography, Box, Avatar, Popover, MenuItem, FormGroup } from '@material-ui/core'

const BasicInfoTab = () => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <Box display="flex" justifyContent="space-between" alignItems="center" marginBottom="15px" marginTop="20px">
        <Typography className={clsx(classes.requiredTop)}>※ は必須項目</Typography>
      </Box>
    </div>
  )
}

export default BasicInfoTab
