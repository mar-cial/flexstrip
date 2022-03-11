import React, { FC } from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Header: FC = () => {
  return (
    <header className="flex justify-center">
      <div className="w-1/2 pt-4 md:w-1/5">
        <Image
          src={'/logo.png'}
          width={2355}
          height={1290}
          layout="responsive"
        />
      </div>
    </header>
  )
}

export default Header
