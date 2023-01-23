import type { NextApiRequest, NextApiResponse } from 'next'
import IProjects from '@/interfaces/IProjects'
import loadDB from '@/utils/db'
import Project from "../../../../utils/Models/ProjectModel"


type Data = {
  info: Array<IProjects>
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  await loadDB()
  const info = await Project.findOne({ _id: req.query.id })

  res.status(200).json({ info })
}
