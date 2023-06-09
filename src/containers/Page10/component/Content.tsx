import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import {
  Box,
  Typography,
  Grid,
  FormGroup,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TableContainer,
  Paper,
} from '@material-ui/core'
import StyledButton from 'components/FormControl/StyledButton'
import DatePickerField from 'components/FormControl/DatePickerField'
import StyledSwitch from 'components/FormControl/StyledSwitch'
import StyledCheckbox from 'components/FormControl/StyledCheckbox'
import CircleLabel from 'components/Label/CircleLabel'
import Graph from './Graph'
import clsx from 'clsx'
const Content = () => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <Box className={classes.box}>
        <Box className={classes.boxBoxblock}>
          <Box className={classes.boxHeader}>
            <img src="/assets/images/arrow-down.svg" className={classes.img} alt="arrow-down" />
            <Typography variant="caption" component="span" className={classes.text}>
              現在の状態
            </Typography>
          </Box>
          <Box style={{ display: 'flex' }}>
            <StyledButton
              background="rgb(112, 112, 112)"
              width={100}
              height={35}
              fontSize="15px"
              colorText="rgb(255, 255, 255)"
              borderRadius="0px"
              img="/assets/images/pin/lock-icon-active.svg"
            >
              ロック
            </StyledButton>
            <StyledButton
              background="rgb(228, 228, 228)"
              width={100}
              height={35}
              fontSize="15px"
              colorText="rgb(177, 177, 177)"
              borderRadius="0px"
              img="/assets/images/pin/unlock-icon.svg"
            >
              解除
            </StyledButton>
          </Box>
          <Box className={classes.boxContent}>
            <Typography variant="caption" component="p">
              ■ 充放電ステータス
            </Typography>
          </Box>
        </Box>
        <Box>sad</Box>
      </Box>
    </div>
  )
}
const useStyles = makeStyles((theme) => ({
  root: {
    boxSizing: 'border-box',
    width: '100%',
    marginTop: '135px',
    marginLeft: '110px',
    zIndex: 1,
  },
  box: {
    display: 'flex',
    justifyContent: 'start',
    gap: '30px',
    alignItems: 'start',
    padding: '24px 32px',
  },
  boxBoxblock: {
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
  },
  boxHeader: {
    display: 'flex',
    alignItems: 'center',
  },
  img: {
    width: '20px',
    marginRight: '5px',
  },
  text: {
    fontFamily: 'Meiryo UI W6", sans-serif',
    fontSize: 16,
    fontWeight: 600,
  },
  boxContent: {
    boxShadow: 'rgb(0 0 0 / 9%) 0px 0px 8px',
    border: '1px solid rgb(232, 232, 232)',
    padding: '24px',
    marginTop: '10px',
    width: '100%',
    boxSizing: 'border-box',
    height: '100%',
    overflowY: 'unset',
  },
}))
export default Content
