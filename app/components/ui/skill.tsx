interface Props {
  title: string;
  color: string;
  progress: number;
}

export default function Skill({ title, color, progress }: Props) {
  return (
    <div>
      {/* heading & progress number */}
      <div className="flex flex-row justify-between items-center gap-2 text-xs">
        {/* heading */}
        <p className="text-foreground/80">{title}</p>
        {/* progress number */}
        <p className={`text-${color}`}>{progress}%</p>
      </div>

      {/* progress */}
      <div className="relative h-1.5 mt-1 rounded-full overflow-hidden bg-muted">
        <div
          className={`absolute top-0 left-0 h-full bg-${color}`}
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
}
