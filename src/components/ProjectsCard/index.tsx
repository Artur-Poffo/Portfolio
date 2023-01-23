import { Card } from "./styles"

import Link from "next/link"
import Image from "next/image"
import ListItem from "../ListItem"

import IProjects from "@/interfaces/IProjects"

interface Props {
  ProjectInfo: IProjects
}

const ProjectsCard: React.FC<Props> = ({ ProjectInfo }) => {
  return (
    <>
      <Card>
        <Link href={`/Projetos/work/${ProjectInfo._id}`} >
          <Image width={400} height={220} src={ProjectInfo.image} alt="Imagem do Projeto" />
          <div>
            <h2>{ProjectInfo.name}</h2>
            <ul>
              {ProjectInfo.techs.map((tech, index) => {
                return (
                  <ListItem key={index} text={tech} />
                )
              })}
            </ul>
          </div>
        </Link>
      </Card>
    </>
  )
}

export default ProjectsCard