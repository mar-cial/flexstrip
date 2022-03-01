import Image from 'next/image'
import React from 'react'
import rolls from '../../data/rolls.json'
import hardware from '../../data/hardware.json'
import Link from 'next/link'

const SectionHeader = ({ text }) => {
  return (
    <header
      className={
        'bg-blue-400 py-1 text-center text-2xl font-bold text-white md:text-5xl'
      }
    >
      {text}
    </header>
  )
}

const Rolls = () => {
  return (
    <main className="pb-4">
      <SectionHeader text={'PVC Strip Door Bulk Rolls'} />
      <section className="grid gap-4 py-6 md:grid-cols-4">
        {rolls.map((roll, i) => {
          return (
            <div key={i} className={'border-2 p-4'}>
              <Image
                src={roll.image}
                width={1200}
                height={800}
                layout="responsive"
              />
              <div className="pt-4">
                <span className="text-sm font-bold text-gray-500">
                  Roll name
                </span>
                <h2 className={' text-2xl font-bold'}>{roll.name}</h2>
              </div>
              <div className="pt-4">
                <span className="text-sm font-bold text-gray-500">
                  Description
                </span>
                <p>{`${roll.description.slice(0, 163)}.`}</p>
              </div>
              <div className="flex flex-col pt-4">
                <span className="text-sm font-bold text-gray-500">Price</span>
                <span className="text-xl font-bold">{`$${roll.price.toFixed(
                  2
                )}`}</span>
              </div>
              <div className="pt-2 text-blue-300">
                <Link href={`/rolls/${encodeURIComponent(roll.product_id)}`}>
                  <a>click</a>
                </Link>
              </div>
            </div>
          )
        })}
      </section>

      <SectionHeader text={'Strip door installation hardware'} />
      <section className="grid gap-4 py-4 md:grid-cols-2">
        <div className="grid gap-4 md:grid-cols-2">
          {hardware.map((v, i) => {
            return (
              <div key={i} className={'grid p-4 shadow-md'}>
                <Image
                  src={`/${v.image}.jpeg`}
                  width={100}
                  height={100}
                  layout="responsive"
                />
                <h3 className="text-lg font-bold">{v.name}</h3>
              </div>
            )
          })}
        </div>
        <div className="p-4">
          <h2 className="py-2 text-5xl font-bold">
            Hang your curtains with confidence
          </h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
            tempora facilis beatae rem suscipit possimus, nesciunt, est corrupti
            laboriosam delectus fuga id, aperiam architecto odio maxime
            repudiandae dignissimos mollitia perspiciatis?
          </p>
        </div>
      </section>

      <SectionHeader text={'Complete doors'} />
      <section>
        <h4>complete doors.</h4>
        <p>
          Todavía no sé que le voy a poner aquí la verdad, icnora pero{' '}
          <strong>contempla</strong> que va a haber una tercera sección pls. te
          amo :$
        </p>
      </section>
    </main>
  )
}

export default Rolls
