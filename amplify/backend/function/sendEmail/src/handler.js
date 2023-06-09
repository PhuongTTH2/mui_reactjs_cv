const { sendSlack } = require('./services/send_slack')
const { sendEmailMessages } = require('./services/email_messages')

exports.handler = async (event) => {
    let totalStringSlack = `環境: ${process.env.ENV}` 
    let newStringSlack = await sendEmailMessages()
    totalStringSlack += newStringSlack
    await sendSlack(totalStringSlack)
    return 'OK'
}
