import { Box, Typography, ButtonGroup, Button } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import AreaGraph from './AreaGraph'
import BoxAreaGraph from './BoxAreaGraph'
import Energy from './Energy'
const ContentBox1 = () => {
  const classes = useStyles()
  return (
    <Box className={classes.root}>
      <Box className={classes.text}>
        <Typography>CPV (JOB ASSIGNMENT)</Typography>
        <Typography variant="body2">More Insights {'>'}</Typography>
      </Box>
      <Box className={classes.value}>
        <Box className={classes.textNumber}>
          <Typography>5.409</Typography>
        </Box>
        <ButtonGroup
          className={classes.textButton}
          variant="contained"
          color="primary"
          aria-label="contained primary button group"
        >
          <Button>TFLOPS</Button>
          <Button>Vega56</Button>
        </ButtonGroup>
      </Box>

      <Box className={classes.processBar}>
        <Box className={classes.processBarActive}>
          <Typography> 88.4%</Typography>
          <Typography>ACTIVE</Typography>
        </Box>
        <Box className={classes.processBarInActive}>
          <Typography> 11.6%</Typography>
          <Typography>INACTIVE</Typography>
        </Box>
      </Box>
      <Typography>Resources</Typography>
      <Box className={classes.chart}>
        <Box className={classes.reChartLeft}>
          <BoxAreaGraph name={'Active GPUs'} ratio={'24 / 28'} percent={2.1} />
          <BoxAreaGraph name={'Active Servers'} ratio={'109 / 128'} percent={2.3} />
        </Box>
        <Box className={classes.reChartRight}>
          <BoxAreaGraph name={'Active Containers'} ratio={'24 / 28'} percent={2.1} />
          <BoxAreaGraph name={'Active CPVs'} ratio={'8 / 10'} percent={2.3} />
        </Box>
      </Box>
      <Typography>Energy</Typography>
      <Box className={classes.boxEnergy}>
        <Energy name={'GREEN ENERGY'} ratio={'67.65'} percent={2.3} />
        <Energy name={'CO2 REDUCTION'} ratio={'24'} percent={2.3} />
      </Box>
    </Box>
  )
}
const useStyles = makeStyles(() => ({
  root: {
    padding: '33px 33px',
  },
  text: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    '& > .MuiTypography-root:nth-of-type(2)': {
      color: '#C7C316',
      fontSize: '11px',
      cursor: 'pointer',
    },
  },
  value: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    position: 'relative',
  },
  textNumber: {
    flex: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    '& > .MuiTypography-root:nth-of-type(1)': {
      fontSize: '55px',
    },
  },
  textButton: {
    position: 'absolute',
    right: 0,
    height: '25px',
    '& > .MuiButtonBase-root': {
      fontSize: 12,
      textTransform: 'capitalize',
      color: '#222222',
      backgroundColor: '#FFFFFF',
    },
  },
  processBar: {
    display: 'flex',
    justifyContent: 'center',
    height: '80px',
    width: '100%',
  },
  processBarActive: {
    width: '441px',
    borderRadius: '10px 0 0 10px',
    backgroundColor: '#C7020B',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#FFFFFF',
    '& > .MuiTypography-root:nth-of-type(1)': {
      fontSize: '20px',
    },
    '& > .MuiTypography-root:nth-of-type(2)': {
      fontSize: '12px',
    },
  },
  processBarInActive: {
    width: '151px',
    borderRadius: '0 10px 10px 0',
    backgroundColor: '#EAEAEA',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    '& > .MuiTypography-root:nth-of-type(1)': {
      fontSize: '20px',
    },
    '& > .MuiTypography-root:nth-of-type(2)': {
      fontSize: '12px',
    },
  },
  chart: {
    display: 'flex',
    alignItems: 'center',
    margin: '24px 0',
  },
  reChartLeft: {
    display: 'flex',
    flexDirection: 'column',

    alignItems: 'end',
    flex: 1,
  },
  reChartRight: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'end',
    flex: 1,
  },

  reChartItem: {
    display: 'flex',
    alignItems: 'center',
  },
  percent: {
    display: 'flex',
    alignItems: 'center',
  },
  boxEnergy: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'left',
  },
}))
export default ContentBox1
