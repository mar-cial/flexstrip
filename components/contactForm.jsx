import React, { useState } from 'react'
import { motion } from 'framer-motion'

const ContactForm = () => {
  const [fullname, setFullname] = useState('')
  const [email, setEmail] = useState('')
  const [subject, setSubject] = useState('')
  const [message, setMessage] = useState('')
  const [errors, setErrors] = useState({})
  const [buttonText, setButtonText] = useState('Send')
  const [showSuccessMessage, setShowSuccessMessage] = useState(false)
  const [showFailureMessage, setShowFailureMessage] = useState(false)

  const handleValidation = () => {
    let tempErrors = {}
    let isValid = true

    if (fullname.length <= 0) {
      tempErrors['fullname'] = true
      isValid = false
    }
    if (email.length <= 0) {
      tempErrors['email'] = true
      isValid = false
    }
    if (subject.length <= 0) {
      tempErrors['subject'] = true
      isValid = false
    }
    if (message.length <= 0) {
      tempErrors['message'] = true
      isValid = false
    }

    setErrors({ ...tempErrors })
    console.log('errors', errors)
    return isValid
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    let isValidForm = handleValidation()

    if (isValidForm) {
      setButtonText('Sending')
      const res = await fetch('/api/sendgrid', {
        body: JSON.stringify({
          email: email,
          fullname: fullname,
          subject: subject,
          message: message,
        }),
        headers: {
          'Content-Type': 'application/json',
        },
        method: 'POST',
      })

      const { error } = await res.json()
      if (error) {
        console.log(error)
        setShowSuccessMessage(false)
        setShowFailureMessage(true)
        setButtonText('Send')

        // Reset form fields
        setFullname('')
        setEmail('')
        setMessage('')
        setSubject('')
        return
      }
      setShowSuccessMessage(true)
      setShowFailureMessage(false)
      setButtonText('Send')
      // Reset form fields
      setFullname('')
      setEmail('')
      setMessage('')
      setSubject('')
    }
    console.log(fullname, email, subject, message)
  }

  return (
    <form onSubmit={handleSubmit} className={'grid gap-2 text-center'}>
      <label htmlFor="fullname" className="text-lg font-bold">
        Full name
      </label>
      <input
        type="text"
        value={fullname}
        onChange={(e) => setFullname(e.target.value)}
        name="fullname"
        className="border-2"
      />
      {errors?.fullname && (
        <p className="text-red-400">Full name cannot be empty.</p>
      )}
      <label htmlFor="email" className="text-lg font-bold">
        Email
      </label>
      <input
        type="text"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        name="email"
        className="border-2"
      />
      {errors?.email && <p className="text-red-400">Email cannot be empty.</p>}
      <label htmlFor="subject" className="text-lg font-bold">
        Subject
      </label>
      <input
        type="text"
        value={subject}
        name="subject"
        className="border-2"
        onChange={(e) => {
          setSubject(e.target.value)
        }}
      />
      {errors?.subject && (
        <p className="text-red-400">Subject cannot be empty.</p>
      )}

      <label htmlFor="message" className="text-lg font-bold">
        Message
      </label>
      <textarea
        name="message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        className="border-2"
      ></textarea>
      <div className="text-left">
        {showSuccessMessage && (
          <p className="my-2 text-sm font-semibold text-green-500">
            Thankyou! Your Message has been delivered.
          </p>
        )}
        {showFailureMessage && (
          <p className="text-red-500">
            Oops! Something went wrong, please try again.
          </p>
        )}
      </div>
      <motion.button
        type="submit"
        className="mt-4 border-2"
        whileHover={{ y: -3 }}
        whileTap={{ y: 0 }}
      >
        {buttonText}
      </motion.button>
    </form>
  )
}

export default ContactForm
