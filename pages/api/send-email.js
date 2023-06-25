import FormData from 'form-data'
import Mailgun from 'mailgun.js'

const API_KEY = process.env.MAILGUN_API_KEY || ''
const DOMAIN = process.env.MAILGUN_DOMAIN || ''

export default async function handler(
  req,
  res
) {
  const mailgun = new Mailgun(FormData)
  const client = mailgun.client({ username: 'api', key: API_KEY })

  const { name, email, phone, message } = req.body

  const messageData = {
    from: email,
    to: 'huudyy@gmail.com',
    subject: 'New CamperCamp reservation!',
    text: `Hello,

    You have a new revervation from: ${name} ${email}.

    Phone number: ${phone}
    ${message}
    `,
  }

  try {
    await client.messages.create(DOMAIN, messageData)
  } catch (err) {
    console.error('Error sending email', err)
  }

  res.status(200).json({ submitted: true })
}