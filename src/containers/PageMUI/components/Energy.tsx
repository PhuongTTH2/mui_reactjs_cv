import { Box, Typography, ButtonGroup, Button } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'

interface Props {
  name: string
  ratio: string
  percent: number
}
const Energy = ({ name, ratio, percent }: Props) => {
  const classes = useStyles()
  return (
    <Box className={classes.reChartItem}>
      <Box>
        <Typography className={classes.name}> {name}</Typography>
        <Typography className={classes.ratio}> {ratio}</Typography>
        <Box className={classes.percent}>
          <Typography> {percent}%</Typography>
          <Box
            style={{
              height: '18px',
              width: '18px',
              margin: '0 2px',
              backgroundImage: 'url(/assets/images/ic-arrow-narrow-up.svg)',
              backgroundRepeat: 'no-repeat',
            }}
          ></Box>
          <Typography> than last hour</Typography>
        </Box>
      </Box>
    </Box>
  )
}
const useStyles = makeStyles(() => ({
  reChartItem: {
    display: 'flex',
    alignItems: 'center',
    padding: '0 24px',
    // border: '0.5px solid #707070',
  },
  name: {
    fontSize: 20,
    fontWeight: 500,
  },
  ratio: {
    fontSize: 18,
    margin: '10px 0',
  },
  percent: {
    display: 'flex',
    alignItems: 'center',

    '& > .MuiTypography-root': {
      fontSize: 12,
    },
    '& > .MuiTypography-root:nth-of-type(1)': {
      color: '#C7C316',
    },
    '& > .MuiTypography-root:nth-of-type(2)': {
      color: '#959595',
      paddingRight: '10px',
    },
  },
}))
export default Energy
