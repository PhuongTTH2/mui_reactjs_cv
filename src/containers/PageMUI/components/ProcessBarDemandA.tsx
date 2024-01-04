import { Box, Typography, ButtonGroup, Button } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'

interface Props {
  logo: string
}
const ProcessBarDemandA = ({ logo }: Props) => {
  const classes = useStyles()
  return (
    <Box className={classes.root}>
      <Box
        style={{
          height: '80px',
          width: '72px',
          margin: '0 2px',
          backgroundImage: `url(${logo})`,
          backgroundRepeat: 'no-repeat',
        }}
      ></Box>
      <Box className={classes.demandText}>
        <Typography>Test</Typography>
        <Typography>Test</Typography>
        <Typography>Test</Typography>
      </Box>
      <Box className={classes.widthMax}>
        <Box style={{ backgroundColor: '#3B3B3B', height: '100%', width: '100%' }}>
          <Typography></Typography>
        </Box>

        <Box style={{ backgroundColor: '#222222', height: '100%', width: '70%', margin: '5px 0' }}>
          <Typography></Typography>
        </Box>
        <Box style={{ backgroundColor: '#C7C7C7', height: '100%', width: '50%' }}>
          <Typography></Typography>
        </Box>
      </Box>
    </Box>
  )
}
const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    marginTop: '10px',
  },
  demandText: {
    display: 'flex',
    flexDirection: 'column',
    alignItem: 'center',
    '& > .MuiTypography-root': {
      fontSize: 12,
      textTransform: 'capitalize',
      color: '#222222',
    },
  },
  widthMax: {
    width: '347px',
    height: '20px',
  },
}))
export default ProcessBarDemandA
