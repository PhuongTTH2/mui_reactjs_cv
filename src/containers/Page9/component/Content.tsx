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
import CircleLabel from 'components/Label/CircleLabel'

import clsx from 'clsx'
const Content = () => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <Box className={classes.box}>
        <Table className={classes.table}>
          <TableHead className={classes.tableHead}>
            <TableRow>
              <TableCell className={clsx(classes.tableCell, classes.headerCell)}></TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
              <TableCell>出力</TableCell>
            </TableRow>
          </TableHead>
          <TableBody className={classes.tableBody}>
            <TableRow>
              <TableCell></TableCell>
              <TableCell>
                <Typography variant="caption" component="span">
                  
                </Typography>
              </TableCell>
              <TableCell>
                <CircleLabel
                  background="rgb(169, 211, 197)"
                  fontSize={10}
                  height={24}
                  width={24}
                  label="実績 発電量"
                  style={{ margin: '0 40px 4.5px 0' }}
                />
                <Typography variant="caption" component="span">
                  
                </Typography>
              </TableCell>
              <TableCell>
                <Box className={classes.tableLevel}>
                  <Box className={classes.tableFrame}></Box>
                  <Box className={classes.tableProgress}></Box>
                </Box>
                <Typography variant="caption" component="span">
                  85 %
                </Typography>
              </TableCell>
              <TableCell>
                <Typography variant="caption" component="span">
                  528
                </Typography>
                <Typography variant="caption" component="span">
                  kWh
                </Typography>
              </TableCell>
              <TableCell>
                <Typography variant="caption" component="span">
                  26
                </Typography>
                <Typography variant="caption" component="span">
                  kW
                </Typography>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell></TableCell>
              <TableCell>
                <Typography variant="caption" component="span">
                  
                </Typography>
              </TableCell>
              <TableCell>
                <CircleLabel
                  background="rgb(235, 209, 157)"
                  fontSize={10}
                  height={24}
                  width={24}
                  label=""
                  style={{ margin: '0 40px 4.5px 0' }}
                />
                <Typography variant="caption" component="span">
                  
                </Typography>
              </TableCell>
              <TableCell>
                <Box className={classes.tableLevel}>
                  <Box className={classes.tableFrame}></Box>
                  <Box className={classes.tableProgress}></Box>
                </Box>
                <Typography variant="caption" component="span">
                  85 %
                </Typography>
              </TableCell>
              <TableCell>
                <Typography variant="caption" component="span">
                  528
                </Typography>
                <Typography variant="caption" component="span">
                  kWh
                </Typography>
              </TableCell>
              <TableCell>
                <Typography variant="caption" component="span">
                  26
                </Typography>
                <Typography variant="caption" component="span">
                  kW
                </Typography>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell></TableCell>
              <TableCell>
                <Typography variant="caption" component="span">
                  
                </Typography>
              </TableCell>
              <TableCell>
                <CircleLabel
                  background="rgb(208, 208, 208)"
                  fontSize={10}
                  height={24}
                  width={24}
                  label="実績 発電量"
                  style={{ margin: '0 40px 4.5px 0' }}
                />
                <Typography variant="caption" component="span">
                  充電中
                </Typography>
              </TableCell>
              <TableCell>
                <Box className={classes.tableLevel}>
                  <Box className={classes.tableFrame}></Box>
                  <Box className={classes.tableProgress}></Box>
                </Box>
                <Typography variant="caption" component="span">
                  85 %
                </Typography>
              </TableCell>
              <TableCell>
                <Typography variant="caption" component="span">
                  528
                </Typography>
                <Typography variant="caption" component="span">
                  kWh
                </Typography>
              </TableCell>
              <TableCell>
                <Typography variant="caption" component="span">
                  26
                </Typography>
                <Typography variant="caption" component="span">
                  kW
                </Typography>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
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
    alignItems: 'start',
    padding: '24px 32px',
  },

  table: {
    // minWidth: 650,
    width: '100%',
    '& .MuiTableCell-root': {
      border: '1px solid rgb(227, 227, 227)',
    },
  },
  tableHead: {
    background: 'rgb(112, 112, 112)',
  },
  tableBody: {
    // background: 'rgb(231, 238, 248)',
  },
  tableCell: {},
  headerCell: {
    height: '100%',
    maxHeight: '24px',
    maxWidth: '120px',
    width: '120px',
    color: 'rgb(255, 255, 255)',
    fontFamily: 'Hiragino Sans, sans-serif',
    fontSize: '12px',
    textAlign: 'center',
  },
  tableLevel: {
    height: '20px',
    position: 'relative',
    background: 'rgb(255, 255, 255)',
    boxSizing: 'border-box',
    marginRight: '0px',
    width: '97%',
  },
  tableFrame: {
    backgroundImage: 'url(/assets/images/pin/percent-background.svg)',
    backgroundRepeat: 'no-repeat',
    position: 'absolute',
    left: '0px',
    top: '0px',
    width: '100%',
    height: '100%',
    zIndex: 10,
  },
  tableProgress: {
    background: 'rgb(169, 211, 197)',
    position: 'absolute',
    height: '100%',
    left: '0px',
    top: '0px',
    width: '85%',
    zIndex: 6,
  },
}))
export default Content
