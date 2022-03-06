/*
 * Created by cesarmarcial on 05/03/22
 */

// imports

// interface
import { FC } from 'react'

type Props = {
  text: string
}
// Beginning of component: pageTitle
const PageTitle: FC<Props> = ({ text }) => {
  return <h2 className={'text-6xl font-bold'}>{text}</h2>
}

export default PageTitle
