import React, { FC } from 'react'
import ContactForm from '../../components/contactForm'
import InfoSectionHeader from '../../components/infoSectionHeader'

const Contact: FC = () => {
  return (
    <>
      <main className="flex flex-col items-center pb-4 text-center">
        <h2 className="text-4xl font-bold md:text-6xl">Contact us</h2>
        <div className="grid w-full gap-4 md:grid-cols-3">
          <div className="border-2 border-white p-4 ">
            <InfoSectionHeader title="Form" />
            <div className="pt-4">
              <ContactForm />
            </div>
          </div>
          <div className="border-2 border-white">
            <InfoSectionHeader title="Our info" />
            <div>
              <h3 className={'text-lg font-bold text-gray-500'}>Address</h3>
              <p>
                Blvd. Adolfo López Mateos #2239-B <br />
                Fracc. Las Palmas, c.p. 21360
              </p>
              <p>Mexicali, Baja California, México.</p>
            </div>
            <div>
              <h3 className={'text-lg font-bold text-gray-500'}>Email</h3>
              <p>ventas@flexstrip.com</p>
            </div>
            <div>
              <h3 className={'text-lg font-bold text-gray-500'}>
                Phone number
              </h3>
              <p>686-144-2222</p>
            </div>
          </div>

          <div className="grid gap-6 border-2 border-white p-4">
            <InfoSectionHeader title="Map" />
            <p>
              Aquí voy a poner un mapita pero todavía no, nomás va a ser un
              cuadro como del tamaño del de abajo
            </p>
            <div className="flex h-48 items-center justify-center border-2 border-blue-200 bg-black text-red-300">
              <span>Así mas o menos</span>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}

export default Contact
