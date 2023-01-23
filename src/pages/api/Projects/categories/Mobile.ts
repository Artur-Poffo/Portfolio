import type { NextApiRequest, NextApiResponse } from 'next'
import IProjects from '@/interfaces/IProjects'
import loadDB from '@/utils/db'
import Project from "../../../../utils/Models/ProjectModel"


type Data = {
  MobileProjects: Array<IProjects>
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  await loadDB()
  const MobileProjects: Array<IProjects> = await Project.find({ category: "Mobile" })

  res.status(200).json({ MobileProjects })
}
