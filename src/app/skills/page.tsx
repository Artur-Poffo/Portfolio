import { DefaultListItems } from "@/components/UI/DefaultListItems";
import { PageHeader } from "@/components/UI/PageHeader";
import { PageWrapper } from "@/components/UI/PageWrapper";
import { SkillCard } from "@/components/UI/SkillCard";
import { ISkill } from "@/interfaces/ISkill";
import { hygraph } from "@/lib/graphql-request";

export const dynamic = "force-dynamic"

interface queryResponse {
  skills: ISkill[]
}

async function getSkills() {
  const { skills } = await hygraph.request<queryResponse>(
    `query {
      skills(first: 100) {
        id,
        name,
        description,
        skillImage {
          url
        }
      }
    }`
  )

  return skills
}

export default async function Skills() {
  const skills = await getSkills()

  return (
    <PageWrapper>
      <div className="flex flex-col gap-4 items-center" >
        <PageHeader title="Habilidades" />

        <div className="px-4" >
          <DefaultListItems>
            {skills.map((skill) => {
              return (
                <li key={skill.id} className="w-full md:w-auto" >
                  <SkillCard
                    name={skill.name}
                    content={skill.description}
                    imageUrl={skill.skillImage.url}
                  />
                </li>
              )
            })}
          </DefaultListItems>
        </div>
      </div>
    </PageWrapper >
  )
}