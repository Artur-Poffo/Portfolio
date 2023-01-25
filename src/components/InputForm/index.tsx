import { Container } from "./styles"

interface Props {
  type: string
  label: string
  id: string
  placeholder: string
}

const InputForm: React.FC<Props> = ({ type, id, label, placeholder }) => {
  return (
    <>
      <Container>
        <label htmlFor={id}>{label}</label>
        <input type={type} id={id} placeholder={placeholder} />
      </Container>
    </>
  )
}

export default InputForm