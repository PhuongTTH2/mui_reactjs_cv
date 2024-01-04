import { makeStyles } from '@material-ui/styles'
import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Header from './components/Header/Header'
import Brand from './components/Brand/Brand'
import GPT3 from './components/GPT3/GPT3'
import GPT3_2 from './components/GPT3_2/GPT3_2'
import Possibility from './components/Possibility/Possibility'
import CTA from './components/CTA/CTA'
const Page2: React.FC = () => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <Navbar />
      <Header />
      <Brand />
      <GPT3 />
      <GPT3_2 />
      <Possibility />
      <CTA/>
    </div>
  )
}
const useStyles = makeStyles((them) => ({
  root: {
    background: '#040C18',
  },
}))
export default Page2
