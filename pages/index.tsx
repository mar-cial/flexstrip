import { motion } from 'framer-motion'
import pageAnimationVariants from '../animations/pageAnimationVariants'
import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'
import categories from '../data/categories'

const Home: FC = () => {

  return (
    <motion.main
      variants={pageAnimationVariants}
      initial={'hidden'}
      animate={'enter'}
      exit={'hidden'}
      className={'flex justify-center py-12'}
    >
      <div className={'grid w-5/6 gap-6 text-center md:w-1/2'}>
        <h1 className={'text-4xl font-bold md:text-6xl'}>
          Flex Strip is your regional PVC rolls provider.
        </h1>
        <p className={'font-light'}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <div className={'grid'}>
          <h2 className={'pb-6 text-xl font-bold'}>
            We offer products in the following categories
          </h2>
          <div className={'grid grid-cols-3 gap-2'}>
            {categories.map((category, i) => {
              return (
                <Link href={category.url} key={i}>
                  <motion.div
                    className={`${category.color} cursor-pointer p-2`}
                    whileHover={{ y: -5 }}
                    whileTap={{ y: 0 }}
                  >
                    <Image
                      src={category.img}
                      width={300}
                      height={250}
                      layout="responsive"
                    />
                    <h3 className={'pt-2 font-semibold text-white'}>
                      {category.title}
                    </h3>
                  </motion.div>
                </Link>
              )
            })}
          </div>
        </div>
      </div>
    </motion.main>
  )
}

export default Home
