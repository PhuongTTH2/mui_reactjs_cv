const { sendSlack } = require('./services/slack')
const { sendEmailMessages } = require('./services/email')

exports.handler = async (event) => {
    let totalStringSlack = `環境: ${process.env.ENV}` 
    let newStringSlack = await sendEmailMessages()
    totalStringSlack += newStringSlack
    await sendSlack(totalStringSlack)
    return 'OK'
}
