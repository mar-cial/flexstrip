import React from 'react'
import Link from 'next/link'

const Navigation = () => {
  const routes = [
    {
      url: '/',
      text: 'Home',
    },
    {
      url: '/rolls',
      text: 'Rolls',
    },
    {
      url: '/about',
      text: 'About',
    },
    {
      url: '/contact',
      text: 'Contact',
    },
  ]

  return (
    <nav className="m-4 flex w-full justify-center">
      <ul className="flex w-9/12 justify-between text-center">
        {routes.map((v, i) => {
          return (
            <li key={i} className={'ml-4 w-full border-b-4'}>
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
