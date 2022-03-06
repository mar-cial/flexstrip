/*
 * Created by cesarmarcial on 05/03/22
 */

// imports

// interface

// Beginning of component: index
import pageAnimationVariants from '../../../animations/pageAnimationVariants'
import PageTitle from '../../../components/pageTitle'
import { motion } from 'framer-motion'

const variants = {
  start: {
    rotate: '360deg',
  },
}

const Curtains = () => {
  return (
    <motion.main
      variants={pageAnimationVariants}
      initial={'hidden'}
      animate={'enter'}
      exit={'hidden'}
      className={'grid justify-center py-12'}
    >
      <PageTitle text={'Curtains'} />

      <motion.div
        animate={{ rotate: 360 }}
        transition={{ ease: 'linear', duration: 4, repeat: Infinity }}
        className={"w-24 h-24 bg-orange-200 rounded-full flex justify-center items-center"}
      >
        Pending
      </motion.div>
    </motion.main>
  )
}

export default Curtains
