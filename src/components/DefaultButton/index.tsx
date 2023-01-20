import { Btn } from "./styles"

interface Props {
  text: string
}

const DefaultButton: React.FC<Props> = ({ text }) => {
  return (
    <>
      <Btn>{text}</Btn>
    </>
  )
}

export default DefaultButton