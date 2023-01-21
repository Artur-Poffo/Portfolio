import { useState } from "react"
import { Hamburguer, ListMobile } from "./styles"

import Link from "next/link"
import List from "../NavBar/list"

interface Props {
  items: Array<string>
}

const MenuMobile: React.FC<Props> = ({ items }) => {
  const [open, setOpen] = useState(false)

  return (
    <>
      <Hamburguer onClick={() => setOpen(!open)} >
        <div />
        <div />
        <div />
      </Hamburguer>

      <ListMobile IsOpen={open} >
        <Link href={"/"} onClick={() => setOpen(false)} ><h1>Artur Poffo</h1></Link>

        <List items={items} setOpen={setOpen} key={"List Mobile"} />
      </ListMobile>
    </>
  )
}

export default MenuMobile