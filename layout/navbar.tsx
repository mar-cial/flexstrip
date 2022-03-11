import React, { FC } from 'react'
import routes from '../data/routes'
import Link from 'next/link'

const Navbar: FC = () => {
  return (
    <nav className="flex justify-center py-4">
      <ul className="flex gap-4">
        {routes.map((route, i) => {
          return (
            <li key={i}>
              <Link href={route.url} passHref>
                <a>{route.text}</a>
              </Link>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}

export default Navbar
