import SectionHeading from "../ui/section-heading";
import SkillContainer from "../ui/skill-container";

const skillData = [
  {
    title: "Frontend Engineering",
    status: "UI/UX",
    color: "primary",
    iconName: "MonitorSmartphone",
    skills: [
      { skillTitle: "React & Next.js (App Router, SSR)", progress: 85 },
      { skillTitle: "TypeScript & Static Typing", progress: 80 },
      { skillTitle: "TailwindCSS & Cyber UI Design", progress: 82 },
      { skillTitle: "Media Queries (Laptop, Tab and Mobile)", progress: 85 },
    ],
  },
  {
    title: "Backend & APIs",
    status: "DISTRIBUTED",
    color: "secondary",
    iconName: "Server",
    skills: [
      { skillTitle: "Python (Flask)", progress: 50 },
      { skillTitle: "Node.js (Express)", progress: 80 },
      { skillTitle: "REST & GraphQL API Integration", progress: 65 },
    ],
  },
  {
    title: "Data & Persistence",
    status: "ACID & CASH",
    color: "primary",
    iconName: "Database",
    skills: [
      { skillTitle: "MySQL", progress: 50 },
      { skillTitle: "MongoDB & Document Store Modeling", progress: 75 },
      { skillTitle: "Redis (Pub/Sub & In-Memory State)", progress: 65 },
    ],
  },
  {
    title: "Cloud & DevOps",
    status: "INFRA",
    color: "secondary",
    iconName: "CloudSync",
    skills: [
      { skillTitle: "Docker & Multi-Stage Containers", progress: 50 },
      { skillTitle: "Github Actions CI/CD Pipelines", progress: 70 },
    ],
  },
];

export default function Skills() {
  return (
    <section title="biography" className="mt-25 px-4 sm:px-6 md:px-8 lg:px-12">
      {/* heading */}
      <SectionHeading index={2} title="Systems & Skill Matrix" />

      {/* content */}
      <div className="grid grid-cols-[repeat(auto-fill,minmax(380px,1fr))] gap-5 mt-15">
        {skillData.map((skillData) => (
          <SkillContainer
            key={skillData.title}
            title={skillData.title}
            status={skillData.status}
            color={skillData.color}
            iconName={skillData.iconName}
            skills={skillData.skills}
          />
        ))}
      </div>
    </section>
  );
}
