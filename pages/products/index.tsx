import { NextPage } from 'next'
import React from 'react'
import PageTitle from '../../components/PageTitle'
import Label from '../../components/Label'
import rolls from '../../data/rolls'
import Image from 'next/image'
import Link from 'next/link'
import PageContainer from '../../layout/pageContainer'

const Products: NextPage = () => {
  return (
    <PageContainer>
      <section className="grid gap-4 py-6 md:grid-cols-3">
        <header className="grid place-items-center md:col-span-3">
          <h2 className="text-4xl font-bold text-bold">PVC Rolls</h2>
        </header>
        {rolls.map((roll, i) => {
          return (
            <article key={i} className={'grid gap-4 p-2 shadow-md'}>
              <header>
                <Image
                  src={roll.image}
                  width={2048}
                  height={1536}
                  layout="responsive"
                  alt={roll.finish}
                />
                <Label text="Name" />
                <h2 className="text-2xl font-bold">{roll.name}</h2>
                <Label text="Finish" />
                <h3 className="font-medium">{roll.finish}</h3>
              </header>
              <Link href={`/products/${roll.productid}`} passHref>
                <a className="py-1 font-bold text-center text-white bg-black">
                  Get more details
                </a>
              </Link>
            </article>
          )
        })}
      </section>
    </PageContainer>
  )
}

export default Products
