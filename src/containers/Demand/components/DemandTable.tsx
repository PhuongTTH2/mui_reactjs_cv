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
  Grid,
} from '@material-ui/core'
import DeleteAlert from 'components/Common/DeleteAlert'
import RightContainer from './RightContainer'
import StyledSwitch from 'components/FormControl/StyledSwitch'
import { SwitchValue } from 'constants/index'
import { useForm } from 'react-hook-form'
import useGetWidth from 'hooks/useGetWidth'
import { useLazyQuery, useMutation, useSubscription } from '@apollo/client'
import { START_DEMAND_JOBS } from 'api/graphql/mutations'
import { SUBSCRIPTION_DEMAND } from 'api/graphql/subscriptions'
import moment from 'moment'
import { getSize } from 'utils/helper'
import { isEmpty } from 'lodash'

interface Props {
  dataDemand: any[]
  tab: Number
}

const DemandTable = (props: Props) => {
  const { dataDemand, tab } = props
  const classes = useStyles()
  const widthScreen = useGetWidth()
  const hoverIconStart = '/assets/images/start-demand-hover.svg'
  const baseIconStart = '/assets/images/start-demand.svg'
  const [startIcon, setStartIcon] = useState(baseIconStart)

  const hoverIconTrash = '/assets/images/icon-trash-hover.svg'
  const baseIconTrash = '/assets/images/icon-trash.svg'
  const [trashIcon, setTrashIcon] = useState(baseIconTrash)

  const [isHoverStart, setIsHoverStart] = useState('')
  const [isHoverTrash, setIsHoverTrash] = useState('')

  const [openDialog, setOpenDialog] = useState(false)
  const handleDialogOpen = () => {
    setOpenDialog(true)
  }
  const onBack = () => {
    setOpenDialog(false)
  }

  const form = useForm({})
  const onDelete = () => {}

  const handleHoverIcon = (index: any, type: string) => {
    if (type === 'start') {
      isHoverStart === index ? setIsHoverStart('') : setIsHoverStart(index)
    } else {
      isHoverTrash === index ? setIsHoverTrash('') : setIsHoverTrash(index)
    }
  }

  const handleHoverOutIcon = (type: string) => {
    if (type === 'start') {
      setStartIcon(baseIconStart)
      setIsHoverStart('')
    } else {
      setTrashIcon(baseIconTrash)
      setIsHoverTrash('')
    }
  }
  const [startDemandJobs] = useMutation(START_DEMAND_JOBS)
  const handleImage = (demandId: any) => {
    let variables = {
      demandId: demandId,
    }
    startDemandJobs({ variables }).then((response) => {
      console.log(response)
    })
    // const { data, loading } = useSubscription(SUBSCRIPTION_DEMAND, { variables: { demandId } })
  }

  return (
    <div className={classes.root}>
      <TableContainer className={classes.tableContainer}>
        <Table stickyHeader aria-label="sticky table" className={classes.table}>
          <TableHead className={classes.tableHead}>
            <TableRow>
              <TableCell
                className={clsx(classes.tableCell, classes.headerCell)}
                style={{ width: widthScreen <= 1560 ? 675 : 863 }}
              >
              
              </TableCell>
              <TableCell className={clsx(classes.tableCell, classes.headerCell)} style={{ width: 63 }}>
              
              </TableCell>
              <TableCell className={clsx(classes.tableCell, classes.headerCell)} style={{ width: 119 }}>
              
              </TableCell>
              <TableCell className={clsx(classes.tableCell, classes.headerCell)} style={{ width: 55 }}>
              
              </TableCell>
            </TableRow>
          </TableHead>
        </Table>
        <TableBody className={clsx(classes.tableBody, classes.scroll)}>
          {dataDemand.map((row, index) => (
            <>
              <TableRow key={row.name} className={classes.borderTop}>
                <TableCell
                  className={clsx(classes.tableCell, classes.bodyCellText)}
                  style={{ width: widthScreen <= 1560 ? 710 : 865 }}
                >
                  {tab === 1 ? <>{row?.originalFiles[0]?.name}</> : 'ripple_dreams_fields.blend'}
                  {/* ripple_dreams_fields.blend */}
                </TableCell>
                <TableCell
                  rowSpan={2}
                  className={clsx(classes.tableCell, classes.bodyCell, classes.wrapperImg)}
                  style={{ width: 64 }}
                >
                  <img
                    style={{ cursor: 'pointer' }}
                    src={index === parseInt(isHoverStart) ? hoverIconStart : startIcon}
                    alt="logo"
                    onMouseOver={() => handleHoverIcon(index, 'start')}
                    onMouseOut={() => handleHoverOutIcon('start')}
                    onClick={() => handleImage(row.id)}
                  />
                </TableCell>
                <TableCell
                  rowSpan={2}
                  className={clsx(classes.tableCell, classes.bodyCell, classes.wrapperImg)}
                  style={{ width: 119 }}
                  align="center"
                >
                  {/* <StyledSwitch<boolean, SwitchValue>
                    name={`periodic.${index}`}
                    form={form}
                    transform={{
                      input: (value) => (value === SwitchValue.On ? true : false),
                      output: (e) => (e.target.checked ? SwitchValue.On : SwitchValue.Off),
                    }}
                  /> */}
                  <Box className={classes.tableBoxText}>
                    <Typography>00****</Typography>
                  </Box>
                </TableCell>
                <TableCell
                  rowSpan={2}
                  className={clsx(classes.tableCell, classes.bodyCell, classes.wrapperImg)}
                  style={{ width: 56 }}
                >
                  <img
                    style={{ cursor: 'pointer' }}
                    src={index === parseInt(isHoverTrash) ? hoverIconTrash : trashIcon}
                    alt="logo"
                    onClick={() => handleDialogOpen()}
                    onMouseOver={() => handleHoverIcon(index, 'trash')}
                    onMouseOut={() => handleHoverOutIcon('trash')}
                  />
                </TableCell>
                <DeleteAlert openDialog={openDialog} onBack={onBack} onDelete={onDelete} />
              </TableRow>

              {tab === 1 ? (
                <TableRow>
                  <TableCell
                    className={clsx(classes.tableCell, classes.bodyCellText)}
                    style={{ width: widthScreen <= 1560 ? 710 : 865 }}
                  >
                    <Grid
                      container
                      xs={12}
                      className={classes.tableInfo}
                      style={{ paddingLeft: widthScreen <= 1560 ? 0 : '10px' }}
                    >
                      <Grid item xs={widthScreen <= 1560 ? 12 : 5} style={{ display: 'flex', alignItems: 'center' }}>
                        <Typography className={classes.fontSizeText12}></Typography>
                        <Typography variant="subtitle1" className={clsx(classes.fontSizeText12, classes.value)}>
                          {row.fileType}
                        </Typography>
                        <Typography className={classes.fontSizeText12}></Typography>
                        <Typography variant="subtitle1" className={clsx(classes.fontSizeText12, classes.value)}>
                          {getSize(row.originalFiles[0].size)}
                        </Typography>
                      </Grid>
                      <Grid
                        item
                        xs={widthScreen <= 1560 ? 12 : 7}
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          paddingLeft: widthScreen <= 1560 ? 0 : '15px',
                        }}
                      >
                        <Typography className={classes.fontSizeText12}></Typography>
                        <Typography variant="subtitle1" className={clsx(classes.fontSizeText12, classes.value)}>
                          {isEmpty(row?.originalFiles[0]?.uploadedAt)
                            ? '-'
                            : moment(row?.originalFiles[0]?.uploadedAt).format('YYYY/MM/DD HH:mm:ss')}
                        </Typography>
                        <Typography className={classes.fontSizeText12}></Typography>
                        <Typography variant="subtitle1" className={clsx(classes.fontSizeText12, classes.value)}>
                          {isEmpty(row?.originalFiles[0]?.expiredAt)
                            ? '-'
                            : moment(row?.originalFiles[0]?.expiredAt).format('YYYY/MM/DD HH:mm:ss')}
                        </Typography>
                      </Grid>
                    </Grid>
                  </TableCell>
                </TableRow>
              ) : (
                <TableRow>
                  <TableCell
                    className={clsx(classes.tableCell, classes.bodyCellText)}
                    style={{ width: widthScreen <= 1560 ? 710 : 865 }}
                  >
                    <Grid
                      container
                      xs={12}
                      className={classes.tableInfo}
                      style={{ paddingLeft: widthScreen <= 1560 ? 0 : '10px' }}
                    >
                      <Grid item xs={widthScreen <= 1560 ? 12 : 5} style={{ display: 'flex', alignItems: 'center' }}>
                        <Typography className={classes.fontSizeText12}></Typography>
                        <Typography variant="subtitle1" className={clsx(classes.fontSizeText12, classes.value)}>
                          {row.name}
                        </Typography>
                        <Typography className={classes.fontSizeText12}></Typography>
                        <Typography variant="subtitle1" className={clsx(classes.fontSizeText12, classes.value)}>
                          {row.size}
                        </Typography>
                      </Grid>
                      <Grid
                        item
                        xs={widthScreen <= 1560 ? 12 : 7}
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          paddingLeft: widthScreen <= 1560 ? 0 : '15px',
                        }}
                      >
                        <Typography className={classes.fontSizeText12}></Typography>
                        <Typography variant="subtitle1" className={clsx(classes.fontSizeText12, classes.value)}>
                          {row.dateStart}
                        </Typography>
                        <Typography className={classes.fontSizeText12}></Typography>
                        <Typography variant="subtitle1" className={clsx(classes.fontSizeText12, classes.value)}>
                          {row.dateEnd}
                        </Typography>
                      </Grid>
                    </Grid>
                  </TableCell>
                </TableRow>
              )}
            </>
          ))}
        </TableBody>
      </TableContainer>
      <RightContainer />
    </div>
  )
}
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    padding: '24px',
    height: 'calc(100vh + 125px)',
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
  },
  tableBody: {
    width: '1105px',
    background: '#434343',
  },
  tableCell: {
    border: '1px solid #707070',
    fontFamily: '"Hiragino Sans W3", sans-serif',
    fontSize: 15,
    textAlign: 'center',
    padding: 0,
    color: '#FFFFFF',
  },
  headerCell: {
    height: 19,
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: 300,
    background: '#2B2A2A',
  },

  bodyCell: {
    height: 80,
    alignItems: 'center',
  },
  bodyCellText: {
    height: 40,
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
  },
  wrapperImg: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  tableInfo: {
    display: 'flex',
    alignItems: 'center',
    padding: 10,
    justifyContent: 'space-between',
  },
  tableBoxText: {
    background: '#FFFFFF',
    color: '#707070',
    width: '88px',
    height: '24px',
    margin: 'auto',
    textAlign: 'center',
    marginTop: 8,
    boxShadow: 'inset 0 3px 6px #00000016',
    borderRadius: 2,
  },
  fontSizeText12: {
    fontSize: 12,
    color: '#FFFFFF',
  },
  value: {
    fontSize: 12,
    fontWeight: 400,
    color: '#B5B5B5',
    margin: '0px 28px 0px 17px',
    '&:last-of-type': {
      marginRight: 0,
    },
  },
}))

export default DemandTable
