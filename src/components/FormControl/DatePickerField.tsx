import { Controller } from 'react-hook-form'
import DatePicker, { ReactDatePickerProps, registerLocale } from 'react-datepicker'
import { makeStyles } from '@material-ui/core/styles'
import { Theme } from '@material-ui/core'

import 'react-datepicker/dist/react-datepicker.css'
import ja from 'date-fns/locale/ja'

registerLocale('ja', ja)

type DatePickerProps = {
  name?: any // RHF
  form?: any // RHF
  fontSize?: string | number
  height?: string | number
  width?: string | number
  boxShadow?: string
  icon?: string
  background?: string
  align?: string
  color?: string
  border?: string
} & ReactDatePickerProps &
  any

const DatePickerField = (props: DatePickerProps) => {
  const {
    form,
    name,
    fontSize = 12,
    height = 25,
    width = 100,
    boxShadow = '0 1px 2px #E4E7F1',
    icon = 'none',
    background = '#FFF',
    align = 'left',
    color = '#A7A7A7',
    border = 0,
    ...rest
  } = props
  const classes = useStyles({ width, height, fontSize, boxShadow, icon, background, align, color, border })
  return (
    <label className={classes.DatePickerField2} onClick={(e) => e.preventDefault()}>
      {form ? (
        <Controller
          name={name}
          control={form.control}
          render={({ field }) => {
            return <DatePicker locale="ja" popperPlacement="right-start" selected={field.value} {...field} {...rest} />
          }}
        />
      ) : (
        <DatePicker locale="ja" popperPlacement="right-start" {...rest} />
      )}
    </label>
  )
}

const useStyles = makeStyles<
  Theme,
  {
    width: string | number
    height: string | number
    fontSize: string | number
    boxShadow: string
    icon: string
    background: string
    align: string
    color: string
    border: string
  }
>((theme) => ({
  DatePickerField2: {
    '& input': {
      boxShadow: ({ boxShadow }) => boxShadow,
      width: ({ width }) => width,
      height: ({ height }) => height,
      fontSize: ({ fontSize }) => fontSize,
      textAlign: ({ align }) => align,
      fontFamily: 'Hiragino Sans, sans-serif',
      color: ({ color }) => color,
      background: ({ background }) => background,
      border: ({ border }) => border,
      paddingLeft: 10,
      boxSizing: 'border-box',
      '&:focus-visible': {
        outline: 'none',
      },
    },
    '& .react-datepicker': {
      borderRadius: 0,
      border: '1px solid #F0F0F0',
    },
    '& .react-datepicker__header': {
      backgroundColor: '#F0F0F0',
      borderBottom: 0,
    },
    '& .react-datepicker__current-month': {
      // fontSize: 12,
      fontFamily: 'Roboto Condensed, sans-serif',
      fontWeight: 'bold',
      color: '#4A4A4A',
    },
    '& .react-datepicker__navigation': {
      width: 8,
      height: 8,
    },
    '& .react-datepicker__navigation--next': {
      background: 'url(/assets/images/right-arrow-datepicker.svg) no-repeat',
      right: 15,
      top: 15,
      border: 'none',
    },
    '& .react-datepicker__navigation--previous': {
      background: 'url(/assets/images/left-arrow-datepicker.svg) no-repeat',
      top: 15,
      left: 15,
      border: 'none',
    },
    '& .react-datepicker__navigation-icon': {
      display: 'none',
    },
    '& .react-datepicker__day-name, & .react-datepicker__day, & .react-datepicker__time-name': {
      fontSize: 12,
      fontFamily: 'Roboto Condensed, sans-serif',
      // color: '#707070',
    },
    '& .react-datepicker__day--selected, & .react-datepicker__day--in-selecting-range, & .react-datepicker__day--in-range, & .react-datepicker__month-text--selected,& .react-datepicker__month-text--in-selecting-range,& .react-datepicker__month-text--in-range,& .react-datepicker__quarter-text--selected,& .react-datepicker__quarter-text--in-selecting-range,& .react-datepicker__quarter-text--in-range,& .react-datepicker__year-text--selected,& .react-datepicker__year-text--in-selecting-range,& .react-datepicker__year-text--in-range':
      {
        color: '#6180AB',
        backgroundColor: '#F0F6FF',
      },
    '& .react-datepicker__day--selected:hover, .react-datepicker__day--in-selecting-range:hover, .react-datepicker__day--in-range:hover, .react-datepicker__month-text--selected:hover, .react-datepicker__month-text--in-selecting-range:hover, .react-datepicker__month-text--in-range:hover, .react-datepicker__quarter-text--selected:hover, .react-datepicker__quarter-text--in-selecting-range:hover, .react-datepicker__quarter-text--in-range:hover, .react-datepicker__year-text--selected:hover, .react-datepicker__year-text--in-selecting-range:hover, .react-datepicker__year-text--in-range:hover':
      {
        color: '#6180AB',
        backgroundColor: '#F0F6FF',
      },
    '& .react-datepicker__day--keyboard-selected, .react-datepicker__month-text--keyboard-selected, .react-datepicker__quarter-text--keyboard-selected, .react-datepicker__year-text--keyboard-selected':
      {
        color: '#000',
        backgroundColor: '#fff',
      },
    '& .react-datepicker-year-header': {
      padding: '11px 0',
    },
    '& .react-datepicker__monthPicker': {
      '& .react-datepicker__month-text': {
        margin: 4,
      },
    },
    '& .react-datepicker__year-wrapper': {
      justifyContent: 'center',
    },
    '& .react-datepicker-popper': {
      width: 240,
    },
    '& .react-datepicker__day--disabled,& .react-datepicker__month--disabled': {
      background: 'none',
      color: '#ccc',
    },
  },
  wrapper: {
    position: 'relative',
  },
  icon: {
    cursor: 'pointer',
    position: 'absolute',
    top: 5,
    right: 5,
    display: ({ icon }) => icon,
  },
}))

export default DatePickerField
