import { FC } from 'react'

interface IInfoSectionHeader {
  title: string
}

const InfoSectionHeader: FC<IInfoSectionHeader> = ({ title }) => {
  return (
    <h3 className="border-b-2 border-gray-400 pb-2 text-2xl font-bold">
      {title}
    </h3>
  )
}

export default InfoSectionHeader
