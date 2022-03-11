import React, { FC, ReactNode } from 'react'
import Header from './header'
import Navbar from './navbar'

type PageContainerProps = {
  children: ReactNode
}

const PageContainer: FC<PageContainerProps> = ({ children }) => {
  return (
    <div className=" sm:col-span-2 sm:col-start-2 md:col-span-8 md:col-start-3">
      <Header />
      <Navbar />
      {children}
    </div>
  )
}

export default PageContainer
