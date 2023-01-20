import Link from "next/link"

interface Props {
  items: Array<string>
}

const List: React.FC<Props> = ({ items }) => {
  return (
    <>
      <ul>
        {items.map((item, index) => {
          return (
            <Link href={item} key={index} ><li>{item}</li></Link>
          )
        })}
      </ul>
    </>
  )
}

export default List