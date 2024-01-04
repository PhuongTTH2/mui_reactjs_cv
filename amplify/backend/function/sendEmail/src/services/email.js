const AWS = require('aws-sdk')
AWS.config.update({ region: process.env.TIMESTREAM_REGION || process.env.REGION })
const momentTz = require('moment-timezone')
const { MAIL_BODY_HEADER} = require('./form')

module.exports = {
    async sendEmailMessages() {
       
        momentTz.locale('ja')
        let date = momentTz.utc(new Date(), 'YYYY/MM/DD HH:mm').tz('Asia/Tokyo').format('YYYY年M月D日 (ddd) ')
        let newString = MAIL_BODY_HEADER.replace('date', date)

        const SES = new AWS.SES()
        const params = {
            Destination: {
                ToAddresses: 'tthpspkt@gmail.com',
            },
            Message: {
                Body: {
                    Text: {
                        Charset: 'UTF-8',
                        Data: newString,
                    },
                },
                Subject: {
                    Charset: 'UTF-8',
                    Data: `【Header】${date})`,
                },
            },
            Source: process.env.FROM_ADDRESS,
        }
        await SES.sendEmail(params)
          .promise()
          .then((response) => {
            console.log('Success', response)
          })
          .catch((err) => {
            console.log('Error', err)
          })
        return newString
    },
}
