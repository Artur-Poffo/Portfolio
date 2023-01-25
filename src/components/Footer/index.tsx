import { Container } from "./styles"

import MediaIcons from "../MediaIcons"
import { motion } from "framer-motion"

const Footer: React.FC = () => {
  return (
    <>
      <Container as={motion.div}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: .6, delay: .3 }}
      >
        <a href="https://github.com/Artur-Poffo/Portfolio">Código fonte no GitHub</a>

        <MediaIcons />
      </Container>
    </>
  )
}

export default Footer