interface Props {
  index: number;
  title: string;
}

export default function SectionHeading({ index, title }: Props) {
  return (
    <div className="flex flex-row gap-3 items-center">
      {/* heading */}
      <div className="flex flex-row gap-1 items-center">
        <p className="text-sm text-primary">
          {index < 10 ? `0${index}.` : `${index}.`}
        </p>
        <h2 className="text-2xl text-foreground text-nowrap">{title}</h2>
      </div>

      {/* border */}
      <div className="w-full h-px bg-gray-700" />
    </div>
  );
}
