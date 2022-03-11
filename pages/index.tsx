import { NextPage } from 'next'
import React from 'react'
import PageContainer from '../layout/pageContainer'
import categories from '../data/categories'
import Image from 'next/image'
import Link from 'next/link'

const Home: NextPage = () => {
  return (
    <PageContainer>
      <main className="flex flex-col items-center justify-center py-6 text-center ">
        <header>
          <h1 className="text-4xl font-bold">
            We are national suppliers of PVC plastic rolls.
          </h1>
        </header>
      </main>
      <section className="grid gap-6 text-center ">
        <h2>We provide the following solutions:</h2>
        <section className="grid w-full gap-4 md:grid-cols-3 ">
          {categories.map((category, i) => {
            return (
              <article key={i} className={'grid text-center'}>
                <header>
                  <Image
                    src={category.image}
                    width={2000}
                    height={1600}
                    layout="responsive"
                  />
                  <h3 className="pt-4 font-semibold sm:text-xl md:text-2xl">
                    {category.title}
                  </h3>
                  <p className="text-gray-600">{category.description}</p>
                </header>
                <div className="self-end mt-4 border-2">
                  <Link href={'/products'} passHref>
                    <a>Learn more</a>
                  </Link>
                </div>
              </article>
            )
          })}
        </section>
      </section>
    </PageContainer>
  )
}

export default Home
