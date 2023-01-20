import { Title } from "./styles"
import { motion } from "framer-motion"

interface Props {
  text: string
}

const DefaultTitle: React.FC<Props> = ({ text }) => {
  return (
    <>
      <Title as={motion.h1} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: .6 }} >{text}</Title>
    </>
  )
}

export default DefaultTitle