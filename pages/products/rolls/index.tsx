/*
 * Created by cesarmarcial on 05/03/22
 */

// imports

// interface

// Beginning of component: index
import pageAnimationVariants from '../../../animations/pageAnimationVariants'
import PageTitle from '../../../components/pageTitle'
import { motion } from 'framer-motion'

const Rolls = () => {
  return (
    <motion.main
      variants={pageAnimationVariants}
      initial={'hidden'}
      animate={'enter'}
      exit={'hidden'}
      className={'grid justify-center py-12'}
    >
      <PageTitle text={'Rolls'} />
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ ease: 'linear', duration: 4, repeat: Infinity }}
        className={
          'flex h-24 w-24 items-center justify-center rounded-full bg-orange-200'
        }
      >
        Pending
      </motion.div>
    </motion.main>
  )
}

export default Rolls
