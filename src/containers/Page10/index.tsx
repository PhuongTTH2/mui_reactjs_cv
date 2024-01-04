import React from 'react'
import { Box, Typography, Menu, MenuItem } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import Header from './component/Header'
import AppMenu from './component/AppMenu'
import Top from './component/Top'
import Content from './component/Content'
const Page10: React.FC = () => {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <Header />
      <AppMenu />
      <Top />
      <Content />
    </div>
  )
}
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    fontFamily: 'Hiragino Sans, sans-serif',
    background: '#fff',
    minHeight: '100vh',
    margin: 0,
    padding: 0,
    width: '100%',
  },
  main: {
    marginTop: 50,
    marginLeft: 200,
    minHeight: 'calc(100vh - 50px)',
    width: '100%',
    background: '#EDF1F8',
  },
}))

export default Page10
