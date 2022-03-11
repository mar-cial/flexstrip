import React, { FC } from 'react'

type Props = {
  title: string
}

const PageTitle: FC<Props> = ({ title }) => {
  return <h1 className="p-4 text-4xl font-bold md:text-6xl">{title}</h1>
}

export default PageTitle
