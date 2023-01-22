import type { NextApiRequest, NextApiResponse } from 'next'
import IProjects from '@/interfaces/IProjects'
import loadDB from '@/utils/db'
import Project from "../../../utils/Models/ProjectModel"


type Data = {
  Projects: Array<IProjects>
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  await loadDB()
  const AllProjects: Array<IProjects> = await Project.find({})

  res.status(200).json({ Projects: AllProjects })
}
