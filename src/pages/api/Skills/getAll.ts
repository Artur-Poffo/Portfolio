import type { NextApiRequest, NextApiResponse } from 'next'
import loadDB from '@/utils/db'
import Skill, { ISkill } from "../../../utils/Models/SkillModel"


type Data = {
  Skills: Array<ISkill>
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  await loadDB()
  const AllSkills: Array<ISkill> = await Skill.find({})

  res.status(200).json({ Skills: AllSkills })
}
