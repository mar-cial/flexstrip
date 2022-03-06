/*
* Created by cesarmarcial on 05/03/22
*/

// imports

// interface

// Beginning of component: header
import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/router'
const Header = () => {
  const router = useRouter();
  const routes = [
    {
      url: "/",
      text: "Home"
    },
    {
      url: "/products",
      text: "Products"
    },
    {
      url: "/contact",
      text: "Contact"
    },

  ]
  return (
    <header className={'flex justify-center flex-col items-center'}>
      <div className={'w-1/2 md:w-1/6'}>
        <Link href={'/'} passHref>
          <a><Image src={'/logo.png'} width={2355} height={1290} layout={"responsive"} /></a>
        </Link>
      </div>

      <nav className={'flex gap-4'}>
        {/* DRY, am I right or am I right */}
        {routes.map((route, i) => {
          return (
            <Link href={route.url} passHref key={i}>
              <a className={`${router.asPath === route.url ? "border-b-2" : ""} font-semibold`}>{route.text}</a>
            </Link>
          )
        })}
      </nav>
    </header>
  )
}

export default Header
