'use server'

export default async function sendEmail(formData) {
  const sgMail = require('@sendgrid/mail')
  const defaultEmail = process.env.NEXT_PUBLIC_SENDGRID_DEFAULT_EMAIL
  sgMail.setApiKey(process.env.NEXT_PUBLIC_SENDGRID_API_KEY)

  const email = formData.get('email')
  const subject = formData.get('subject')
  const message = formData.get('message')

  const notificationMsg = {
    to: email,
    from: defaultEmail,
    subject: subject,
    text: message,
    html: `<strong>${message}</strong>`,
  }

  const confirmationMsg = {
    to: email,
    from: defaultEmail,
    subject: 'auto reply',
    text: 'testing',
    html: '<h1>Reply</h1>',
  }

  try {
    // Send notification email to yourself
    await sgMail.send(notificationMsg)

    // Send confirmation email to the customer
    await sgMail.send(confirmationMsg)

    console.log('Emails sent successfully')
  } catch (error) {
    console.error('Error sending emails:', error.message)
  }
}
