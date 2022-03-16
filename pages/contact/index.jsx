import React from 'react'
import ContactForm from '../../components/contactForm'
import PageContainer from '../../layout/pageContainer'

const Contact = () => {
  return (
    <PageContainer>
      <section className="grid gap-4 py-6">
        <header className="grid justify-center place-items-center ">
          <h2 className="text-4xl font-bold text-bold">Contact us!</h2>
          <p>
            Looking for a complete curtain? Leave us a message with the width x
            height you need to cover and we will send a quote.
          </p>
        </header>
        <ContactForm />
        <footer className="text-center ">
          <h2 className="text-4xl font-bold">Location</h2>
        </footer>
      </section>
      {/* 
      <footer className="grid gap-4 py-6 md:grid-cols-3">
        <header className="grid place-items-center md:col-span-3">
          <h2 className="text-4xl font-bold text-bold">Our links</h2>
        </header>
      </footer>
    
  */}
    </PageContainer>
  )
}

export default Contact
