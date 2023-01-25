export default interface IProjects {
  _id: string
  name: string
  desc: string
  content: string
  image: string
  techs: Array<String>
  category: string
  RepoLink?: string
  VisitLink?: string
  __v: number
}