import { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import PropTypes from 'prop-types'
import clsx from 'clsx'
import { Grid, Typography, Box } from '@material-ui/core'
import RunningTable from './components/RunningTable'
import { GET_DEMAND } from 'api/graphql/queries'
import { useQuery } from '@apollo/client'
import { DemandState } from 'constants/enum'
import { DemandType } from 'constants/enum'
import moment from 'moment'
import { getSize } from 'utils/helper'
const Running: React.FC = () => {
  const classes = useStyles()
  const [tab, setTab] = useState(3)
  const [running, setRunning] = useState<any>([])
  const [runningRendering, setRunningRendering] = useState<any>([])
  useQuery(GET_DEMAND, {
    fetchPolicy: 'no-cache',
    variables: {
      demandStates: [DemandState.WAITING, DemandState.RUNNING],
    },
    onCompleted: (data) => {
      let newData: any = []
      data?.demands?.nodes.forEach((item: any) => {
        if (item.demandType === DemandType.RENDERING) {
          newData.push({
            id: item.id,
            demandType: item.demandType,
            image: '/assets/images/icon-rendering-blue.svg',
            name: item.originalFiles[0].name,
            size: getSize(item.originalFiles[0].size),
            dateStart: moment(item.createdAt).format('YYYY/MM/DD HH:mm:ss'),
            // number: Math.abs(item.originalFiles[0].frameCount),
            number: 1,
            percent: item.progress,
            jobs: item.jobs.nodes,
          })
        } else if (item.demandType === DemandType.MACHINE_LEARNING) {
          newData.push({
            id: item.id,
            demandType: item.demandType,
            image: '/assets/images/icon-model-training-blue.svg',
            name: item.originalFiles[0].name,
            size: getSize(item.originalFiles[0].size),
            dateStart: moment(item.createdAt).format('YYYY/MM/DD HH:mm:ss'),
            // number: Math.abs(item.originalFiles[0].frameCount),
            number: 1,
            percent: item.progress,
            jobs: item.jobs.nodes,
          })
        }
      })
      setRunning(newData)
    },
  })

  function TabPanel(props: any) {
    const { children, value, index, ...other } = props
    const classes = useStyles()
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && <Box className={classes.tabContainer}>{children}</Box>}
      </div>
    )
  }

  TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
  }
  const handleTabClick = (tab: number) => {
    setTab(tab)
    if (tab === 2) {
      let newCompletion: any = running.filter((result: any) => {
        if (result.demandType === DemandType.RENDERING) {
          return true
        }
        return false
      })
      setRunningRendering(newCompletion)
    }
  }

  const dataAll2: any[] = [
    {
      image: '/assets/images/icon-rendering-blue.svg',
      text: 'ripple_dreams_fields.blend',
      name: 'RENDERINGsample.blend',
      size: '44.5 MB',
      dateStart: ' 2022/04/26  10:46:01',
      number: 9,
      percent: 66,
      jobs: [
        {
          name: 'job1',
          size: '10.9 MB',
          dateStart: '2022/04/26  10:46:01',
          frame_number: 9,
          progress: 80,
        },
        {
          name: 'job2',
          size: '10.9 MB',
          dateStart: '2022/04/26  10:46:01',
          frame_number: 9,
          progress: 80,
        },
        {
          name: 'job3',
          size: '10.9 MB',
          dateStart: '2022/04/26  10:46:01',
          frame_number: 9,
          progress: 80,
        },
      ],
    },
    {
      image: '/assets/images/icon-model-training-blue.svg',
      text: 'ripple_dreams_fields.blend',
      name: 'MODEL TRAININGsample.blend',
      size: '44.5 MB',
      dateStart: ' 2022/04/26  10:46:01',
      number: 9,
      percent: 66,
      jobs: [
        {
          name: 'job1',
          size: '10.9 MB',
          dateStart: '2022/04/26  10:46:01',
          frame_number: 9,
          progress: 80,
        },
        {
          name: 'job2',
          size: '10.9 MB',
          dateStart: '2022/04/26  10:46:01',
          frame_number: 9,
          progress: 80,
        },
      ],
    },
    {
      image: '/assets/images/icon-simulation-blue.svg',
      text: 'ripple_dreams_fields.blend',
      name: 'SIMULATIONsample.blend',
      size: '44.5 MB',
      dateStart: ' 2022/04/26  10:46:01',
      number: 9,
      percent: 66,
      jobs: [
        {
          name: 'job1',
          size: '10.9 MB',
          dateStart: '2022/04/26  10:46:01',
          frame_number: 9,
          progress: 80,
        },
        {
          name: 'job2',
          size: '10.9 MB',
          dateStart: '2022/04/26  10:46:01',
          frame_number: 9,
          progress: 80,
        },
        {
          name: 'job3',
          size: '10.9 MB',
          dateStart: '2022/04/26  10:46:01',
          frame_number: 9,
          progress: 80,
        },
      ],
    },
    {
      image: '/assets/images/icon-photogrammetry-blue.svg',
      text: 'ripple_dreams_fields.blend',
      name: 'PHOTOGRAMMETRYsample.blend',
      size: '44.5 MB',
      dateStart: ' 2022/04/26  10:46:01',
      number: 9,
      percent: 66,
      jobs: [
        {
          name: 'job1',
          size: '10.9 MB',
          dateStart: '2022/04/26  10:46:01',
          frame_number: 9,
          progress: 80,
        },
        {
          name: 'job2',
          size: '10.9 MB',
          dateStart: '2022/04/26  10:46:01',
          frame_number: 9,
          progress: 80,
        },
        {
          name: 'job3',
          size: '10.9 MB',
          dateStart: '2022/04/26  10:46:01',
          frame_number: 9,
          progress: 80,
        },
      ],
    },
  ]

  const dataRendering: any[] = [
    {
      image: '/assets/images/icon-rendering-blue.svg',
      text: 'ripple_dreams_fields.blend',
      name: 'RENDERINGsample.blend',
      size: '44.5 MB',
      dateStart: ' 2022/04/26  10:46:01',
      number: 9,
      percent: 66,
      jobs: [
        {
          name: 'job1',
          rpr_size: 10.9,
          dateStart: '2022/04/26  10:46:01',
          frame_number: 9,
          progress: 80,
        },
        {
          name: 'job2',
          rpr_size: 10.9,
          dateStart: '2022/04/26  10:46:01',
          frame_number: 9,
          progress: 80,
        },
        {
          name: 'job3',
          rpr_size: 10.9,
          dateStart: '2022/04/26  10:46:01',
          frame_number: 9,
          progress: 80,
        },
      ],
    },
    {
      image: '/assets/images/icon-model-training-blue.svg',
      text: 'ripple_dreams_fields.blend',
      name: 'MODEL TRAININGsample.blend',
      size: '44.5 MB',
      dateStart: ' 2022/04/26  10:46:01',
      number: 9,
      percent: 66,
      jobs: [
        {
          name: 'job1',
          rpr_size: 10.9,
          dateStart: '2022/04/26  10:46:01',
          frame_number: 9,
          progress: 80,
        },
        {
          name: 'job2',
          rpr_size: 10.9,
          dateStart: '2022/04/26  10:46:01',
          frame_number: 9,
          progress: 80,
        },
      ],
    },
    {
      image: '/assets/images/icon-simulation-blue.svg',
      text: 'ripple_dreams_fields.blend',
      name: 'SIMULATIONsample.blend',
      size: '44.5 MB',
      dateStart: ' 2022/04/26  10:46:01',
      number: 9,
      percent: 66,
      jobs: [
        {
          name: 'job1',
          rpr_size: 10.9,
          dateStart: '2022/04/26  10:46:01',
          frame_number: 9,
          progress: 80,
        },
        {
          name: 'job2',
          rpr_size: 10.9,
          dateStart: '2022/04/26  10:46:01',
          frame_number: 9,
          progress: 80,
        },
        {
          name: 'job3',
          rpr_size: 10.9,
          dateStart: '2022/04/26  10:46:01',
          frame_number: 9,
          progress: 80,
        },
      ],
    },
  ]

  const dataPhotogrammetry: any[] = [
    {
      image: '/assets/images/icon-photogrammetry-blue.svg',
      text: 'ripple_dreams_fields.blend',
      name: 'PHOTOGRAMMETRYsample.blend',
      size: '44.5 MB',
      dateStart: ' 2022/04/26  10:46:01',
      number: 9,
      percent: 66,
      jobs: [
        {
          name: 'job1',
          rpr_size: 10.9,
          dateStart: '2022/04/26  10:46:01',
          frame_number: 9,
          progress: 80,
        },
        {
          name: 'job2',
          rpr_size: 10.9,
          dateStart: '2022/04/26  10:46:01',
          frame_number: 9,
          progress: 80,
        },
        {
          name: 'job3',
          rpr_size: 10.9,
          dateStart: '2022/04/26  10:46:01',
          frame_number: 9,
          progress: 80,
        },
      ],
    },
  ]

  return (
    <div className={classes.root}>
      <Box className={classes.header}>
        <Box className={clsx(classes.tabInfo, tab === 1 ? classes.disabled : '')} onClick={(e) => handleTabClick(1)}>
          <img
            src={'/assets/images/icon-all.svg'}
            alt=""
            style={{ margin: '0px 25px', height: '30px', width: '32px' }}
          />
          <Typography variant="subtitle2" className={classes.titleTab}>
            ALL
          </Typography>
        </Box>
        <Box className={clsx(classes.tabInfo, tab === 2 ? classes.disabled : '')} onClick={(e) => handleTabClick(2)}>
          <img
            src={'/assets/images/icon-rendering.svg'}
            alt=""
            style={{ margin: '0px 25px', height: '28px', width: '32px' }}
          />
          <Typography variant="subtitle2" className={classes.titleTab}>
          Test
          </Typography>
        </Box>
        <Box className={clsx(classes.tabInfo, tab === 3 ? classes.disabled : '')} onClick={(e) => handleTabClick(3)}>
          <img
            src={'/assets/images/icon-model-training.svg'}
            alt=""
            style={{ margin: '0px 15px', height: '28px', width: '32px' }}
          />
          <Typography variant="subtitle2" className={classes.titleTab}>
          Test
          </Typography>
        </Box>
        <Box className={clsx(classes.tabInfo, tab === 4 ? classes.disabled : '')} onClick={(e) => handleTabClick(4)}>
          <img
            src={'/assets/images/icon-simulation.svg'}
            alt=""
            style={{ margin: '0px 25px', height: '28px', width: '32px' }}
          />
          <Typography variant="subtitle2" className={classes.titleTab}>
          Test
          </Typography>
        </Box>
        <Box className={clsx(classes.tabInfo, tab === 5 ? classes.disabled : '')} onClick={(e) => handleTabClick(5)}>
          <img
            src={'/assets/images/icon-photogrammetry.svg'}
            alt=""
            style={{ margin: '0px 10px', height: '28px', width: '32px' }}
          />
          <Typography variant="subtitle2" className={classes.titleTab}>
          Test
          </Typography>
        </Box>
      </Box>
      <Grid className={classes.content}>
        <TabPanel value={tab} index={1}>
          <RunningTable data={dataAll2} running={running} />
        </TabPanel>
        <TabPanel value={tab} index={2}>
          <RunningTable data={dataAll2} running={runningRendering} />
        </TabPanel>
        <TabPanel value={tab} index={3}>
          <RunningTable data={dataAll2} running={dataAll2} />
        </TabPanel>
        <TabPanel value={tab} index={4}>
          <RunningTable data={dataAll2} running={dataAll2} />
        </TabPanel>
        <TabPanel value={tab} index={5}>
          <RunningTable data={dataAll2} running={dataAll2} />
        </TabPanel>
      </Grid>
    </div>
  )
}

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: '#707070',
    minWidth: '1105px',
  },
  header: {
    display: 'flex',
    color: '#FFFFFF',
    background: '#3B3B3B',
    boxShadow: 'none',
  },
  content: {
    background: '#707070',
  },
  tabInfo: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'left',
    fontFamily: 'Hiragino Sans, sans-serif',
    fontSize: 12,
    width: '222px',
    height: '46px',
    borderRight: '2px solid #707070',
    borderTop: '2px solid #707070',
    cursor: 'pointer',
    '&:first-child': {
      width: '220px',
      borderLeft: '2px solid #707070',
      borderRadius: '5px 0px 0px 0px',
    },
    '&:last-child': {
      borderRadius: '0px 5px 0px 0px',
    },
  },
  disabled: {
    backgroundColor: '#707070',
    cursor: 'auto',
    '& .MuiTypography-body1': {
      cursor: 'default',
    },
  },
  tabContainer: {
    fontFamily: 'Hiragino Sans, sans-serif',
    fontSize: 12,
  },
  titleTab: {
    fontWeight: 400,
    fontSize: 15,
  },
}))

export default Running
