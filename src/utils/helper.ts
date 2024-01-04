import AWS from 'aws-sdk'
import mime from 'mime'
import moment from 'moment'

const s3 = new AWS.S3({
  region: process.env.REACT_APP_REGION,
  accessKeyId: process.env.REACT_APP_ACCESS_KEY_ID,
  secretAccessKey: process.env.REACT_APP_SECRET_ACCESS_KEY,
})

export const uploadFile = async (user_id: any, file: any) => {
  const content_type: any = file.type
  const subfolder: any = `posts/${user_id}`
  // const key = `${subfolder}/${test_id}-${moment().unix()}.extension`;

  const key: any = `${subfolder}/${user_id}-${moment().unix()}.${content_type}`
  const params: any = {
    Body: file,
    Bucket: process.env.REACT_APP_NRM,
    Key: key,
    ContentType: content_type,
    ACL: 'public-read',
  }

  const res = await s3.upload(params).promise()
  return res
}

export const deleteFile = async (file: any) => {
  const params: any = {
    Bucket: process.env.REACT_APP_NRM,
    Key: file.key,
  }
  try {
    await s3.deleteObject(params).promise()
  } catch (e) {}
}

export const deleteFileUser = async (file: any) => {
  const params: any = {
    Bucket: process.env.REACT_APP_NRM,
    Key: file,
  }
  try {
    await s3.deleteObject(params).promise()
  } catch (e) {}
}

export const getSize = (size: any) => {
  const getGB: any = size / (1024 * 1024 * 1024)
  const getMB: any = size / (1024 * 1024)
  const getKB: any = size / 1024
  if (getGB > 1) {
    return roundDecimalAndNumberFormat(getGB, 1) + ' GB'
  }
  if (getMB > 1) {
    return roundDecimalAndNumberFormat(getMB, 1) + ' MB'
  }
  if (getKB > 1) {
    return roundDecimalAndNumberFormat(getKB, 1) + ' KB'
  }
  return roundDecimalAndNumberFormat(size, 1) + ' Byte'
}

export const round2Decimal = (value: number) => {
  return isNaN(value) ? 0 : Math.round(Number(value) * 100) / 100
}

export const roundDecimalAndNumberFormat = (value: number, decimal: number = 0) => {
  return isNaN(value)
    ? 0
    : Number(value).toLocaleString('en-US', { minimumFractionDigits: decimal, maximumFractionDigits: decimal })
}

