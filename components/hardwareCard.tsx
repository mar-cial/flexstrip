import React, { FC } from 'react'
import Image from 'next/image'
import Label from './Label'
import Link from 'next/link'
import MoreDetailsButton from './moreDetailsButton'

type Hardware = {
  name: string
  image: string
}

type HardwareCardProps = {
  hw: Hardware
}

const HardwareCard: FC<HardwareCardProps> = ({ hw }) => {
  return (
    <article className={' grid gap-4 p-2 shadow-md'}>
      <header>
        <Image
          src={hw.image}
          width={400}
          height={254}
          alt={hw.name}
          layout="responsive"
        />
        <Label text="Name" />
        <h3 className="text-2xl font-semibold">{hw.name}</h3>
      </header>
      <MoreDetailsButton href="/contacto" />
    </article>
  )
}

export default HardwareCard
