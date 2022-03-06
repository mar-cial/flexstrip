/*
* Created by cesarmarcial on 05/03/22
*/

// imports
import { AnimatePresence, motion } from 'framer-motion'
import React, { FC } from 'react'

// types
type Props = {
  children: React.ReactNode
}

// Beginning of component: mainLayout
const MainLayout: FC<Props> = ({children}) => {
  return (
    <AnimatePresence>

        {children}

    </AnimatePresence>
  )
}

export default MainLayout
