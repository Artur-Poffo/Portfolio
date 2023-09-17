import { FlashyLink } from "@/components/Navigation/FlashyLink";
import { DefaultListItems } from "@/components/UI/DefaultListItems";
import { SectionTitle } from "@/components/UI/SectionTitle";
import { SkillCard } from "@/components/UI/SkillCard";
import { ISkill } from "@/interfaces/ISkill";
import { getClient } from "@/lib/apollo";
import { gql } from "@apollo/client";

export const dynamic = "force-dynamic"

const query = gql`
  query {
    skills(
      orderBy: createdAt_DESC
      first: 5
    ) {
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

export async function SkillsSection() {
  const { data } = await getClient().query<queryResponse>({
    query,
  });

  return (
    <section id="skills" className="px-4 mb-24">
      <header className="my-4 text-center" >
        <SectionTitle title="Habilidades" description="Nessa seção veja meus principais conhecimentos e habilidades" />
      </header>

      <div className="flex flex-col items-center gap-20 mt-12" >
        <DefaultListItems>
          {data.skills.map((skill) => {
            return (
              <li key={skill.id} >
                <SkillCard
                  name={skill.name}
                  content={skill.description}
                  imageUrl={skill.skillImage.url}
                />
              </li>
            )
          })}
        </DefaultListItems>

        <FlashyLink text="Ver mais habilidades" to="/skills" />
      </div>
    </section>
  )
}