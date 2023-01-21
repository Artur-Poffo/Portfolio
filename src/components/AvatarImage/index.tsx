import { Container, Avatar } from "./styles"

import MyImage from "../../../public/AvatarImage.jpg"
import Image from "next/image"

const AvatarImage: React.FC = () => {
  return (
    <>
      <Container>
        <Avatar as={Image} src={MyImage} alt="Foto de avatar" />
      </Container>
    </>
  )
}

export default AvatarImage