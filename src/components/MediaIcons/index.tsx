import { Container } from "./styles"

import { AiFillGithub } from "react-icons/ai"
import { AiFillLinkedin } from "react-icons/ai"
import { AiFillInstagram } from "react-icons/ai"

const MediaIcons: React.FC = () => {
  return (
    <>
      <Container>
        <a href="https://github.com/Artur-Poffo"><AiFillGithub /></a>
        <a href="https://www.linkedin.com/in/artur-poffo-207393230/"><AiFillLinkedin /></a>
        <a href="https://www.instagram.com/arturpoffodev/"><AiFillInstagram /></a>
      </Container>
    </>
  )
}

export default MediaIcons