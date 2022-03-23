import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
type Props = {
  href: string
}

const MoreDetailsButton = (props: Props) => {
  return (
    <Link href={`${props.href}`} passHref>
      <motion.a
        className="self-end py-1 font-bold text-center text-white bg-main"
        whileHover={{ y: -2 }}
        whileTap={{ y: 0 }}
      >
        Obtener más detalles
      </motion.a>
    </Link>
  )
}

export default MoreDetailsButton
