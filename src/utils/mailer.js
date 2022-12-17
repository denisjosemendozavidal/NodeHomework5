const nodemailer = require('nodemailer')
const config = require('../../config')

const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
        user: 'dmendoza.isg@gmail.com',
        pass: config.api.emailPass
    },
    tls: {
        rejectUnauthorized: false, //This is to deal with the self signed error message
    }
})

module.exports = transporter