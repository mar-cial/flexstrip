import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Label from '../../components/Label'
import rolls from '../../data/rolls'
import PageContainer from '../../layout/pageContainer'
import { NextPage } from 'next'
import { useRouter } from 'next/router'

const ProductPage: NextPage = () => {
  const router = useRouter()

  const selectedRoll = rolls.find(
    (roll) => router.query.productid === roll.productid
  )

  if (!selectedRoll) {
    return <h1>NOT FOUND!</h1>
  }

  return (
    <PageContainer>
      <Image
        src={selectedRoll.image}
        width={800}
        height={800}
        layout="responsive"
      />
      <header className="pt-2">
        <Label text="Name" />
        <h1 className="text-2xl font-bold ">{selectedRoll.name}</h1>
      </header>
      <section className="pt-2">
        <Label text="Description" />
        <p>{selectedRoll.detailsText}</p>
      </section>
      <section className="pt-2">
        <Label text="Uses" />
        <ul>
          {selectedRoll.uses.map((use, i) => {
            return <li key={i}>{use.title}</li>
          })}
        </ul>
      </section>
      <section className="flex flex-col py-6">
        <Label text="Saber más" />
        <Link href={'/contacto'}>
          <a className="text-2xl font-bold transition-all text-light hover:text-main">
            Contáctenos para saber más!
          </a>
        </Link>
      </section>
    </PageContainer>
  )
}

export default ProductPage
