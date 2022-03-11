type LabelProps = {
  text: string
}

const Label = ({ text }: LabelProps) => {
  return <span className="text-sm font-semibold text-gray-400">{text}</span>
}

export default Label
