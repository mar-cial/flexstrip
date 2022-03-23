import React, { FC } from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Header: FC = () => {
  return (
    <header className="flex justify-center">
      <div className="w-2/3 pt-4 md:w-1/2 lg:w-1/3">
        <Link href={'/'} passHref>
          <a>
            <Image
              src={'/logo.png'}
              width={2355}
              height={1290}
              layout="responsive"
            />
          </a>
        </Link>
      </div>
    </header>
  )
}

export default Header
