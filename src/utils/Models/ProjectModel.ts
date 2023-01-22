import { Schema, model, models } from 'mongoose'
import IProjects from '@/interfaces/IProjects'

const ProjectSchema = new Schema<IProjects>({
  name: { type: String, required: true },
  desc: { type: String, required: true },
  content: { type: String, required: true },
  image: { type: String, required: true },
  techs: { type: [String], required: true }
})

const Project = models.projects || model<IProjects>('projects', ProjectSchema)

export default Project