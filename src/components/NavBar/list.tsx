import Link from "next/link"

interface Props {
  items: Array<string>
  setOpen?: Function
}

const List: React.FC<Props> = ({ items, setOpen }) => {
  return (
    <>
      <ul>
        {items.map((item, index) => {
          return (
            <Link href={item} onClick={() => setOpen ? setOpen(false) : ""} key={index} ><li>{item}</li></Link>
          )
        })}
      </ul>
    </>
  )
}

export default List