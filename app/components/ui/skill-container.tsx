import { icons } from "lucide-react";
import Skill from "./skill";

interface SkillType {
  skillTitle: string;
  progress: number;
}

interface Props {
  skills: SkillType[];
  color: string;
  title: string;
  status: string;
  iconName: string;
}

export default function SkillContainer({
  skills,
  color,
  title,
  status,
  iconName,
}: Props) {
  const Icon = icons[iconName as keyof typeof icons];

  return (
    <div className="flex flex-col gap-4 bg-muted/10 p-4 rounded-md">
      {/* heading */}
      <div className="flex flex-row justify-between items-center">
        {/* icon & title */}
        <div className="flex flex-row gap-1 items-center">
          <Icon size={22} className={`text-${color}`} />
          <h4 className="text-lg text-foreground">{title}</h4>
        </div>

        {/* status */}
        <p
          className={`text-[0.65rem] text-${color} px-1.5 py-0.5 bg-${color}/15 rounded-sm`}
        >
          {status}
        </p>
      </div>

      {/* skills */}
      {skills.map((skill) => (
        <Skill
          key={skill.skillTitle}
          title={skill.skillTitle}
          color={color}
          progress={skill.progress}
        />
      ))}
    </div>
  );
}
