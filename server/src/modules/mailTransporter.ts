import nodemailer from 'nodemailer';

let transporter = nodemailer.createTransport({
    host: 'email-smtp.us-east-2.amazonaws.com',
    // host: 'smtp.mailtrap.io',
    port: Number(process.env.SMTP_PORT),
    secure: false, 
    auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS
    },
    tls: {
        rejectUnauthorized: false
    }
})

export default transporter;