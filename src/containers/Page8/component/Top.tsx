import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Box, Typography } from '@material-ui/core'
import StyledButton from 'components/FormControl/StyledButton'
const Top = () => {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <Box className={classes.box}>
        <Box>
          <Typography variant="caption" component="span">
            店名：
          </Typography>
          <Typography variant="caption" component="span" className={classes.button}>
            ジョイフル本田 ニューポートひたちなか店
          </Typography>
        </Box>
        <Box className={classes.boxButton}>
          <img src="/assets/images/pin/power-icon-top.svg" alt="arrow-down" />
          <StyledButton
            borderRadius="20px"
            background="rgb(219, 230, 244)"
            colorText="rgb(112, 112, 112)"
            width={130}
            height={25}
          >
            稼働モード
          </StyledButton>
          <Typography variant="caption" component="span" className={classes.button}>
            店名
          </Typography>
          <StyledButton
            borderRadius="20px"
            background="rgb(219, 230, 244)"
            colorText="rgb(112, 112, 112)"
            width={130}
            height={25}
          >
            充放電ステータス
          </StyledButton>
          <Typography variant="caption" component="span" className={classes.button}>
            待機
          </Typography>
          <StyledButton
            borderRadius="20px"
            variant="outlined"
            background="rgb(255, 255, 255)"
            colorText="rgb(112, 112, 112)"
            width={130}
            height={25}
          >
            店舗一覧
          </StyledButton>
        </Box>
      </Box>
    </div>
  )
}
const useStyles = makeStyles((theme) => ({
  root: {
    boxSizing: 'border-box',
    margin: 0,
    width: '100%',
    position: 'fixed',
    boxShadow: '0 1px 3px #E4E7F1',
    padding: '50px  0 0 110px',
    zIndex: 2,
    backgroundColor: '#fff',
  },
  box: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '24px 32px',
  },
  button: {
    fontFamily: 'Hiragino Sans, sans-serif',
    fontSize: 20,
    fontWeight: 600,
  },
  boxButton: {
    display: 'flex',
    justifyContent: 'start',
    alignItems: 'center',
    gap: '20px',
  },
}))
export default Top
