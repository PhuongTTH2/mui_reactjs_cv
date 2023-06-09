import { createTheme } from '@material-ui/core/styles'
import { typography } from './typography'
import { ownColor } from './ownColor'

const themes = createTheme({
  typography: { ...typography },
  palette: { ...ownColor },
})

export default themes
