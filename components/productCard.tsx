import Image from 'next/image'
import { FC } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'

export interface Roll {
  name: string
  price: number
  product_id: string
  description: string
  image: string
}

interface IProductCard {
  roll: Roll
}

const ProductCard: FC<IProductCard> = ({ roll }) => {
  return (
    <div className="grid border-2 p-2">
      <Image
        src={`/${roll.image}`}
        layout="responsive"
        height={1200}
        width={1600}
      />
      <h3 className={'py-3 text-xl font-bold'}>{roll.name}</h3>

      <div className="border-y-2">
        <div className={'flex justify-between'}>
          <span>Price per roll:</span>
          <span className={'text-md font-medium'}>{`$${roll.price.toFixed(
            2
          )}`}</span>
        </div>
      </div>
      <div className="border-b-2">
        <div className="flex justify-between">
          <span>Product id:</span>
          <span className={'text-md font-medium'}>{roll.product_id}</span>
        </div>
      </div>
      <div className=" py-2 text-center">
        <Link
          href={{
            pathname: `rolls/[rolldetail]`,
            query: {
              roll: roll.product_id,
            },
          }}
        >
          <motion.button
            className="w-full bg-black text-white"
            whileHover={{ y: -1 }}
            whileTap={{ y: 0 }}
          >
            learn more
          </motion.button>
        </Link>
      </div>
    </div>
  )
}

export default ProductCard
