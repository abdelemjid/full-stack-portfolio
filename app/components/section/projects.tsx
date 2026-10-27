import Project, { ProjectType } from "../ui/project";
import SectionHeading from "../ui/section-heading";

const projects: ProjectType[] = [
  {
    id: "1",
    title: "Clothing Store",
    status: "live",
    link: "https://google.com",
    language: "TypeScript",
    image:
      "https://cdn.dribbble.com/userupload/9000437/file/original-05ce7878ecc282d0bdbc476f002b6087.png",
    technologies: ["React.js", "Next.js", "TailwindCss", "TypeScript"],
  },
  {
    id: "2",
    title: "Clothing Store",
    status: "live",
    link: "https://google.com",
    language: "TypeScript",
    image:
      "https://cdn.dribbble.com/userupload/9000437/file/original-05ce7878ecc282d0bdbc476f002b6087.png",
    technologies: ["React.js", "Next.js", "TailwindCss", "TypeScript"],
  },
  {
    id: "3",
    title: "Clothing Store",
    status: "live",
    link: "https://google.com",
    language: "TypeScript",
    image:
      "https://cdn.dribbble.com/userupload/9000437/file/original-05ce7878ecc282d0bdbc476f002b6087.png",
    technologies: ["React.js", "Next.js", "TailwindCss", "TypeScript"],
  },
  {
    id: "4",
    title: "Clothing Store",
    status: "live",
    link: "https://google.com",
    language: "TypeScript",
    image:
      "https://cdn.dribbble.com/userupload/9000437/file/original-05ce7878ecc282d0bdbc476f002b6087.png",
    technologies: ["React.js", "Next.js", "TailwindCss", "TypeScript"],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="mt-25 px-4 sm:px-6 md:px-8 lg:px-12">
      {/* heading */}
      <SectionHeading index={4} title="Project Deployments" />

      {/* content */}
      <div className="grid grid-cols-[repeat(auto-fill,minmax(400px,1fr))] gap-5 mt-15">
        {projects.map((project, index) => (
          <Project key={project.id} project={project} index={index} />
        ))}
      </div>
    </section>
  );
}
