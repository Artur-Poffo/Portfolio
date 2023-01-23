import { Item } from "./styles"

interface Props {
  text: String
}

const ListItem: React.FC<Props> = ({ text }) => {
  return (
    <>
      <Item>{text}</Item>
    </>
  )
}

export default ListItem