import { Box } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import ContentBox1 from './ContentBox1'
import ContentBox2 from './ContentBox2'
const Content = () => {
  const classes = useStyles()
  return (
    <Box className={classes.root}>
      <Box className={classes.box1}>
        <ContentBox1 />
      </Box>
      <Box className={classes.box2}>
        <ContentBox2 />
      </Box>
    </Box>
  )
}
const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    minHeight: 'calc(100vh - 120px)',
    margin: '24px',
  },
  box1: {
    backgroundColor: '#FFFFFF',
    marginRight: '8px',
    flex: 1,
  },
  box2: {
    backgroundColor: '#FFFFFF',
    marginLeft: '8px',
    flex: 1,
  },
}))
export default Content
