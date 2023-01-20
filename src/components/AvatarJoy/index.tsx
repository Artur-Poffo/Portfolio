import { Container } from "./styles"

import AvatarImage from "../../../public/dev-artur.png"
import Image from "next/image"

const AvatarJoy: React.FC = () => {
  return (
    <>
      <Container>
        <Image priority fill sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw" src={AvatarImage} alt={"Imagem de Avatar"} />
      </Container>
    </>
  )
}

export default AvatarJoy