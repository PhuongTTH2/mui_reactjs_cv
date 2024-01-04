import { ReactNode } from 'react'
import clsx from 'clsx'
import { makeStyles } from '@material-ui/core/styles'

import { Button, Theme, ButtonProps } from '@material-ui/core'

type StyledButtonProps = {
  width?: string | number
  height?: string | number
  fontSize?: string | number
  colorText?: string
  background?: string
  img?: string
  htmlFor?: string
  borderRadius?: string
  border?: string
  component?: React.ElementType
  children: ReactNode
} & ButtonProps

const StyledButton = (props: StyledButtonProps) => {
  const {
    width = 75,
    height = 25,
    fontSize = 12,
    colorText = '#FFF',
    background = '#6180AB',
    borderRadius = '5px',
    border = 'none',
    img = '',
    htmlFor = '',
    component = 'button',
    className,
    children,
    ...rest
  } = props
  const classes = useStyles({ width, height, fontSize, colorText, background, borderRadius, border })

  return (
    <>
      {img ? (
        htmlFor ? (
          <Button className={clsx(classes.button, className ?? '')} component={component} {...rest}>
            <img src={img} alt="logo" style={{ width: '16px', height: '16px', marginRight: '10px' }} />
            {children}
          </Button>
        ) : (
          <>
            <input type="file" accept="image/*" style={{ display: 'none' }} id={htmlFor} />
            <label htmlFor={htmlFor}>
              <Button
                htmlFor={htmlFor}
                className={clsx(classes.button, className ?? '')}
                component={component}
                {...rest}
              >
                <img src={img} alt="logo" style={{ width: '16px', height: '16px', marginRight: '10px' }} />
                {children}
              </Button>
            </label>
          </>
        )
      ) : (
        <Button className={clsx(classes.button, className ?? '')} component={component} {...rest}>
          {children}
        </Button>
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
    colorText: string
    background: string
    borderRadius: string
    border: string
  }
>((theme) => ({
  button: {
    background: ({ background }) => background,
    color: ({ colorText }) => colorText,
    border: ({ border }) => border,
    width: ({ width }) => width,
    height: ({ height }) => height,
    borderRadius: ({ borderRadius }) => borderRadius,
    fontFamily: 'Hiragino Sans, sans-serif',
    fontSize: ({ fontSize }) => fontSize,
    '&.MuiButton-root:hover': {
      backgroundColor: ({ background }) => background,
    },
  },
}))

export default StyledButton
