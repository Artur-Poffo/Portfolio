import { Container } from "./styles"

import ListItem from "../ListItem"
import Link from "next/link"

interface Props {
  Links: Array<String>
}

const ProjectsFilter: React.FC<Props> = ({ Links }) => {
  return (
    <>
      <Container>
        <div>
          <span>Filtrar por categorias:</span>
          <ul>
            <Link href={`/Projetos`} >
              <ListItem text={"Todos"} />
            </Link>

            {Links.map((LinkName, index) => {
              return (
                <Link href={`/Projetos/categorias/${LinkName}`} key={index} >
                  <ListItem text={LinkName} />
                </Link>
              )
            })}
          </ul>
        </div>
      </Container>
    </>
  )
}

export default ProjectsFilter