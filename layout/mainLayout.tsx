import React, { FC, ReactNode } from 'react'

type MainLayoutProps = {
  children: ReactNode
}
const MainLayout: FC<MainLayoutProps> = ({ children }) => {
  return (
    <div className="grid p-4 sm:grid-cols-4 md:grid-cols-12">{children}</div>
  )
}

export default MainLayout
