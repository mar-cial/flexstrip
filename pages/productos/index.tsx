import React from 'react'
import rolls, { Roll } from '../../data/rolls'
import hardware, { Hardware } from '../../data/hardwareData'
import PageContainer from '../../layout/pageContainer'
import RollCard from '../../components/rollCard'
import HardwareCard from '../../components/hardwareCard'
import { GetStaticProps, NextPage } from 'next'

type ProductsProps = {
  rolls: Roll[],
  hardware: Hardware[]

}

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      rolls, hardware
    }
  }
}

const Products: NextPage<ProductsProps> = ({rolls, hardware}) => {
  return (
    <PageContainer>
      <section className="grid gap-4 py-6 md:grid-cols-3">
        <header className="grid place-items-center md:col-span-3">
          <h2 className="text-4xl font-bold text-bold">
            Rollos de plástico PVC
          </h2>
        </header>
        {rolls.map((roll, i) => {
          return <RollCard roll={roll} key={i} />
        })}
      </section>

      <section className="grid gap-4 py-6 md:grid-cols-3" id="hardware-section">
        <header className="grid place-items-center md:col-span-3">
          <h2 className="text-4xl font-bold text-bold">
            Herraje para colgar cortinas
          </h2>
        </header>

        {hardware.map((hw, i) => {
          return <HardwareCard hw={hw} key={i} />
        })}
      </section>
    </PageContainer>
  )
}

export default Products
