import { NextPage } from 'next'
import Image from 'next/image'
import { useRouter } from 'next/router'
import React from 'react'
import DocumentText from '../../components/DocumentText'
import Label from '../../components/Label'
import rolls from '../../data/rolls'
import PageContainer from '../../layout/pageContainer'

type Props = {}

const ProductPage: NextPage = (props: Props) => {
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
        width={3048}
        height={3048}
        layout="responsive"
      />
      <header className="pt-2">
        <Label text="Name" />
        <h1 className="text-2xl font-bold ">{selectedRoll.name}</h1>
      </header>
      <section className="pt-2">
        <Label text="Description" />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis
          similique minima eius voluptates. Odit saepe vel autem sint, iste
          cumque ipsam officia, reprehenderit amet enim rem veritatis aliquam
          blanditiis at?
        </p>
      </section>
      <section className="pt-2">
        <Label text="Uses" />
        <ul>
          <li>Use 1</li>
          <li>Use 2</li>
          <li>Use 3</li>
          <li>Use 4</li>
        </ul>
      </section>
      <section className="pt-4">
        <Label text="Spec Sheet" />
        <a
          href="/specsheets/spec.pdf"
          download={`${selectedRoll.productid} Spec Sheet`}
        >
          <DocumentText />
        </a>
      </section>
    </PageContainer>
  )
}

export default ProductPage
