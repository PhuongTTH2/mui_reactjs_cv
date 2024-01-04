import { makeStyles } from '@material-ui/core/styles'
import { Theme, Typography, Box, Dialog, DialogActions, DialogContent } from '@material-ui/core'

import StyledButton from 'components/FormControl/StyledButton'

type MonitoringAlertProps = {
  width?: string | number
  height?: string | number
  background?: string
  openDialog: boolean
  onDelete: () => void
  onBack: () => void
  title?: string
  label?: string
}

const MonitoringAlert = (props: MonitoringAlertProps) => {
  const {
    width = 600,
    height = 250,
    background = '#FFFFFF',
    openDialog,
    onDelete,
    onBack,
    title = '',
    label = '',
  } = props
  const classes = useStyles({ width, height, background })

  return (
    <Dialog open={openDialog} onClose={onBack} className={classes.dialog} aria-labelledby="form-dialog-title">
      <DialogContent>
        <Box textAlign="center">
          <Typography variant="body1" component="p">
            {title}
          </Typography>
          <Typography variant="body1" component="p">
            {label}
          </Typography>
        </Box>
        <DialogActions>
          <StyledButton onClick={onDelete} background="#5CABBE" height={40} width={120} fontSize={12}>
            test
          </StyledButton>
          <StyledButton
            onClick={onBack}
            colorText="#2B2A2A"
            background="#E5E5E5"
            height={40}
            width={120}
            fontSize={12}
            style={{ marginLeft: 15 }}
          >
          test  
          </StyledButton>
        </DialogActions>
      </DialogContent>
    </Dialog>
  )
}

const useStyles = makeStyles<Theme, { width: string | number; height: string | number; background: string }>(
  (theme) => ({
    dialog: {
      '& .MuiBackdrop-root': {
        background: 'unset',
      },
      '& .MuiTypography-body1': {
        fontWeight: 600,
        fontSize: 15,
        fontFamily: 'Hiragino Sans, sans-serif',
      },
      '& .MuiDialog-paperWidthSm': {
        minWidth: ({ width }) => width,
        height: ({ height }) => height,
        borderRadius: 0,
        background: ({ background }) => background,
        boxShadow: '0 5px 10px #00000016',
      },
      '& .MuiDialogContent-root': {
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        display: 'flex',
        flexDirection: 'column',
      },
      '& .MuiDialogActions-root': {
        justifyContent: 'center',
        paddingTop: 50,
      },
    },
  })
)

export default MonitoringAlert
