import React, { FC } from 'react'

interface ISectionTitle {
  titleText: string
}

const SectionTitle: FC<ISectionTitle> = ({ titleText }) => {
  return <h3 className={'text-2xl font-bold'}>{titleText}</h3>
}

export default SectionTitle
