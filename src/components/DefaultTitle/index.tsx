import { Title } from "./styles"

interface Props {
  text: string
}

const DefaultTitle: React.FC<Props> = ({ text }) => {
  return (
    <div>
      <Title>{text}</Title>
    </div>
  )
}

export default DefaultTitle