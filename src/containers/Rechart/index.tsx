import { makeStyles } from '@material-ui/styles'
import React, { useState } from 'react'
import { Grid, Typography, Box, FormControl, FormControlLabel, Radio, RadioGroup } from '@material-ui/core'
import BarChartRechart from './components/BarChartRechart'
import BarChartRechartInline from './components/BarChartRechartInline'
import PieChartRechart from './components/PieChartRechart'
import PieChartRechartLabel from './components/PieChartRechartLabel'
import LineWidth from './components/LineWidth'
import CheckBoxField from '../../components/FormControl/CheckBoxField'
import CheckBoxField2 from '../../components/FormControl/CheckBoxField2'
import RadioGroupField from '../../components/FormControl/RadioGroupField'

const Rechart: React.FC = () => {
  const defaultCheckbox: any = [
    {
      label: 'checkAll',
      checked: false,
    },
    {
      label: 'checkboxgroup1',
      checked: false,
    },
    {
      label: 'checkboxgroup2',
      checked: false,
    },
    {
      label: 'checkboxgroup3',
      checked: false,
    },
  ]
  const arrayLimit: any = [false, false, false, false, false]
  const [checkBoxGroup, setCheckBoxGroup] = useState<any>(defaultCheckbox)
  const [radioGroup, setRadioGroup] = useState<any>(arrayLimit)
  const handlecheckBoxGroup = (event: any, index: number) => {
    let newDefaultCheckbox: any = [...checkBoxGroup]
    if (event.target.name === 'checkAll') {
      newDefaultCheckbox = checkBoxGroup.map((item: any) => ({ ...item, checked: event.target.checked }))
    } else {
      newDefaultCheckbox[index].checked = event.target.checked
    }
    setCheckBoxGroup(newDefaultCheckbox)
  }

  const handleRadioLimit = (event: any) => {
    let newRadioGroup = [...radioGroup]
    let a: number = (event.target.value as number) - 1
    newRadioGroup[a] = newRadioGroup[a] ? false : true
    let radioFilter = newRadioGroup.filter((value, index) => value === true)

    if (radioFilter.length < 4) {
      setRadioGroup(newRadioGroup)
    }
  }
  const classes = useStyles()
  return (
    <div>
      <Box className={classes.root}>
        <Box className={classes.boxInfo}>
          <Typography className={classes.boxInfo}>Info</Typography>
          <Box className={classes.boxPadding}>
            <LineWidth isWidth={'60%'} />
          </Box>
          <Typography className={classes.boxInfo}>Info</Typography>
          <Box>
            <CheckBoxField />
            <CheckBoxField2 label="checkbox1" />
            <CheckBoxField2 label="checkbox2" />
            <Box className={classes.checkBoxGroup}>
              {checkBoxGroup.map((value: any, index: number) => (
                <CheckBoxField2
                  label={value.label}
                  name={value.label}
                  checked={value.checked}
                  onChange={(e) => handlecheckBoxGroup(e, index)}
                />
              ))}
            </Box>
            <RadioGroupField
              name="open24Hours"
              options={[
                {
                  value: 'On',
                  label: 'Onn',
                },
                {
                  value: 'Off',
                  label: 'Offf',
                },
              ]}
            />
            Radio Group set limit 3
            <RadioGroup
              // aria-labelledby="demo-radio-buttons-group-label"
              // defaultValue="female"
              name="radio-buttons-group"
              onClick={(e) => handleRadioLimit(e)}
            >
              <FormControlLabel value="1" control={<Radio />} checked={radioGroup[0]} label="group1" />
              <FormControlLabel value="2" control={<Radio />} checked={radioGroup[1]} label="group2" />
              <FormControlLabel value="3" control={<Radio />} checked={radioGroup[2]} label="group3" />
              <FormControlLabel value="4" control={<Radio />} checked={radioGroup[3]} label="group4" />
              <FormControlLabel value="5" control={<Radio />} checked={radioGroup[4]} label="group5" />
            </RadioGroup>
          </Box>
        </Box>
        <Box className={classes.boxBox}>
          <Box className={classes.boxReChart}>
            <Grid container spacing={3}>
              <Grid item xs={12} md={6}>
                <BarChartRechart verticalStatus={false} />
              </Grid>
              <Grid item xs={12} md={6}>
                <BarChartRechart verticalStatus={true} />
              </Grid>
            </Grid>
            <Grid container spacing={3}>
              <Grid item xs={12} md={6}>
                <BarChartRechartInline changeChart={false} />
              </Grid>
              <Grid item xs={12} md={6}>
                <BarChartRechartInline changeChart={true} />
              </Grid>
            </Grid>
          </Box>
          <Box className={classes.areaChart}>
            <Typography className={classes.boxInfo}>More Insights</Typography>
            <Grid container spacing={3}>
              <Grid item xs={12} md={4}>
                <PieChartRechart />
              </Grid>
              <Grid item xs={12} md={4}>
                <PieChartRechartLabel isLabel={true} />
              </Grid>
              <Grid item xs={12} md={4}>
                <PieChartRechartLabel isLabel={false} />
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Box>
    </div>
  )
}

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  boxInfo: {
    background: '#FFFFFF',
    border: '1ox solid #DEDEDE',
    minWidth: '30%',
  },
  boxPadding: {
    padding: ' 0 20px',
  },
  boxBox: {
    marginLeft: '24px',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    paddingLeft: '10px',
  },
  checkBoxGroup: {
    display: 'flex',
    flexDirection: 'column',
  },
  boxReChart: {
    background: '#FFFFFF',
    border: '1ox solid #DEDEDE',
    // height: '500px',
  },
  areaChart: {
    background: '#FFFFFF',
    border: '1ox solid #DEDEDE',
    marginTop: '24px',
    // width: '100%',
  },
  boxFlex: {
    display: 'flex',
    justifyContent: 'start',
    alignItems: 'center',
  },
  boxImge: {
    width: 13,
    height: 13,
    background: '#547096',
    marginRight: 15,
  },
}))
export default Rechart
