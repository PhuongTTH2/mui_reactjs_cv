import { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import clsx from 'clsx'
import {
  Typography,
  Box,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TableContainer,
  Avatar,
  Collapse,
  Grid,
} from '@material-ui/core'
import DeleteAlert from 'components/Common/DeleteAlert'
import useGetWidth from 'hooks/useGetWidth'
import { useLazyQuery } from '@apollo/client'
import { GET_DEMAND_ID } from 'api/graphql/queries'
import moment from 'moment'
import RightContainer from './RightContainer'
interface Props {
  data: any[]
  running: any[]
}

const RunningTable = (props: Props) => {
  const { running } = props
  const widthScreen = useGetWidth()
  const classes = useStyles()
  const [selectedIndex, setSelectedIndex] = useState('')

  const hoverIcon = '/assets/images/icon-x-hover.svg'
  const baseIcon = '/assets/images/icon-x.svg'
  const [removeIcon, setRemoveIcon] = useState(baseIcon)
  const [isHover, setIsHover] = useState('')

  const handleCollapse = (index: any) => {
    if (selectedIndex === index) {
      setSelectedIndex('')
    } else {
      setSelectedIndex(index)
    }
  }

  const [openDialog, setOpenDialog] = useState(false)
  const handleDialogOpen = () => {
    setOpenDialog(true)
  }
  const onBack = () => {
    setOpenDialog(false)
  }
  const onDelete = () => {}

  const handleHoverIcon = (index: any) => {
    if (isHover === index) {
      setIsHover('')
    } else {
      setIsHover(index)
    }
  }

  const handleHoverOutIcon = () => {
    setRemoveIcon(baseIcon)
    setIsHover('')
  }
  const [getDemandId] = useLazyQuery(GET_DEMAND_ID, {
    fetchPolicy: 'no-cache',
    onCompleted: (data) => {
      console.log(data)
    },
    onError: (error) => {},
  })

  const handleImage = (demandId: any) => {
    setOpenDialog(true)
    // getDemandId({ variables: { demandId: demandId } })
  }
  return (
    <div className={classes.root}>
      <TableContainer className={classes.tableContainer}>
        <Table stickyHeader aria-label="sticky table" className={classes.table}>
          <TableHead className={classes.tableHead}>
            <TableRow>
              <TableCell
                className={clsx(classes.tableCell, classes.headerCell, classes.bodyCellText)}
                // style={{ width: 500 }}
              >
                Test
              </TableCell>
              <TableCell
                className={clsx(classes.tableCell, classes.headerCell, classes.bodyCellText)}
                style={{ width: 500 }}
              >
                Test
              </TableCell>
              <TableCell
                className={clsx(classes.tableCell, classes.headerCell, classes.bodyCellText)}
                style={{ maxWidth: 80, width: 80, textAlign: 'center', paddingLeft: 0 }}
              >
                Test
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody className={clsx(classes.tableBody, classes.scroll)}>
            {running?.map((row, index) => (
              <>
                <TableRow key={row.name} className={classes.borderTop}>
                  <TableCell
                    className={clsx(classes.tableCell, classes.flexContainer)}
                    style={{ border: 0 }}
                    onClick={() => handleCollapse(index)}
                  >
                    <Box className={clsx(classes.flexContainer, classes.iconBlock)}>
                      <Avatar src={row.image} className={classes.image} />
                    </Box>
                    <Box className={classes.contentBlock} style={{ minHeight: widthScreen <= 1560 ? 100 : 80 }}>
                      <Box className={classes.labelBlock}>
                        <Typography variant="subtitle2" component="span" style={{ lineHeight: '40px' }}>
                          {row.name}
                        </Typography>
                      </Box>
                      <Grid
                        container
                        className={classes.tableInfo}
                        style={{
                          height: widthScreen <= 1560 ? 60 : 40,
                          padding: widthScreen <= 1560 ? '5px 16px' : '0px 16px',
                        }}
                      >
                        <Grid item xs={widthScreen <= 1560 ? 12 : 6} style={{ display: 'flex', alignItems: 'center' }}>
                          <Typography variant="subtitle1" className={classes.labelInfo}>
                            Test
                          </Typography>
                          <Typography variant="subtitle2" className={classes.valueInfo}>
                            {row.size}
                          </Typography>
                          <Typography variant="subtitle1" className={classes.labelInfo}>
                            Test
                          </Typography>
                          <Typography variant="subtitle2" className={classes.valueInfo}>
                            {row.dateStart}
                          </Typography>
                        </Grid>
                        {row.number === 1 ? (
                          ''
                        ) : (
                          <Grid
                            item
                            xs={widthScreen <= 1560 ? 12 : 6}
                            style={{ display: 'flex', alignItems: 'center' }}
                          >
                            <Typography variant="subtitle1" className={classes.labelInfo}>
                            Test
                            </Typography>
                            <Typography variant="subtitle2" className={classes.valueInfo}>
                              {row.number}
                            </Typography>
                          </Grid>
                        )}
                      </Grid>
                    </Box>
                  </TableCell>
                  <TableCell
                    className={clsx(classes.tableCell, classes.bodyCell)}
                    style={{ padding: '0 18px', width: 500 }}
                    onClick={() => handleCollapse(index)}
                  >
                    <Box display="flex" alignItems="center">
                      <Box className={classes.groupPercent}>
                        <Box className={classes.percent} style={{ width: Math.abs(row.percent) + '%' }}></Box>
                      </Box>
                      <Typography variant="subtitle2" className={classes.labelPercent}>
                        {Math.round(Math.abs(row.percent))}%
                      </Typography>
                    </Box>
                  </TableCell>
                  <TableCell
                    className={clsx(classes.tableCell, classes.bodyCell, classes.wrapperImg)}
                    style={{ maxWidth: 80, width: 80, border: 0 }}
                  >
                    <img
                      style={{ cursor: 'pointer' }}
                      src={index === parseInt(isHover) ? hoverIcon : removeIcon}
                      alt="logo"
                      // onClick={() => handleDialogOpen()}
                      onMouseOver={() => handleHoverIcon(index)}
                      onMouseOut={handleHoverOutIcon}
                      onClick={() => handleImage(row.id)}
                    />
                  </TableCell>
                  <DeleteAlert
                    openDialog={openDialog}
                    onBack={onBack}
                    onDelete={onDelete}
                    title=""
                    label=""
                  />
                </TableRow>
                <TableRow>
                  <TableCell
                    className={clsx(classes.tableCell, classes.bodyCell)}
                    style={{ paddingBottom: 0, paddingTop: 0, height: 0 }}
                    align="right"
                    colSpan={3}
                  >
                    <Collapse in={index === parseInt(selectedIndex)} timeout="auto" unmountOnExit>
                      <Table aria-label="simple table" style={{ background: '#2B2A2A' }}>
                        <TableBody>
                          {row?.jobs?.map((child: any, indexChild: any) => (
                            <TableRow key={indexChild} className={classes.rowChild}>
                              <TableCell
                                className={clsx(classes.tableCell, classes.bodyCell)}
                                style={{ width: 72, borderTop: '1px solid #707070', border: 0 }}
                              ></TableCell>
                              <TableCell
                                className={clsx(classes.tableCell, classes.bodyCell, classes.borderBottomRow)}
                                align="right"
                                style={{ border: 0 }}
                              >
                                <Box
                                  className={classes.contentBlock}
                                  style={{ minHeight: widthScreen <= 1560 ? 100 : 80 }}
                                >
                                  <Box className={classes.labelBlock}>
                                    <Typography variant="subtitle2" component="span" style={{ lineHeight: '40px' }}>
                                      {/* {child.name} */} job{indexChild}
                                    </Typography>
                                  </Box>
                                  <Grid
                                    container
                                    xs={12}
                                    className={classes.tableInfo}
                                    style={{
                                      height: widthScreen <= 1560 ? 60 : 40,
                                      padding: widthScreen <= 1560 ? '5px 16px' : '0px 16px',
                                    }}
                                  >
                                    <Grid
                                      item
                                      xs={widthScreen <= 1560 ? 12 : 6}
                                      style={{ display: 'flex', alignItems: 'center' }}
                                    >
                                      <Typography
                                        variant="subtitle1"
                                        className={classes.labelInfo}
                                        style={{ color: '#C3C3C3' }}
                                      >
                                        ファイルサイズ：
                                      </Typography>
                                      <Typography
                                        variant="subtitle2"
                                        className={classes.valueInfo}
                                        style={{ color: '#FFFFFF' }}
                                      >
                                        {/* {child.size} */}
                                        10.9 MB
                                      </Typography>
                                      <Typography
                                        variant="subtitle1"
                                        className={classes.labelInfo}
                                        style={{ color: '#C3C3C3' }}
                                      >
                                        作成時刻：
                                      </Typography>
                                      <Typography
                                        variant="subtitle2"
                                        className={classes.valueInfo}
                                        style={{ color: '#FFFFFF' }}
                                      >
                                        {moment(child.running).format('YYYY/MM/DD HH:mm:ss')}
                                      </Typography>
                                    </Grid>
                                    <Grid
                                      item
                                      xs={widthScreen <= 1560 ? 12 : 6}
                                      style={{ display: 'flex', alignItems: 'center' }}
                                    >
                                      <Typography
                                        variant="subtitle1"
                                        className={classes.labelInfo}
                                        style={{ color: '#C3C3C3' }}
                                      >
                                        フレーム数：
                                      </Typography>
                                      <Typography
                                        variant="subtitle2"
                                        className={classes.valueInfo}
                                        style={{ color: '#FFFFFF' }}
                                      >
                                        {/* {child.number} */}9
                                      </Typography>
                                    </Grid>
                                  </Grid>
                                </Box>
                              </TableCell>
                              <TableCell
                                className={clsx(classes.tableCell, classes.bodyCell, classes.borderBottomRow)}
                                align="right"
                                style={{ padding: '0 18px', width: 500, border: 0, borderLeft: '1px solid #707070' }}
                              >
                                <Box display="flex" alignItems="center">
                                  <Box className={classes.groupPercent}>
                                    <Box
                                      className={classes.percent}
                                      style={{ width: Math.abs(child.progress) + '%' }}
                                    ></Box>
                                  </Box>
                                  <Typography variant="subtitle2" className={classes.labelPercent}>
                                    {Math.round(Math.abs(child.progress))}%
                                  </Typography>
                                </Box>
                              </TableCell>
                              <TableCell
                                className={clsx(classes.tableCell, classes.bodyCell)}
                                style={{ maxWidth: 80, width: 80, border: 0, borderLeft: '1px solid #707070' }}
                              ></TableCell>
                            </TableRow>
                          ))}
                        </TableBody>
                      </Table>
                    </Collapse>
                  </TableCell>
                </TableRow>
              </>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <RightContainer />
    </div>
  )
}

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    padding: '24px',
    height: '100vh',
  },
  tableContainer: {
    '&::-webkit-scrollbar': {
      display: 'none',
    },
  },
  table: {
    width: '100%',
    overflowX: 'hidden',
    borderCollapse: 'collapse',
  },
  tableHead: {
    background: '#2B2A2A',
    borderBottom: '8px solid #707070',
  },
  tableBody: {
    width: '1105px',
    background: '#434343',
  },
  tableCell: {
    border: '1px solid #707070',
    // border: 0,
    fontFamily: 'Hiragino Sans, sans-serif',
    fontSize: 15,
    textAlign: 'center',
    padding: 0,
    color: '#FFFFFF',
    boxSizing: 'border-box',
  },
  headerCell: {
    height: 24,
    color: '#FFFFFF',
    fontWeight: 300,
    fontSize: 14,
    background: '#2B2A2A',
  },
  bodyCell: {
    height: 80,
    alignItems: 'center',
  },
  bodyCellText: {
    // height: 40,
    textAlign: 'left',
    paddingLeft: '16px',
  },
  scroll: {
    border: 'none',
    overflowY: 'scroll',
    overflowX: 'hidden',
    background: '#434343',
    '&::-webkit-scrollbar': {
      display: 'none',
    },
  },
  borderTop: {
    borderTop: '8px solid #707070',
    '&:first-child': {
      borderTop: '0',
    },
  },
  wrapperImg: {
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex',
  },
  tableInfo: {
    display: 'flex',
    alignItems: 'center',
    paddingLeft: 16,
    justifyContent: 'space-between',
    height: 40,
  },
  tableBoxText: {
    background: '#FFFFFF',
    color: '#707070',
    width: '88px',
    height: '24px',
    margin: 'auto',
    textAlign: 'center',
  },
  flexContainer: {
    display: 'flex',
    alignItems: 'center',
  },
  flexColumn: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
  },
  image: {
    borderRadius: 0,
    width: 32,
    height: 'auto',
  },
  fontSizeText11: {
    fontSize: 11,
    fontFamily: 'Hiragino Sans, sans-serif',
  },
  fontSizeText12: {
    fontSize: 12,
    fontFamily: 'Hiragino Sans, sans-serif',
  },
  labelBlock: {
    height: 40,
    paddingLeft: 16,
    width: '100%',
    borderBottom: '1px solid #707070',
    textAlign: 'left',
    boxSizing: 'border-box',
  },
  contentBlock: {
    display: 'flex',
    alignItems: 'flex-start',
    flexDirection: 'column',
    width: '100%',
    height: 80,
    borderLeft: '1px solid #707070',
  },
  labelInfo: {
    fontSize: 12,
    color: '#fff',
    marginRight: 8,
  },
  valueInfo: {
    fontSize: 12,
    color: '#C3C3C3',
    marginRight: 28,
    '&:last-of-type': {
      marginRight: 0,
    },
  },
  groupPercent: {
    width: '100%',
    height: 16,
    boxShadow: 'inset 0 3px 6px #00000016',
    filter: 'drop-shadow(0 3px 6px #00000016)',
    position: 'relative',
  },
  labelPercent: {
    fontWeight: 500,
    fontSize: 13,
    marginLeft: 13,
  },
  percent: {
    background: '#197D95',
    position: 'absolute',
    height: '100%',
    left: 0,
    top: 0,
    filter: 'drop-shadow(0 3px 6px #00000016)',
  },
  borderBottomRow: {
    borderBottom: '1px solid #707070 !important',
    '&:last-of-type': {
      borderBottom: 0,
    },
  },
  iconBlock: {
    justifyContent: 'center',
    width: 72,
    minWidth: 72,
    height: '100%',
    boxSizing: 'border-box',
  },
  rowChild: {
    '&:last-of-type': {
      '& .MuiTableCell-root:nth-of-type(2)': {
        borderBottom: '0 !important',
      },
      '& .MuiTableCell-root:nth-of-type(3)': {
        borderBottom: '0 !important',
      },
    },
  },
}))

export default RunningTable
