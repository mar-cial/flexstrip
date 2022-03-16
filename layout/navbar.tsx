import React, { FC } from 'react'
import routes from '../data/routes'
import Link from 'next/link'
import { useRouter } from 'next/router'

const Navbar: FC = () => {
  const router = useRouter()
  console.log(router.asPath)
  return (
    <nav className="flex justify-center py-4">
      <ul className="flex gap-4">
        {routes.map((route, i) => {
          return (
            <li key={i}>
              <Link href={route.url} passHref>
                <a
                  className={`${
                    router.asPath === route.url ? 'border-b-2' : ''
                  }`}
                >
                  {route.text}
                </a>
              </Link>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}

export default Navbar
