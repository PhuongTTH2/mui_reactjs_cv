import { Grid, Typography, Box } from '@material-ui/core'
import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import clsx from 'clsx'
import StyledButton from 'components/FormControl/StyledButton'
import useGetWidth from 'hooks/useGetWidth'

import InputField from 'components/FormControl/InputField'
import { useMutation } from '@apollo/client'
import { UPLOAD_ORIGINAL_FILE } from 'api/graphql/mutations'
import { isEmpty } from 'lodash'
import { getSize } from 'utils/helper'
const RightContainer = () => {
  const classes = useStyles()
  const widthScreen = useGetWidth()
  const [nameFile, setNameFile] = useState('')
  const [nameSize, setNameSize] = useState('')
  const [fileType, setFileType] = useState('')
  const [fileUpload, setFileUpload] = useState('')
  const [uploadOriginalFile] = useMutation(UPLOAD_ORIGINAL_FILE)
  const handleUploadFileLocal = async (event: any) => {
    const file = event.target.files[0]
    const name = event.target.files[0].name
    const size = event.target.files[0].size
    const type = event.target.files[0].type
    setNameFile(name)
    setNameSize(size)
    setFileUpload(file)
    setFileType(type)
  }
  const handleUploadFile = async () => {
    if (isEmpty(nameFile) && isEmpty(nameSize)) {
      return
    }
    let variables = {
      fileType: 'BLENDER',
      fileName: nameFile,
      fileSize: nameSize,
    }
    uploadOriginalFile({ variables }).then((response) => {
      let url: any = response.data.uploadOriginalFile.uploadUrl
      let myHeaders = new Headers()
      myHeaders.append('Content-Type', fileType)
      const requestOptions = {
        method: 'PUT',
        headers: myHeaders,
        body: fileUpload,
        redirect: 'follow',
      } as any

      fetch(url, requestOptions)
        .then((res) => {
          console.log(res)
        })
        .catch((error) => {
          console.log(error)
        })
    })
  }
  return (
    <Grid item style={{ marginLeft: '24px' }}>
      <Box className={classes.boxDemand}>
        <Typography variant="subtitle1" className={classes.boxDemandText}>
          
        </Typography>
        <Typography variant="subtitle1" className={clsx(classes.boxDemandText, classes.smallText)}>
        
        </Typography>
        <Typography variant="subtitle1" className={clsx(classes.boxDemandText, classes.smallText)}>
          - {nameFile}
        </Typography>
        <Typography variant="subtitle1" className={clsx(classes.boxDemandText, classes.smallText)}>
        
        </Typography>
        <Typography variant="subtitle1" className={clsx(classes.boxDemandText, classes.smallText)}>
          - {nameSize === '' ? '' : getSize(nameSize)}
        </Typography>
        <Box className={classes.boxDemandButton}>
          {isEmpty(nameFile) && isEmpty(nameSize) ? (
            <StyledButton
              // component="span"
              background="#5CABBE"
              img="/assets/images/demand-upload.svg"
              width={200}
              height={40}
            >
              Test
            </StyledButton>
          ) : (
            // <label htmlFor="contained-button-file">
            //   <InputField
            //     id="contained-button-file"
            //     type="file"
            //     style={{ display: 'none' }}
            //     onChange={(e) => handleUploadFile(e)}
            // />
            <StyledButton
              component="span"
              variant="contained"
              background="#5CABBE"
              // htmlFor="contained-button-file"
              img="/assets/images/demand-upload.svg"
              width={200}
              height={40}
              onClick={() => handleUploadFile()}
            >
              test
            </StyledButton>
            // </label>
          )}
        </Box>

        <Box className={classes.boxDemandUpload} style={{ width: widthScreen <= 1560 ? '332px' : '432px' }}>
          <img src="/assets/images/demand-upload.svg" alt="logo" height="43px" width="43px" />
          <Box className={clsx(classes.boxDemandUploadText, classes.marginBox)}>
            <Typography className={classes.fontSizeText12}>
            test
            </Typography>
          </Box>
          <Box className={clsx(classes.boxDemandButton, classes.marginBox)}>
            <label htmlFor="input-file">
              <InputField id="input-file" type="file" style={{ display: 'none' }} onChange={handleUploadFileLocal} />
              <StyledButton
                component="span"
                variant="contained"
                background="#5CABBE"
                htmlFor="input-file"
                img="/assets/images/demand-folder.svg"
                width={200}
                height={40}
              >
                Test
              </StyledButton>
            </label>
          </Box>
          <Box className={classes.boxDemandTextSize}>
            <Typography className={classes.fontSizeText11}></Typography>
          </Box>
          <Box className={clsx(classes.boxDemandFile, classes.marginBox)}>
            <img
              src="/assets/images/demand-file-rpr.svg"
              alt="RPR"
              height="64px"
              width="48px"
              style={{ margin: widthScreen <= 1560 ? '0 8px' : '0 10px', zIndex: 2 }}
            />
            <img
              src="/assets/images/demand-file-rprs.svg"
              alt="RPRS"
              height="64px"
              width="48px"
              style={{ margin: widthScreen <= 1560 ? '0 8px' : '0 10px' }}
            />
            <img
              src="/assets/images/demand-file-blend.svg"
              alt="BLEND"
              height="64px"
              width="48px"
              style={{ margin: widthScreen <= 1560 ? '0 8px' : '0 10px' }}
            />
            <img
              src="/assets/images/demand-file-zip.svg"
              alt="ZIP"
              height="64px"
              width="48px"
              style={{ margin: widthScreen <= 1560 ? '0 8px' : '0 10px' }}
            />
            <img
              src="/assets/images/demand-file-7z.svg"
              alt="7z"
              height="64px"
              width="48px"
              style={{ margin: widthScreen <= 1560 ? '0 8px' : '0 10px' }}
            />
          </Box>
        </Box>
      </Box>
    </Grid>
  )
}

const useStyles = makeStyles((theme) => ({
  boxDemand: {
    display: 'flex',
    flexDirection: 'column',
    background: '#2B2A2A',
    color: '#FFFFFF',
    justifyContent: 'space-between',
    height: '870px',
    width: '100%',
  },
  boxDemandText: {
    fontWeight: 600,
    fontSize: 15,
    fontFamily: 'Hiragino Sans, sans-serif',
    marginLeft: '16px',
    '&:first-child': {
      marginTop: '12px',
    },
  },

  //box
  boxDemandUpload: {
    display: 'flex',
    flexDirection: 'column',
    flexWrap: 'wrap',
    margin: '16px 16px',
    justifyContent: 'center',
    alignItems: 'center',
    background: '#434343',
    width: '432px',
    height: '656px',
  },

  boxDemandUploadText: {
    width: '230px',
    height: '51px',
    textAlign: 'center',
  },

  boxDemandTextSize: {
    width: '100px',
    height: '38px',
    textAlign: 'center',
    marginTop: '36px',
    marginBottom: '10px',
  },
  fontSizeText11: {
    fontSize: 11,
    fontFamily: 'Hiragino Sans, sans-serif',
  },
  fontSizeText12: {
    fontSize: 12,
    fontFamily: 'Hiragino Sans, sans-serif',
  },
  boxDemandButton: {
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
    margin: ' 0 16px',
  },
  marginBox: {
    margin: '10px 0',
  },
  boxDemandFile: {
    display: 'flex',
  },
  titleText: {
    fontWeight: 'bold',
    fontSize: 14,
  },
  smallText: {
    fontSize: 10,
    color: '#FFFFFF',
    fontWeight: 'normal',
  },
}))

export default RightContainer
