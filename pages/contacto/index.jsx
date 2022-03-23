import React from 'react'
import ContactForm from '../../components/contactForm'
import PageContainer from '../../layout/pageContainer'

const Contact = () => {
  return (
    <PageContainer>
      <section className="grid gap-4 py-6 text-center">
        <header className="grid justify-center place-items-center ">
          <h2 className="text-4xl font-bold text-bold">Contact us!</h2>
          <p>
            Looking for a complete curtain? Leave us a message with the width x
            height you need to cover and we will send a quote.
          </p>
        </header>
        <ContactForm />
      </section>

      <footer className="grid justify-center gap-4 py-6 text-center">
        <header className="grid">
          <h2 className="text-4xl font-bold text-bold">Ubicación</h2>
        </header>
        <p>Blvd. Adolfo López Mateos #2239-B</p>
        <p>Fracc. Las Palmas</p>
        <p>Mexicali, Baja California</p>
        <p>Zip code 21360</p>
      </footer>
    </PageContainer>
  )
}

export default Contact
