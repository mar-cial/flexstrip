import React from 'react'
import Navigation from './navigation'
const MainLayout = ({ children }) => {
  return (
    <div className=" h-screen overflow-scroll bg-white px-4 text-black dark:bg-black dark:text-white ">
      <Navigation />
      {children}
    </div>
  )
}

export default MainLayout
