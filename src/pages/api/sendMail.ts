import nodemailer from 'nodemailer'
import EmailTemplate from '@/utils/emailTempleate'
import ReactDOMServer from 'react-dom/server'
import { UserData } from '@/utils'

export const SendMail = async (props: UserData) => {
  const transporter = nodemailer.createTransport({
    host: 'mail.gandi.net',
    secure: true,
    auth: {
      user: process.env.LUNG_SHAN_EMAIL,
      pass: process.env.LUNG_SHAN_PASSWORD,
    },
    port: 465,
  })

  const mailOptions = {
    from: process.env.LUNG_SHAN_EMAIL,
    to: process.env.LUNG_SHAN_GOOGLE_EMAIL,
    subject: 'Hello,攏山借貸!您有一筆新的客戶表單!🎉',
    html: EmailTemplate(props),
  }

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error)
    } else {
      console.log('Email sent: ' + info.response)
    }
  })
}
