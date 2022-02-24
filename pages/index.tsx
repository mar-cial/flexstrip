import { FC } from 'react'
import SectionTitle from '../components/sectionTitle'
import categories from '../data/categories.json'
import Circle from '../components/circle'
import Image from 'next/image'

const Home: FC = () => {
  return (
    <main className={'p-4'}>
      {/* Hero */}
      <section className={'py-6'}>
        <div>
          <h2 className="pt-2 pb-4 text-5xl font-bold">
            The only PVC Roll provider you will ever need
          </h2>
          <p className="pb-4">
            Flex Strip is a PVC roll supplier based in Mexicali, Baja
            California. We have a wide variety of PVC rolls to meet your needs.
            Our main categories are:
          </p>
        </div>
        <div className="grid grid-cols-3 gap-4">
          {categories.map((category, i) => (
            <div key={i} className={'grid gap-4 rounded-md p-4 shadow-md'}>
              <div className="flex justify-between border-b-2 pb-2">
                <h3 className="text-lg font-bold">{category.title}</h3>
                <Circle />
              </div>
              <div className="grid gap-4">
                <Image
                  src={category.image}
                  width={200}
                  height={180}
                  layout="responsive"
                  className="rounded-md"
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Calculator */}
      <section className="border-y-2 py-4">
        <h3 className={'text-2xl font-bold'}>Use our calculator</h3>
        <p className="py-4">
          Not sure how much plastic strips are you going to need? Use our
          calculator to determine exactly how much you need using only the width
          and height of the space you are covering.
        </p>
        <div className="flex h-40 items-center justify-center rounded-md bg-blue-500">
          <span>
            demo <br />
            width x heigth
          </span>
        </div>
      </section>

      {/* footer? */}
      <section className="border-b-2 py-4">
        <SectionTitle titleText="Our products" />
        <p className={'py-4'}>
          We deliver the best quality of PVC Strip rolls right to your
          warehouse. We also have hanging kits and complete pvc strip curtains.
        </p>
      </section>
    </main>
  )
}

export default Home
