import { SectionTitle } from "@/components/UI/SectionTitle";
import { ResourceGroup } from "@/components/UI/ResourceGroup";
import { ContactSection } from "@/sections/Contact";
import { Project } from "@/interfaces/Project";

interface ProjectsGroupedByResourceGroup {
  [resourceGroupName: string]: Project[];
}

const projects: ProjectsGroupedByResourceGroup = {
  "Front End": [
    {
      name: "E-commerce Website",
      description: "A modern e-commerce platform built with React and Next.js",
      icon: "/projects/ecommerce.png",
      links: [],
    },
    {
      name: "Social Media Dashboard",
      description:
        "Real-time social media analytics dashboard using React and D3.js",
      icon: "/projects/dashboard.png",
      links: [],
    },
    {
      name: "Portfolio Website",
      description:
        "Personal portfolio website built with Next.js and TailwindCSS",
      icon: "/projects/portfolio.png",
      links: [],
    },
    {
      name: "Task Management App",
      description: "Drag-and-drop task management application using React DnD",
      icon: "/projects/tasks.png",
      links: [],
    },
    {
      name: "Weather Dashboard",
      description: "Weather forecast application using OpenWeather API",
      icon: "/projects/weather.png",
      links: [],
    },
    {
      name: "Recipe Finder",
      description: "Recipe search and filtering application with React",
      icon: "/projects/recipe.png",
      links: [],
    },
    {
      name: "Movie Database",
      description: "Movie information and review platform using TMDB API",
      icon: "/projects/movies.png",
      links: [],
    },
    {
      name: "Chat Application",
      description: "Real-time chat application with React and Socket.io",
      icon: "/projects/chat.png",
      links: [],
    },
    {
      name: "Music Player",
      description: "Web-based music player with playlist management",
      icon: "/projects/music.png",
      links: [],
    },
    {
      name: "Blog Platform",
      description: "Content management system for blogging",
      icon: "/projects/blog.png",
      links: [],
    },
  ],
  "Back End": [
    {
      name: "REST API Service",
      description: "RESTful API built with Node.js and Express",
      icon: "/projects/api.png",
      links: [],
    },
    {
      name: "Authentication System",
      description: "JWT-based authentication service with Node.js",
      icon: "/projects/auth.png",
      links: [],
    },
    {
      name: "Database Manager",
      description: "Database management system with MongoDB",
      icon: "/projects/database.png",
      links: [],
    },
    {
      name: "File Storage Service",
      description: "Cloud storage service with AWS S3 integration",
      icon: "/projects/storage.png",
      links: [],
    },
    {
      name: "Payment Gateway",
      description: "Payment processing service with Stripe integration",
      icon: "/projects/payment.png",
      links: [],
    },
    {
      name: "Email Service",
      description: "Email notification system with SendGrid",
      icon: "/projects/email.png",
      links: [],
    },
    {
      name: "Search Engine",
      description: "Full-text search engine with Elasticsearch",
      icon: "/projects/search.png",
      links: [],
    },
    {
      name: "Message Queue",
      description: "Message broker system with RabbitMQ",
      icon: "/projects/queue.png",
      links: [],
    },
    {
      name: "GraphQL API",
      description: "GraphQL API server with Apollo",
      icon: "/projects/graphql.png",
      links: [],
    },
    {
      name: "Caching Service",
      description: "Redis-based caching system",
      icon: "/projects/cache.png",
      links: [],
    },
  ],
};

export default function Projects() {
  return (
    <>
      <section
        id="all-projects"
        className="max-w-screen-xl mx-auto pt-24 flex flex-col gap-10 px-4"
      >
        <header className="flex flex-col items-center gap-4">
          <SectionTitle label="Projetos" title="Meus Projetos" center />
        </header>

        {Object.entries(projects).map(([resourceGroup, projects]) => (
          <ResourceGroup
            key={resourceGroup}
            groupName={resourceGroup}
            projects={projects}
          />
        ))}
      </section>

      <ContactSection />
    </>
  );
}
