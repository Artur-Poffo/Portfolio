import Image from "next/image";
import { SectionTitle } from "@/components/UI/SectionTitle";
import { urlFor } from "@/sanity/lib/image";
import { fetchSelectedWorkByExperience } from "@/sanity/queries/fetchSelectedWorkByExperience";

function formatPeriod(startDate: string, endDate?: string) {
  const formatter = new Intl.DateTimeFormat("en-US", {
    month: "short",
    year: "numeric",
  });

  const start = formatter.format(new Date(startDate));
  const end = endDate ? formatter.format(new Date(endDate)) : "Present";

  return `${start} - ${end}`;
}

export async function SelectedWorkSection() {
  const experiences = await fetchSelectedWorkByExperience();
  const groups = experiences.filter(
    (experience) => experience.works.length > 0,
  );

  return (
    <section id="work" className="section-container flex flex-col gap-12">
      <header className="w-full flex justify-center">
        <SectionTitle label="Selected Work" title="Professional Work" center />
      </header>

      <div className="max-w-screen-xl mx-auto w-full flex flex-col gap-14">
        {groups.length === 0 && (
          <div className="mx-auto max-w-2xl border-t border-neutrals-700 pt-6 text-center">
            <p className="text-neutrals-300">
              Selected work entries are being curated in the CMS.
            </p>
          </div>
        )}

        {groups.map((experience) => (
          <article
            key={`${experience.company ?? experience.role}-${experience.startDate}`}
            className="grid grid-cols-1 xl:grid-cols-[280px_1fr] gap-8 border-t border-neutrals-700 pt-8"
          >
            <aside className="flex flex-col gap-4 xl:sticky xl:top-28 xl:self-start">
              <div className="flex items-center gap-4">
                <Image
                  className="w-12 h-12 rounded-md"
                  src={urlFor(experience.logo).url()}
                  alt={experience.company ?? experience.role}
                  width={80}
                  height={80}
                />

                <div>
                  <h3 className="font-bold text-xl">
                    {experience.company ?? experience.role}
                  </h3>
                  <p className="text-sm text-neutrals-400">{experience.role}</p>
                </div>
              </div>

              <span className="text-sm text-neutrals-400">
                {formatPeriod(experience.startDate, experience.endDate)}
              </span>
            </aside>

            <div className="flex flex-col gap-10">
              {experience.works.map((work) => (
                <section key={work.title} className="flex flex-col gap-4">
                  <div className="flex flex-col gap-2">
                    {work.context && (
                      <span className="font-mono text-xs uppercase text-primary">
                        {work.context}
                      </span>
                    )}

                    <h4 className="text-2xl font-bold font-mono">
                      {work.title}
                    </h4>

                    <p className="text-neutrals-300">{work.summary}</p>
                  </div>

                  {work.highlights && work.highlights.length > 0 && (
                    <ul className="list-disc list-inside text-neutrals-300 flex flex-col gap-2">
                      {work.highlights.map((highlight) => (
                        <li key={highlight}>{highlight}</li>
                      ))}
                    </ul>
                  )}

                  {work.technicalFocus && work.technicalFocus.length > 0 && (
                    <ul className="flex flex-wrap gap-2">
                      {work.technicalFocus.map((focus) => (
                        <li
                          key={focus}
                          className="rounded-full border border-neutrals-700 px-3 py-1 text-xs font-mono text-neutrals-300"
                        >
                          {focus}
                        </li>
                      ))}
                    </ul>
                  )}

                  {work.outcome && (
                    <p className="border-l border-primary/60 pl-4 text-sm text-neutrals-300">
                      {work.outcome}
                    </p>
                  )}
                </section>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
