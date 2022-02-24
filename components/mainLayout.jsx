import React from 'react'
import Header from './header'
import Navigation from './navigation'
const MainLayout = ({ children }) => {
  return (
    <div className="overflow-scroll bg-white text-black dark:bg-black dark:text-white">
      <Header />
      <Navigation />
      {children}
    </div>
  )
}

export default MainLayout
