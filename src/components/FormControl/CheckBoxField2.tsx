import * as React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { FormControlLabel, Checkbox, Theme, CheckboxProps } from '@material-ui/core'
import CheckIcon from '@material-ui/icons/Check'

type CheckBoxFieldProps = {
  label: string
  bold?: boolean
} & CheckboxProps
const CheckBoxField2 = (props: CheckBoxFieldProps) => {
  const { bold = false, ...rest } = props
  const classes = useStyles({ bold })
  return (
    <FormControlLabel
      control={<Checkbox className={classes.checkBox} checkedIcon={<CheckIcon fontSize="small" />} {...rest} />}
      label={props.label}
      className={classes.labelCheckBox}
    />
  )
}
const useStyles = makeStyles<Theme, { bold: boolean }>((theme) => ({
  labelCheckBox: {
    '&.MuiFormControlLabel-root': {
      marginLeft: 0,
    },
  },
  checkBox: {
    '&.MuiCheckbox-root': {
      padding: 5,
      width: 10,
      height: 10,
      borderRadius: 0,
      margin: '10px 0',
    },
    '&.MuiCheckbox-colorSecondary.Mui-checked': {
      color: '#FFFFFF',
      backgroundColor: '#434343',
      borderRadius: 5,
    },
  },
}))
export default CheckBoxField2
