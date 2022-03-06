/*
 * Created by cesarmarcial on 05/03/22
 */

// imports

// interface

// Beginning of component: contact
import pageAnimationVariants from '../../animations/pageAnimationVariants'
import { motion } from 'framer-motion'

const Contact = () => {
  const formHandler = () => {
    alert(
      "Thank you for checking this project! This doesn't send anything anywhere, yet."
    )
  }
  return (
    <motion.main
      variants={pageAnimationVariants}
      initial={'hidden'}
      animate={'enter'}
      exit={'hidden'}
      className={'grid justify-center py-12'}
    >
      <h2 className={'text-6xl font-bold'}>Contact us</h2>
      <p className={'pb-4'}>We'll get back to you as soon as we can.</p>

      <form
        name={'contactform'}
        action={''}
        onSubmit={formHandler}
        method={'post'}
        className={'grid gap-4 border-2 p-2'}
      >
        <label htmlFor="name">Name</label>
        <input type="text" className={'border-2'} />
        <label htmlFor="email">Email</label>
        <input type="text" className={'border-2'} />
        <label htmlFor="company">Company</label>
        <input type="text" className={'border-2'} />
        <label htmlFor="message">Message</label>
        <textarea name="message" id="message" className={'border-2'}>
          Enter your message...
        </textarea>
        <motion.input
          type="submit"
          value={'Submit'}
          className={'bg-blue-400 py-2 text-white cursor-pointer'}
          whileHover={{ y: -3 }}
          whileTap={{y:0}}
        />
      </form>
    </motion.main>
  )
}

export default Contact
