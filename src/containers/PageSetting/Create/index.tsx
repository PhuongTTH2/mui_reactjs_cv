import React, { useState } from 'react'
import clsx from 'clsx'
import { useStyles } from './styles'
import {
  AppBar,
  Tabs,
  Tab,
  Typography,
  Box,
  Avatar,
  Grid,
  Dialog,
  DialogActions,
  DialogContent,
} from '@material-ui/core'

const Create = () => {
  const classes = useStyles()
  const [activeTab, setActiveTab] = useState(0)

  const handleActiveTabChange = (_: any, value: number) => {
    setActiveTab(value)
  }

  function TabPanel(props: { index: number; value: number; children: React.ReactNode }) {
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

  function a11yProps(index: number) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    }
  }

  return (
    <div className={classes.root}>
      <AppBar className={classes.header} position="static">
        {
          <Tabs value={activeTab} onChange={handleActiveTabChange} aria-label="simple tabs example">
            {/* <Tab label="基本設定" {...a11yProps(0)} onClick={() => history.push({ search: `?tab=${TabType.Basic}` })} /> */}
            <Tab
              label="Tab 1"
              {...a11yProps(1)}
              // {...(!watchIsPPASite && { className: classes.disabledTab, disabled: isDisabledTab })}
              // onClick={() => history.push({ search: `?tab=${TabType.PPASetting}` })}
              style={{ textTransform: 'initial' }}
            />
            <Tab
              label="Tab 2"
              {...a11yProps(2)}
              // {...(!watchIsAiRSite && { className: classes.disabledTab, disabled: isDisabledTab })}
              // onClick={() => history.push({ search: `?tab=${TabType.AirSetting}` })}
              style={{ textTransform: 'initial' }}
            />
            <Tab
              label="Tab 3"
              {...a11yProps(3)}
              // {...(!watchIsEnudgeSite && { className: classes.disabledTab, disabled: isDisabledTab })}
              // onClick={() => history.push({ search: `?tab=${TabType.EnergySetting}` })}
            />
            <Tab
              label="Tab 4"
              {...a11yProps(4)}
              // {...(!watchIsStorageBatterySite && { className: classes.disabledTab, disabled: isDisabledTab })}
              // onClick={() => history.push({ search: `?tab=${TabType.StorageBatterySetting}` })}
            />
            <Tab
              label="Tab 5"
              {...a11yProps(5)}
              // {...(!watchIsPPASite &&
              //     !watchIsAiRSite &&
              //     !watchIsEnudgeSite &&
              //     !watchIsStorageBatterySite && { className: classes.disabledTab, disabled: isDisabledTab })}
              // onClick={() => history.push({ search: `?tab=${TabType.SystemDeviceSetting}` })}
            />
            {/* {renderLockSection()} */}
          </Tabs>
        }
      </AppBar>
    </div>
  )
}

export default Create
