import { Container, Content } from "./styles"

import VideoBackground from "@/components/VideoBackground"
import ProjectsFilter from "@/components/ProjectsFilter"

const ProjectsHeader: React.FC = () => {
  return (
    <>
      <Container>
        <VideoBackground />

        <Content>
          <ProjectsFilter Links={["Front-End", "Back-End", "Full-Stack", "Mobile"]} />
        </Content>
      </Container>
    </>
  )
}

export default ProjectsHeader