import { makeStyles } from '@material-ui/core/styles'
import { Avatar, Checkbox, FormControlLabel, Theme, CheckboxProps } from '@material-ui/core'

type StyledCheckboxProps = {
    label?: string
    colorText?: string
    margin?: string
    bold?: boolean
    fontSize?: number
} & CheckboxProps

const StyledCheckbox = (props: StyledCheckboxProps) => {
    const { label, margin = '0 5px 0 0', bold = false, colorText = '#4A4A4A', fontSize = 12, ...rest } = props
    const classes = useStyles({ margin, bold, colorText, fontSize })

    return (
        <FormControlLabel
            control={
                <Checkbox
                    name="checkedI"
                    checkedIcon={<Avatar src="/assets/images/checked-icon.svg" className={classes.checkedIcon} />}
                    icon={<span className={classes.iconImage}></span>}
                    className={classes.root}
                    color="default"
                    {...rest}
                />
            }
            label={label}
            className={classes.label}
        />
    )
}

const useStyles = makeStyles<Theme, { margin: string; bold: boolean; colorText: string; fontSize: number }>((theme) => ({
    label: {
        '& .MuiTypography-root': {
            fontSize: ({ fontSize }) => fontSize,
            fontFamily: 'Hiragino Sans, sans-serif',
            color: ({ colorText }) => colorText,
            margin: ({ margin }) => margin,
            fontWeight: ({ bold }) => (bold ? 'bold' : 'normal'),
        },
    },
    root: {
        padding: 0,
        marginRight: 5,
        '&:hover': {
            backgroundColor: 'transparent',
            padding: 0,
            borderRadius: 0,
        },
        '&:hover > span > span': {
            padding: 0,
            borderRadius: 0,
            background: 'no-repeat url(/assets/images/hover-checked-icon.svg)',
        },
    },
    iconImage: {
        background: 'url(/assets/images/uncheck-icon.svg) no-repeat',
        height: 24,
        width: 24,
    },
    checkedIcon: {
        width: 24,
        height: 24,
    },
}))

export default StyledCheckbox
