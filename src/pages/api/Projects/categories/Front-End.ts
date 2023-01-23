import type { NextApiRequest, NextApiResponse } from 'next'
import IProjects from '@/interfaces/IProjects'
import loadDB from '@/utils/db'
import Project from "../../../../utils/Models/ProjectModel"


type Data = {
  FrontProjects: Array<IProjects>
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  await loadDB()
  const FrontProjects: Array<IProjects> = await Project.find({ category: "Front-End" })

  res.status(200).json({ FrontProjects })
}
