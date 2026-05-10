# PRD v3: Portfolio Refactor

## Summary

Refactor the portfolio from an older, visually loud project showcase into a more senior, minimal, resume-like software engineering portfolio.

The new version should reduce generic sections, remove weak personal project emphasis, and reposition the site around professional judgment, architecture, product engineering, quality practices, and AI-assisted development.

## Current Problems

- The homepage feels too loud and visually intense for the current positioning.
- The skills section is generic, technology-list driven, and does not communicate senior engineering judgment.
- The projects section overweights personal projects with shallow descriptions.
- The CMS model encourages generic resources: `skill`, `project`, and `resourceGroup`.
- Professional experience is underused as the main source of credibility.

## Goals

- Move from "portfolio of projects" to "professional engineering profile".
- Remove CMS dependency for skills.
- Replace projects with `Selected Work`, modeled as professional work tied to a company experience.
- Group selected work by experience for a resume-like presentation.
- Highlight architecture, DDD, TDD, quality, product engineering, and AI-assisted development.
- Keep the design minimal, dense, and mature.
- Preserve Sanity as the source for professional experience and selected work.

## Non-Goals

- Do not add internationalization.
- Do not create case studies with unsupported claims.
- Do not invent metrics or outcomes not validated by the user.
- Do not keep generic project/skill/resource group CMS content.

## Source Material

Public LinkedIn data available for review:

- Profile: `Artur Poffo`
- Location: Blumenau, Santa Catarina, Brazil
- Company context: `Adstart`
- Certifications: Rocketseat Ignite Node.js, Rocketseat Ignite React.js, ProgramadorBr courses

User-provided Adstart summary:

> Full-Stack Software Engineer working on scalable SaaS products for e-commerce operations, with a strong focus on software architecture and clean engineering practices.

Professional context:

- Scalable SaaS products for e-commerce operations
- CRM campaigns
- Customer support for e-commerce operations
- Autonomous AI support features
- Centralized analytics products consolidating e-commerce data into a single ecosystem
- Participation in technical discussions, system modeling, and feature design from day one

Key technical scope:

- Anonymous benchmarking system across the customer base
- Segmentation by revenue range, industry, and AI-generated classifications
- Asynchronous processing pipelines focused on scalability, performance, and large-scale processing
- CRM and messaging features, including customizable campaign flows and omnichannel integrations
- Complete Web Push infrastructure
- Customer support features and autonomous AI workflows
- Integrations with e-commerce and advertising platforms, including TikTok and Pinterest
- CRM campaign product evolution based on user feedback and product analysis
- CRM analytics for dashboard products
- Email channel metrics powered by AWS SES Event Destinations
- Event-driven processing architectures

Daily technologies and practices:

- TypeScript
- Node.js
- React
- AWS
- PostgreSQL
- Docker
- DDD
- TDD
- Clean Architecture
- Asynchronous/event-driven systems

## Information Architecture

Target navigation:

- `Home`
- `About`
- `Skills`
- `Selected Work`
- `Experience`
- `Contact`

Routes:

- `/`
- `/work`

Recommended first implementation:

- Keep homepage sections.
- Replace `ProjectsSection` with `SelectedWorkSection`.
- Remove `/projects` entirely.
- Remove `/skills` entirely.
- Use `/work` as the only standalone route for selected work.

## CMS Changes

### Remove From CMS

Remove schema types:

- `skill`
- `project`
- `resourceGroup`

Remove queries:

- `fetchPinnedSkills`
- `fetchSkillsByGroup`
- `fetchPinnedProjects`
- `fetchProjectsByGroup`

Remove UI components if no longer used:

- `SkillCard`
- `ProjectCard`
- `ResourceGroup`

### Keep In CMS

Keep and improve:

- `experience`
- `ownerInfo`

`experience` remains the source for company context, role, dates, and logo.

### Add To CMS: `selectedWork`

Each `selectedWork` document represents a professional problem, feature, platform improvement, architecture decision, or workflow improvement connected to an experience.

Recommended fields:

```ts
defineField({
  name: "title",
  title: "Title",
  type: "string",
  validation: (rule) => rule.required(),
})

defineField({
  name: "experience",
  title: "Experience",
  type: "reference",
  to: [{ type: "experience" }],
  validation: (rule) => rule.required(),
})

defineField({
  name: "context",
  title: "Context",
  type: "text",
})

defineField({
  name: "summary",
  title: "Summary",
  type: "text",
  validation: (rule) => rule.required(),
})

defineField({
  name: "highlights",
  title: "Highlights",
  type: "array",
  of: [{ type: "string" }],
})

defineField({
  name: "technicalFocus",
  title: "Technical Focus",
  type: "array",
  of: [{ type: "string" }],
})

defineField({
  name: "outcome",
  title: "Outcome",
  type: "text",
})

defineField({
  name: "order",
  title: "Order",
  type: "number",
  initialValue: 0,
})

defineField({
  name: "isFeatured",
  title: "Featured",
  type: "boolean",
  initialValue: true,
})
```

## Query Model

The UI should group selected works by experience.

Recommended GROQ:

