import { SectionTitle } from "@/components/UI/SectionTitle";

const skillGroups = [
  {
    title: "Architecture",
    description:
      "Domain modeling, hexagonal architecture, system design trade-offs, maintainability and asynchronous systems.",
    items: [
      "Domain-Driven Design",
      "Clean Architecture",
      "Hexagonal Architecture",
      "System design trade-offs",
      "Event-driven systems",
    ],
  },
  {
    title: "Quality",
    description:
      "Testing strategy, TDD, regression prevention, code review and refactoring discipline.",
    items: ["TDD", "Testing strategy", "Code review", "Regression prevention"],
  },
  {
    title: "Core Stack",
    description:
      "TypeScript-first product engineering across frontend, backend, infrastructure and data modeling.",
    items: [
      "TypeScript",
      "React",
      "Next.js",
      "Node.js",
      "AWS",
      "PostgreSQL",
      "Docker",
    ],
  },
  {
    title: "AI Engineering",
    description:
      "AI-assisted development with explicit context design, review loops and verification practices.",
    items: [
      "AI-assisted development",
      "Agentic coding workflows",
      "Prompting and context design",
      "Review and verification loops",
    ],
  },
];

export function SkillsSection() {
  return (
    <section id="skills" className="section-container flex flex-col gap-12">
      <header className="w-full flex justify-center">
        <SectionTitle label="Skills" title="Engineering Capabilities" center />
      </header>

      <div className="max-w-screen-xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-10">
        {skillGroups.map((group) => (
          <article
            key={group.title}
            className="border-t border-neutrals-700 pt-6 flex flex-col gap-4"
          >
            <div className="flex flex-col gap-2">
              <h3 className="text-2xl font-bold font-mono text-primary">
                {group.title}
              </h3>
              <p className="text-neutrals-300">{group.description}</p>
            </div>

            <ul className="flex flex-wrap gap-2">
              {group.items.map((item) => (
                <li
                  key={item}
                  className="rounded-full border border-primary/40 bg-primary/10 px-3 py-1 text-sm font-mono text-neutrals-200"
                >
                  {item}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
