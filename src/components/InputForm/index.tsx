import { Container } from "./styles"

interface Props {
  type: string
  label: string
  id: string
  placeholder: string
  state: string
  setState: Function
}

const InputForm: React.FC<Props> = ({ type, id, label, placeholder, state, setState }) => {
  return (
    <>
      <Container>
        <label htmlFor={id}>{label}</label>
        <input type={type} id={id} placeholder={placeholder} value={state} onChange={(e) => setState(e.currentTarget.value)} />
      </Container>
    </>
  )
}

export default InputForm