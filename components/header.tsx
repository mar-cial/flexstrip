import React from 'react'
import Link from 'next/link'

const Header = () => {
  return (
    <header className={'flex items-center justify-center py-2'}>
      <Link href={'/'} passHref>
        <a>
          <h1 className={'text-2xl font-bold tracking-widest'}>Flex Strip.</h1>
        </a>
      </Link>
    </header>
  )
}

export default Header
