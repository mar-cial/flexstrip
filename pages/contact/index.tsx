import React, { FC } from 'react'
import ContactForm from '../../components/contactForm'
import InfoSectionHeader from '../../components/infoSectionHeader'

const Contact: FC = () => {
  return (
    <>
      <main className="flex h-screen flex-col items-center p-4 py-12 text-center">
        <h2 className="pb-4 text-4xl font-bold md:text-6xl">Contact us</h2>
        <div className="grid w-full gap-4 md:grid-cols-3">
          <div className="border-2 border-white p-4">
            <InfoSectionHeader title="Form" />
            <div className="pt-4">
              <ContactForm />
            </div>
          </div>
          <div className="border-2 border-white p-4">
            <InfoSectionHeader title="Our info" />
          </div>
          <div className="border-2 border-white p-4">
            <InfoSectionHeader title="Map" />
          </div>
        </div>
      </main>
    </>
  )
}

export default Contact
