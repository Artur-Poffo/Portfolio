import { Schema, model, models } from 'mongoose'
import ISkill from '@/interfaces/ISkills'

const SkillSchema = new Schema<ISkill>({
  name: { type: String, required: true },
  desc: { type: String, required: true }
})

const Skill = models.skills || model<ISkill>('skills', SkillSchema)

export default Skill