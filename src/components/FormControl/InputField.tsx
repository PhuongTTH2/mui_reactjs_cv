import { Controller } from 'react-hook-form'
import { makeStyles } from '@material-ui/core/styles'
import { TextField, Theme, BaseTextFieldProps, TextFieldProps } from '@material-ui/core'
import { ChangeEventHandler } from 'react'

type InputFieldProps = {
  form?: any
  name?: any
  defaultValue?: string
  fontSize?: string | number
  height?: string | number
  width?: string | number
  boxShadow?: string
  align?: string
  colorText?: string
  handleChange?: ((value: any) => void) & ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>
  numAndDashOnly?: boolean
  numAndDotOnly?: boolean
} & BaseTextFieldProps &
  TextFieldProps

const InputField = (props: InputFieldProps) => {
  const {
    fontSize = 12,
    height = 25,
    width = 306,
    boxShadow = '0 0 2px #E4E7F1',
    form,
    name,
    align = 'left',
    colorText = '',
    handleChange,
    ...rest
  } = props
  const classes = useStyles({ width, height, fontSize, boxShadow, align, colorText })

  return (
    <>
      {form ? (
        <Controller
          name={name}
          control={form.control}
          render={({ field }) => (
            <TextField
              {...field}
              onChange={(e) => {
                if (handleChange) {
                  handleChange(e)
                }
              }}
              className={classes.textField}
              defaultValue={props.defaultValue}
              {...rest}
            />
          )}
        />
      ) : (
        <TextField name={name} className={classes.textField} defaultValue={props.defaultValue} {...rest} />
      )}
    </>
  )
}

const useStyles = makeStyles<
  Theme,
  {
    width: string | number
    height: string | number
    fontSize: string | number
    boxShadow: string
    align: string
    colorText: string
  }
>((theme) => ({
  textField: {
    background: '#FFF',
    color: '#A7A7A7',
    border: 0,
    boxShadow: ({ boxShadow }) => boxShadow,
    width: ({ width }) => width,
    '& .MuiInput-underline:hover:not(.Mui-disabled):before': {
      borderBottom: 0,
    },
    '& .MuiSelect-select:focus': {
      background: 'none',
    },
    '& .MuiInput-underline:before': {
      borderBottom: 0,
    },
    '& .MuiInput-underline:after': {
      borderBottom: 0,
    },
    '& .MuiInputBase-root': {
      fontFamily: 'Hiragino Sans, sans-serif',
      height: ({ height }) => height,
      paddingLeft: ({ align }) => (align === 'center' ? 0 : 7),
      color: ({ colorText }) => colorText,
    },
    '& .MuiInputBase-input': {
      fontFamily: 'Hiragino Sans, sans-serif',
      fontSize: ({ fontSize }) => fontSize,
      textAlign: ({ align }) => align,
      height: ({ height }) => height,
      whiteSpace: 'nowrap',
      overflowX: 'auto',
    },
    '& .MuiInputBase-root.Mui-disabled': {
      background: '#D6D6D6',
    },
  },
}))

export default InputField
