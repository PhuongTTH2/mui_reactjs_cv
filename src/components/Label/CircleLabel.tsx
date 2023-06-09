import clsx from 'clsx'

import { makeStyles } from '@material-ui/core/styles'
import { Typography, Theme } from '@material-ui/core'

type CircleLabelProps = {
    background: string
    label?: string
    colorText?: string
    height?: number
    width?: number
    line?: boolean
    widthLine?: number
    heightLine?: number
    border?: boolean
    fontSize?: number
    style?: {}
}

const CircleLabel = (props: CircleLabelProps) => {
    const {
        height = 10,
        width = 10,
        colorText = '#4D4F5C',
        background,
        label,
        line = false,
        border = false,
        fontSize = 12,
        widthLine = 20,
        heightLine = 2,
        style,
    } = props
    const classes = useStyles({ height, width, background, colorText, line, border, fontSize, widthLine, heightLine })

    return (
        <div className={classes.root} style={style}>
            <div className={clsx(classes.circle, label && classes.mR5)}>
                <div className={classes.line}></div>
            </div>
            {label && (
                <Typography component="span" className={classes.font}>
                    {label}
                </Typography>
            )}
        </div>
    )
}

const useStyles = makeStyles<
    Theme,
    {
        height: number
        width: number
        background: string
        colorText: string
        line: boolean
        border: boolean
        fontSize: number
        widthLine: number
        heightLine: number
    }
>((theme) => ({
    root: {
        display: 'flex',
        alignItems: 'center',
        // justifyContent: 'center',
    },
    circle: {
        height: ({ height }) => height,
        width: ({ width }) => width,
        background: ({ background, border }) => (border ? (background = 'transparent') : background),
        display: 'inline-block',
        borderRadius: '100%',
        position: 'relative',
        border: ({ background, border }) => (border ? `1px solid ${background}` : 0),
        boxSizing: 'border-box',
    },
    mR5: {
        marginRight: 6,
    },
    font: {
        fontSize: ({ fontSize }) => fontSize,
        // fontFamily: 'Hiragino Sans, sans-serif',
        fontFamily: '"ヒラギノ角ゴ Pro W3", "Hiragino Kaku Gothic Pro",Osaka, "メイリオ", Meiryo, "ＭＳ Ｐゴシック", "MS PGothic", sans-serif',
        color: ({ colorText }) => colorText,
        fontWeight: 300,
    },
    line: {
        display: ({ border, line }) => (line || border ? 'block' : 'none'),
        width: ({ widthLine }) => widthLine,
        background: ({ background }) => background,
        height: ({ heightLine }) => heightLine,
        position: 'absolute',
        top: '50%',
        right: '50%',
        transform: 'translate(50%,-50%)',
    },
}))

export default CircleLabel
