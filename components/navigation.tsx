import React from 'react'
import Link from 'next/link'

const Navigation = () => {
  const routes = [
    {
      url: '/rolls',
      text: 'Products',
    },
    {
      url: '/contact',
      text: 'Contact',
    },
  ]

  return (
    <nav className="grid grid-cols-2 items-center py-6">
      <div>
        <Link href={'/'} passHref>
          <a className={'text-2xl font-bold'}>Flex Strip</a>
        </Link>
      </div>
      <ul className="grid grid-flow-col items-center justify-end gap-6">
        {routes.map((v, i) => {
          return (
            <li key={i}>
              <Link href={v.url} passHref>
                <a className="text-lg font-bold">{v.text}</a>
              </Link>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}

export default Navigation
