import sendgrid from '@sendgrid/mail'

sendgrid.setApiKey(process.env.SENDGRID_API_KEY)
async function sendEmail(req, res) {
  try {
    await sendgrid.send({
      to: 'cesarmarcialq@gmail.com',
      from: 'cesarmarcialq@gmail.com',
      subject: `[FLEX STRIP] - Message from website: ${req.body.subject}`,
      html: `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
      <html lang="en">
      <head>
        <meta charset="utf-8">
        <title>Flex Strip Testing</title>
        <meta name="description" content="Flex Strip Testing">
      <meta http-equiv="Content-Type" content="text/html charset=UTF-8" />
      </head>
      
      <body>
        <h1>You've got mail from ${req.body.fullname}</h1>
        <h2>Email: ${req.body.email}</h2>
        <p>Body: ${req.body.message}</p>
      </body>
      </html>`,
    })
  } catch (error) {
    // console.log(error);
    return res.status(error.statusCode || 500).json({ error: error.message })
  }

  return res.status(200).json({ error: '' })
}

export default sendEmail
