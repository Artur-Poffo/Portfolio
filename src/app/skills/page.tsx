import { DefaultListItems } from "@/components/UI/DefaultListItems";
import { PageHeader } from "@/components/UI/PageHeader";
import { PageWrapper } from "@/components/UI/PageWrapper";
import { SkillCard } from "@/components/UI/SkillCard";
import { ISkill } from "@/interfaces/ISkill";
import { getClient } from "@/lib/apollo";
import { gql } from "@apollo/client";

export const dynamic = "force-dynamic"

const query = gql`
  query {
    skills(first: 100) {
      id,
      name,
      description,
      skillImage {
        url
      }
    }
  }
`

interface queryResponse {
  skills: ISkill[]
}

export default async function Skills() {
  const { data } = await getClient().query<queryResponse>({
    query,
  });

  return (
    <PageWrapper>
      <div className="flex flex-col gap-4 items-center" >
        <PageHeader title="Habilidades" />

        <div className="px-4" >
          <DefaultListItems>
            {data.skills.map((skill: ISkill) => {
              return (
                <SkillCard
                  key={skill.name}
                  name={skill.name}
                  content={skill.description}
                  imageUrl={skill.skillImage.url}
                />
              )
            })}
          </DefaultListItems>
        </div>
      </div>
    </PageWrapper>
  )
}