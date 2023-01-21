import { Card } from "./styles"

import ISkill from "@/interfaces/ISkills"

interface Props {
  skill: ISkill
}

const SkillCard: React.FC<Props> = ({ skill }) => {
  return (
    <>
      <Card>
        <h2>{skill.name}</h2>
        <p>{skill.desc}</p>
      </Card>
    </>
  )
}

export default SkillCard