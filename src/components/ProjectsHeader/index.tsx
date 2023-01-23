import { Container, Content } from "./styles"

import VideoBackground from "@/components/VideoBackground"
import ProjectsFilter from "@/components/ProjectsFilter"

interface Props {
  Title?: string
}

const ProjectsHeader: React.FC<Props> = ({ Title }) => {
  return (
    <>
      <Container>
        <VideoBackground Title={Title} />

        <Content>
          <ProjectsFilter Links={["Front-End", "Back-End", "Full-Stack", "Mobile"]} />
        </Content>
      </Container>
    </>
  )
}

export default ProjectsHeader