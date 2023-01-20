import Link from "next/link"

import { Nav } from "./styles"
import List from "./list"

interface Props {
  items: Array<string>
}

const NavBar: React.FC<Props> = ({ items }) => {
  return (
    <>
      <Nav>
        <Link href={"/"} ><h1>Artur Poffo</h1></Link>

        <List items={items} />
      </Nav>
    </>
  )
}

export default NavBar