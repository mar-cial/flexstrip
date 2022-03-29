import React, { FC } from 'react'
import Image from 'next/image'
import Label from './Label'
import Link from 'next/link'
import { motion } from 'framer-motion'
import MoreDetailsButton from './moreDetailsButton'
type Roll = {
  image: string
  name: string
  finish: string
  productid: string
}

type RollCardProps = {
  roll: Roll
}

const RollCard: FC<RollCardProps> = ({ roll }) => {
  return (
    <article className={'grid gap-4 p-2 shadow-md'}>
      <header>
        <Image
          src={roll.image}
          width={600}
          height={600}
          layout="responsive"
          alt={roll.finish}
        />
        <Label text="Name" />
        <h2 className="text-2xl font-bold">{roll.name}</h2>
        <Label text="Finish" />
        <h3 className="font-medium">{roll.finish}</h3>
      </header>
      <MoreDetailsButton href={`/productos/${roll.productid}`} />
    </article>
  )
}

export default RollCard
