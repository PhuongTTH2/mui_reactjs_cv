import { makeStyles } from '@material-ui/core/styles'
import { FormControlLabel, Switch, Theme } from '@material-ui/core'

type StyledSwitchProps = {
  label?: string
  color?: string
  checked?: boolean
  onChange?: any
  name?: string
  fontSize?: number
  style?: {}
}

const StyledSwitch = (props: StyledSwitchProps) => {
  const { label = '', color = '#6F8EC6', checked = true, onChange, name, fontSize = 12, style } = props
  const classes = useStyles({ color, fontSize })

  return (
    <FormControlLabel
      style={style}
      control={<Switch color="primary" className={classes.switch} checked={checked} onChange={onChange} name={name} />}
      label={label}
      className={classes.root}
    />
  )
}

const useStyles = makeStyles<Theme, { color: string; fontSize: number }>((theme) => ({
  root: {
    '& .MuiTypography-body1': {
      fontFamily: 'Hiragino Sans, sans-serif',
      fontSize: ({ fontSize }) => fontSize,
      color: '#4A4A4A',
    },
  },
  switch: {
    '&.MuiSwitch-root': {
      padding: 9,
    },
    '& .MuiSwitch-switchBase': {
      top: 2,
      left: 2,
    },
    '& .MuiSwitch-thumb': {
      width: 16,
      height: 16,
    },
    '& .MuiSwitch-track': {
      width: 40,
      height: 20,
      borderRadius: 12,
    },
    '& .MuiSwitch-colorPrimary.Mui-checked + .MuiSwitch-track': {
      backgroundColor: ({ color }) => color,
      opacity: 1,
    },
    '& .MuiSwitch-colorPrimary.Mui-checked': {
      color: '#FFF',
    },
  },
}))

export default StyledSwitch
