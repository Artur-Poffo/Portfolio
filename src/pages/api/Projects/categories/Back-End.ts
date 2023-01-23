import type { NextApiRequest, NextApiResponse } from 'next'
import IProjects from '@/interfaces/IProjects'
import loadDB from '@/utils/db'
import Project from "../../../../utils/Models/ProjectModel"


type Data = {
  BackProjects: Array<IProjects>
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  await loadDB()
  const BackProjects: Array<IProjects> = await Project.find({ category: "Back-End" })

  res.status(200).json({ BackProjects })
}
