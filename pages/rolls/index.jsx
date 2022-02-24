import Image from 'next/image'
import React from 'react'
import rolls from '../../data/rolls.json'

const Rolls = () => {
  return (
    <main className="grid h-screen gap-4 p-4 md:grid-cols-4">
      <h2 className="htext-3xl font-bold md:col-span-4">Our Rolls</h2>
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
              <span className="text-sm font-bold text-gray-500">Roll name</span>
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
              <button>Learn more</button>
            </div>
          </div>
        )
      })}
    </main>
  )
}

export default Rolls
