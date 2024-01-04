import { makeStyles } from '@material-ui/core/styles'
import { Box } from '@material-ui/core'
import StyledButton from 'components/FormControl/StyledButton'
import InputField from 'components/FormControl/InputField'
import { UPDATE_INVOICE_SAMPLE } from 'api/graphql/mutations'
import { useMutation } from '@apollo/client'
import { useLoading } from 'contexts/LoadingContext'

const InvoiceCreate = () => {
  const classes = useStyles()

  // Mutation
  const [prepareFileUpload] = useMutation(UPDATE_INVOICE_SAMPLE)
  const { showLoading, hideLoading } = useLoading()

  const handleUploadFile = (event: any) => {
    const file = event.target.files[0]
    if (!file) return
    const fileName = 'test'
    let variables = {
      type: '',
      contentType: file.type,
      fileName,
    }
    showLoading()
    prepareFileUpload({ variables }).then((response) => {
      const url = response.data.prepareFileUpload.url
      const filePath = response.data.prepareFileUpload.path

      const myHeaders = new Headers()
      myHeaders.append('Content-Type', file.type)

      const requestOptions = {
        method: 'PUT',
        headers: myHeaders,
        body: file,
        redirect: 'follow',
      } as any

      fetch(url, requestOptions)
        .then((res) => {
          console.log(res)
        })
        .catch((error) => console.log(error))
    })
  }

  const downloadTemplate = (url: string, fileName: string) => {
    fetch(url).then((response) => {
      response.blob().then((blob) => {
        let url = window.URL.createObjectURL(blob)
        let a = document.createElement('a')
        a.href = url
        a.download = fileName
        a.click()
      })
    })
  }

  return (
    <>
      <Box className={classes.firstSetting}>
        <Box className={classes.buttonGroup}>
          <label htmlFor="contained-button-file">
            <InputField
              id="contained-button-file"
              type="file"
              style={{ display: 'none' }}
              onChange={handleUploadFile}
            />
            <StyledButton
              component="span"
              variant="contained"
              width={200}
              height={30}
              fontSize={12}
              background="#595757"
              colorText="#FFFFFF"
              style={{ borderRadius: 0 }}
            >
              Upload
            </StyledButton>
          </label>
        </Box>
      </Box>
    </>
  )
}

const useStyles = makeStyles((theme) => ({
  firstSetting: {
    marginBottom: 48,
    boxShadow: '0 1px 2px #00000030',
  },
  title: {
    background: '#595757',
    boxShadow: '0 0 2px #00000040',
    padding: '0px 18px',
    height: 25,
  },
  labelSetting: {
    fontSize: 13,
    fontFamily: 'Hiragino Sans, sans-serif',
    fontWeight: 600,
    color: '#FFFFFF',
    lineHeight: '25px',
  },
  content: {
    padding: '15px 15px 15px 18px',
    background: '#FFFFFF',
    display: 'flex',
    alignItems: 'center',
  },
  labelContent: {
    fontSize: 12,
    fontFamily: 'Hiragino Sans, sans-serif',
    fontWeight: 600,
    color: '#4A4A4A',
    marginRight: 21,
  },
  buttonGroup: {
    marginLeft: 'auto',
  },
  items: {
    padding: '5px 0px 5px 20px',
    display: 'flex',
    alignItems: 'center',
    boxShadow: '0 0 1px #00000030',
    justifyContent: 'center',
    '& .MuiInputBase-root': {
      fontWeight: 600,
    },
  },
  spaceLine: {
    height: 35,
    borderRight: '1px solid #E8E8E8',
    margin: '0 25px',
  },
  textContent: {
    fontSize: 12,
    fontFamily: 'Hiragino Sans, sans-serif',
    fontWeight: 300,
    color: '#4A4A4A',
    marginRight: 5,
    '&:last-of-type': {
      marginRight: 0,
      marginLeft: 5,
    },
  },
  actionBtn: {
    '&:hover': {
      color: '#A8A8A8',
    },
  },
}))

export default InvoiceCreate
