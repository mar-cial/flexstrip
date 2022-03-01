import React from 'react'

const ContactForm = () => {
  const handleOnSubmit = async (e) => {
    e.preventDefault()

    const formData = {}
    Array.from(e.currentTarget).forEach((field) => {
      if (!field.name) return
      formData[field.name] = field.value
    })

    fetch('/api/mail', {
      method: 'post',
      body: JSON.stringify(formData),
    })
  }

  return (
    <form method="POST" className="grid gap-2 text-black dark:text-white">
      <label htmlFor="name">Name</label>
      <input type="text" name="name" className="border-2 text-black" />

      <label htmlFor="company">company</label>
      <input type="text" name="company" className="border-2 text-black" />

      <label htmlFor="email">email</label>
      <input type="text" name="email" className="border-2 text-black" />

      <label htmlFor="message">message</label>
      <textarea name="message" className="h-32 border-2 text-black" />

      <button onSubmit={handleOnSubmit}>Submit</button>
    </form>
  )
}

export default ContactForm
