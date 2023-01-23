import { Grid } from "./styles"

import ProjectsCard from "../ProjectsCard"

const ProjectsGrid: React.FC = () => {
  return (
    <>
      <Grid>
        <ProjectsCard />
        <ProjectsCard />
        <ProjectsCard />
        <ProjectsCard />
        <ProjectsCard />
        <ProjectsCard />
        <ProjectsCard />
      </Grid>
    </>
  )
}

export default ProjectsGrid