```groq
*[_type == "experience"] | order(coalesce(endDate, "9999-12-31") desc, startDate desc) {
  role,
  description,
  logo,
  startDate,
  endDate,
  "works": *[
    _type == "selectedWork" &&
    references(^._id) &&
    isFeatured == true
  ] | order(order asc) {
    title,
    context,
    summary,
    highlights,
    technicalFocus,
    outcome,
    order
  }
}
```

The frontend should filter out experiences with no selected work unless the design intentionally wants to show empty experience groups.

## Selected Work UI

Selected Work should feel closer to a strong resume section than a project gallery.

Recommended structure:

```txt
Adstart
Full-Stack Developer · 2024 - Present

Selected work

AI-assisted product development
Short summary focused on product and engineering impact.
- Highlight
- Highlight
Focus: AI engineering, review loops, product velocity

Architecture and domain modeling
Short summary focused on decisions and maintainability.
- Highlight
- Highlight
Focus: DDD, modular boundaries, maintainability
```

Visual direction:

- Use company logo once per experience group.
- Avoid large image cards.
- Avoid decorative project thumbnails.
- Prefer compact editorial rows, strong typography, and clear hierarchy.
- Make technical focus tags subtle, not badge-heavy.
- Outcomes should be written carefully and only when true.

## Skills Section

Skills should not come from CMS.

Replace generic skills with static senior capability groups:

### Architecture

- Domain-Driven Design
- Modular boundaries
- System design trade-offs
- Maintainability and refactoring

### Quality

- TDD
- Testing strategy
- Regression prevention
- Code review
- Refactoring discipline

### Core Stack

- TypeScript
- React
- Next.js
- Node.js
- AWS
- PostgreSQL
- Docker
- API design
- Database modeling
- Asynchronous/event-driven systems

### AI Engineering

- AI-assisted development
- Agentic coding workflows
- Prompting and context design
- Review and verification loops
- Using AI to increase throughput without lowering engineering standards

### Product Engineering

- Technical decisions with business context
- Delivery trade-offs
- Collaboration with product constraints
- Reducing ambiguity before implementation

UI direction:

- No icon grid.
- No generic cards like "React", "Node", "MongoDB".
- Prefer concise grouped text blocks.
- Make it read like engineering judgment, not a shopping list.

## Experience Section

Keep `ExperienceSection`, but reduce redundancy with Selected Work.

Possible direction:

- Experience section remains a chronological summary.
- Selected Work becomes the detailed proof of impact.
- Experience should not duplicate all selected work highlights.

If the new Selected Work section is strong enough, Experience can become smaller.

## Content Tone

Target voice:

- precise
- calm
- technical
- product-aware
- confident without exaggeration

Avoid:

- "passionate developer" style copy
- generic full-stack phrasing
- buzzword-only AI claims
- inflated metrics
- personal-project overexposure

Preferred phrasing examples:

- "I build product software with attention to architecture, delivery, and long-term maintainability."
- "I use AI as part of my engineering workflow, with explicit review, testing, and verification loops."
- "My focus is turning ambiguous product problems into maintainable software systems."

## Implementation Plan

1. Remove CMS schemas and queries for `skill`, `project`, and `resourceGroup`.
2. Add `selectedWork` schema with required `experience` reference.
3. Update `schemaTypes/index.ts`.
4. Optionally customize `sanity/structure.ts` to show `Experience` and `Selected Work` prominently.
5. Add `fetchSelectedWorkByExperience` query.
6. Remove old Skills CMS dependencies.
7. Replace `SkillsSection` with static senior capability groups.
8. Replace `ProjectsSection` with `SelectedWorkSection`.
9. Add `/work` as the standalone Selected Work route.
10. Remove `/projects` route entirely.
11. Remove `/skills` route entirely.
12. Remove unused UI components and interfaces.
13. Run lint/build.
14. Review content in browser.

## Acceptance Criteria

- No code references remain to `skill`, `project`, or `resourceGroup`.
- `SelectedWorkSection` is powered by Sanity.
- Selected work is grouped by experience.
- Company logo appears at the experience group level.
- Skills are static, senior, and focused on engineering capabilities.
- Personal project gallery is removed.
- `/work` is the standalone selected work route.
- `/projects` is removed.
- `/skills` is removed.
- Homepage still builds and renders.
- `pnpm lint` passes.
- `pnpm build` passes.
- Copy does not make unsupported claims from LinkedIn or CMS.

## Risks

- Public LinkedIn data is incomplete, so selected work content must be user-reviewed.
- Removing project/skill schemas may leave old CMS documents unused but still present in the dataset.
- If Studio users expect old schemas, the change is breaking for content management.
- Removing `/projects` and `/skills` may break external links.

## Open Questions

- What are the actual selected work topics from Adstart that can be publicly described?
- Should outcomes include metrics, or stay qualitative for now?

Resolved decisions:

- Use `/work`.
- Remove `/projects` entirely.
- Remove `/skills` entirely.
- Use `Full-Stack Developer` as the experience role title.

## Technical References

- Sanity schemas: https://www.sanity.io/docs/schema-field-types
- Sanity schema introduction: https://www.sanity.io/docs/apis-and-sdks/introduction-to-schemas
- Sanity GROQ: https://www.sanity.io/docs/content-lake/groq-introduction/
- Next.js route groups: https://nextjs.org/docs/14/app/building-your-application/routing/route-groups
