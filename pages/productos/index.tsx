import { NextPage } from 'next'
import React from 'react'
import Label from '../../components/Label'
import rolls from '../../data/rolls'
import hardware from '../../data/hardwareData'
import Image from 'next/image'
import Link from 'next/link'
import PageContainer from '../../layout/pageContainer'
import RollCard from '../../components/rollCard'
import HardwareCard from '../../components/hardwareCard'

const Products: NextPage = () => {
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
