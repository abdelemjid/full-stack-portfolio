import { Code, CodeXml } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export interface ProjectType {
  id: string;
  title: string;
  link?: string;
  githubLink?: string;
  status: "live" | "unlive" | "coming-soon";
  language: string;
  image: string;
  technologies: string[];
}

interface Props {
  index: number;
  project: ProjectType;
}

export default function Project({ project, index }: Props) {
  return (
    <div className="max-w-150 group rounded-md bg-muted/15 overflow-hidden cursor-pointer">
      <div className="flex flex-col gap-2">
        {/* image */}
        <div className="relative max-h-78 w-fit h-fit overflow-hidden">
          <Image
            width={500}
            height={350}
            alt={project.title}
            src={project.image}
            className="bg-cover w-full h-full group-hover:scale-105 transition-all duration-300"
          />

          {/* header */}
          <div className="absolute z-20 top-0 left-0 w-full p-3">
            <div className="flex flex-row justify-between items-center px-3 py-1 rounded-full bg-background/50 backdrop-blur-sm group-hover:-translate-y-12 transition-all duration-300">
              <p className="text-tertiary text-[10px]">
                SYS://PROJECT/{index < 10 ? "0" + index : index}
              </p>
              <p
                className={`text-xs rounded-sm px-1.5 py-0.5 border ${project.status === "live" ? "text-secondary bg-secondary/10 border-secondary/30" : project.status === "unlive" ? "text-red-500 bg-red-500/10 border-red-500/30" : "text-tertiary bg-tertiary/10 border-tertiary/30"}`}
              >
                {project.status}
              </p>
            </div>
          </div>
        </div>

        {/* description */}
        <div className="p-3 flex flex-col gap-3">
          {/* project name */}
          <h2 className="text-foreground text-base">{project.title}</h2>

          {/* project technologies and main language */}
          <div className="flex flex-row gap-2 items-center">
            <p className="text-secondary text-xs">{project.language}</p>

            {project.technologies?.map((tech) => (
              <p
                key={tech}
                className="text-xs text-muted bg-muted/15 px-1.5 py-0.5 rounded-sm"
              >
                {tech}
              </p>
            ))}
          </div>

          {/* hr */}
          <div className="h-px w-full bg-muted/40 mt-2 mb-3" />

          {/* link  */}
          <div className="flex flex-row gap-5 justify-between items-center">
            {/* github */}
            <Link
              href={project.githubLink ?? ""}
              className={`text-sm flex flex-row gap-1 items-center ${project.githubLink ? "text-secondary" : "text-muted"}`}
            >
              <Code size={16} /> Github Source
            </Link>
            {/* live preview */}
            <Link
              href={project.link ?? ""}
              className={`text-sm flex flex-row gap-1 items-center ${project.link ? "text-primary" : "text-muted"}`}
            >
              <CodeXml size={16} /> Live Preview
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
