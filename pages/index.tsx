import Image from 'next/image'
import { FC } from 'react'
import categories from '../data/categories.json'
import Link from 'next/link'

const Home: FC = () => {
  return (
    <main className={`flex  justify-center gap-12  py-16 text-center`}>
      <section className="grid gap-12 md:w-1/2">
        <header>
          <h2 className="text-5xl font-bold">
            The only PVC Roll provider you will ever need
          </h2>
          <p className="pt-8">
            Flex Strip is a PVC roll supplier based in Mexicali, Baja
            California. We have a wide variety of PVC rolls to meet your needs.
            Our main categories are:
          </p>
        </header>
        <section className="grid grid-cols-3 gap-4">
          {categories.map((v, i) => {
            return (
              <Link href={`${v.navtitle}`} passHref key={i}>
                <a>
                  <div className="p-4 shadow-md">
                    <Image src={v.image} width={200} height={200} />
                    <h3 className="pt-2 text-lg font-bold">{v.title}</h3>
                  </div>
                </a>
              </Link>
            )
          })}
        </section>
      </section>
    </main>
  )
}

export default Home
