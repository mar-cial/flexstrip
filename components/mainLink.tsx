import Link from 'next/link'
import { FC } from 'react'

interface IMainLink {
  linkHref: string
  aText: string
}

const MainLink: FC<IMainLink> = ({ linkHref, aText }) => {
  return (
    <Link href={linkHref} passHref>
      <a className="text-blue-500 hover:text-blue-700">{aText}</a>
    </Link>
  )
}

export default MainLink
