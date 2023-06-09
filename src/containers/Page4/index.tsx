import { makeStyles } from '@material-ui/styles'
import React from 'react'
import './index.css'
import Left from './components/Left/Left'
import Content from './components/Content/Content'
import Right from './components/Right/Right'
import Header from './components/Header/Header'
const Page4: React.FC = () => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <Header />
      <div className={classes.content}>
        <div >
          <Left />
        </div>
        <Content />
        <div >
          <Right />
        </div>
      </div>
    </div>
  )
}
const useStyles = makeStyles((them) => ({
  root: {
    background: '#00aeef',
  },
  content: {
    background: '#e9ebee',
    display: 'flex',
    justifyContent: 'center',
  },

}))
export default Page4
