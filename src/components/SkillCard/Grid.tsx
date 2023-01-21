import { Grid } from "./styles"

import ISkill from "@/interfaces/ISkills"
import SkillCard from "."

interface Props {
  Skills: ISkill[]
}

const GridSkills: React.FC<Props> = ({ Skills }) => {
  return (
    <>
      <Grid>
        {Skills.map((skill, index) => {
          return (
            <SkillCard key={index} skill={skill} />
          )
        })}
      </Grid>
    </>
  )
}

export default GridSkills