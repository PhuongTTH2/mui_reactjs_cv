const axios = require('axios')

module.exports = {
    async sendSlack(bodyForm) {
        // Initialize the link in the environment dev
        let WEBHOOK_URL=""
        const notification = {
            username: 'application-alert',
            text: bodyForm,
        }
        const res = await axios.post(WEBHOOK_URL, notification)
    },
}
