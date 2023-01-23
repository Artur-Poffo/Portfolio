import { Grid } from "./styles"
import ProjectsCard from "../ProjectsCard"

import IProjects from "@/interfaces/IProjects"

interface Props {
  Projects?: Array<IProjects>
}

const ProjectsGrid: React.FC<Props> = ({ Projects }) => {
  return (
    <>
      <Grid>
        {Projects?.map((Project, index) => {
          return (
            <ProjectsCard ProjectInfo={Project} key={index} />
          )
        })}
      </Grid>
    </>
  )
}

export default ProjectsGrid