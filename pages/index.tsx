import React from 'react'
import PageContainer from '../layout/pageContainer'
import categories from '../data/categories'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { NextPage } from 'next'

const Home: NextPage = () => {
  return (
    <PageContainer>
      <main className="flex flex-col items-center justify-center py-6 text-center ">
        <header>
          <h1 className="text-4xl font-bold">
            Somos proveedores nacionales de rollos de plástico PVC.
          </h1>
        </header>
      </main>
      <section className="grid gap-6 text-center ">
        <section className="grid w-full gap-4 md:grid-cols-3 ">
          {categories.map((category, i) => {
            return (
              <article
                key={i}
                className={'grid content-between py-4 text-center'}
              >
                <header>
                  <Image
                    src={category.image}
                    width={3024}
                    height={3024}
                    layout="responsive"
                  />
                  <h3 className="pt-4 font-semibold sm:text-xl md:text-2xl">
                    {category.title}
                  </h3>
                  <p className="flex py-6 text-gray-600">
                    {category.description}
                  </p>
                </header>

                <Link href={category.url} passHref>
                  <motion.a
                    className="py-2 mt-3 font-medium text-white max-h-12 bg-main"
                    whileHover={{ y: -3 }}
                    whileTap={{ y: 0 }}
                  >
                    Saber más
                  </motion.a>
                </Link>
              </article>
            )
          })}
        </section>
      </section>
    </PageContainer>
  )
}

export default Home
