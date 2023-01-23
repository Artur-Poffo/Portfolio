import type { NextApiRequest, NextApiResponse } from 'next'
import IProjects from '@/interfaces/IProjects'
import loadDB from '@/utils/db'
import Project from "../../../../utils/Models/ProjectModel"


type Data = {
  FullProjects: Array<IProjects>
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  await loadDB()
  const FullProjects: Array<IProjects> = await Project.find({ category: "Full-Stack" })

  res.status(200).json({ FullProjects })
}
