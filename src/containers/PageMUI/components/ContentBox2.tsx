import { Box, Typography, ButtonGroup, Button } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import AreaGraph from './AreaGraph'
import BoxAreaGraph from './BoxAreaGraph'
import Energy from './Energy'
import ProcessBarDemandA from './ProcessBarDemandA'
const ContentBox2 = () => {
  const classes = useStyles()
  return (
    <Box className={classes.root}>
      <Box className={classes.demandText}>
        <Typography variant="body1">Test</Typography>
        <Typography variant="body2">More Insights {'>'}</Typography>
      </Box>
      <Box className={classes.demandValue}>
        <Typography>332,409</Typography>
        <ButtonGroup
          className={classes.demandButton}
          variant="contained"
          color="primary"
          aria-label="contained primary button group"
        >
          <Button>POINT</Button>
          <Button>USD</Button>
        </ButtonGroup>
      </Box>
      <Box className={classes.processBar}>
        <Box className={classes.processRENDERING}>
          <Typography>36.4%</Typography>
          <Typography>Test</Typography>
        </Box>
        <Box className={classes.processSIMULATION}>
          <Typography>27.3%</Typography>
          <Typography>Test</Typography>
        </Box>
        <Box className={classes.processMODEL}>
          <Typography>18.0%</Typography>
          <Typography>Test</Typography>
        </Box>
        <Box className={classes.processMINING}>
          <Typography>43.6%</Typography>
          <Typography>Test</Typography>
        </Box>
      </Box>
      <Box>
        <ProcessBarDemandA logo="/assets/images/rendering.png" />
        <ProcessBarDemandA logo="assets/images/model-training.png"/>
        <ProcessBarDemandA logo="/assets/images/mining.png"/>
      </Box>
    </Box>
  )
}
const useStyles = makeStyles(() => ({
  root: {
    padding: '33px 33px',
  },
  demandText: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    '& > .MuiTypography-body2': {
      color: '#C7C316',
      fontSize: '11px',
      cursor: 'pointer',
    },
  },
  demandValue: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    '& > .MuiTypography-root:nth-of-type(1)': {
      fontSize: '55px',
    },
  },
  demandButton: {
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
    height: '80px',
    width: '100%',
  },
  processRENDERING: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: '168px',
    borderRadius: '10px 0 0 10px',
    backgroundColor: '#07517A',
    color: '#FFFFFF',
    '& > .MuiTypography-root:nth-of-type(1)': {
      fontSize: '20px',
    },
    '& > .MuiTypography-root:nth-of-type(2)': {
      fontSize: '12px',
    },
  },
  processSIMULATION: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',

    width: '146px',
    backgroundColor: '#387394',
    color: '#FFFFFF',
    // borderRight: '1px solid #FFFFFF',
    '& > .MuiTypography-root:nth-of-type(1)': {
      fontSize: '20px',
    },
    '& > .MuiTypography-root:nth-of-type(2)': {
      fontSize: '12px',
    },
  },
  processMODEL: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',

    width: '112px',
    backgroundColor: '#295E7C',
    color: '#FFFFFF',
    '& > .MuiTypography-root:nth-of-type(1)': {
      fontSize: '20px',
    },
    '& > .MuiTypography-root:nth-of-type(2)': {
      fontSize: '12px',
    },
  },
  processMINING: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',

    width: '216px',
    backgroundColor: '#EAEAEA',
    borderRadius: '0 10px 10px 0',
    color: '#FFFFFF',
    '& > .MuiTypography-root:nth-of-type(1)': {
      fontSize: '20px',
    },
    '& > .MuiTypography-root:nth-of-type(2)': {
      fontSize: '12px',
    },
  },
}))
export default ContentBox2
