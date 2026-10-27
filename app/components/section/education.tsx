import Education from "../ui/education";
import SectionHeading from "../ui/section-heading";

const educations = [
  {
    id: "1",
    institution: "Language C & Algorithm",
    matter: "Low Level Programming",
    phase: "3-Months basis",
    period: { from: "2023", to: "2024" },
    description:
      "In this probation phase we learned the low-level programming (C) and how to deal with Github using GUI and Terminal, also some linux skills and Algorithms and Data Structures",
    highlights: ["Git", "Linux Commands", "C", "Algorithm"],
  },
  {
    id: "2",
    institution: "Python & JavaScript",
    matter: "High-Level Programming with Python & JavaScript",
    phase: "3-Months basis",
    period: { from: "2023", to: "2024" },
    description:
      "In this phase we leaned more Data Structures and Algorithms, also the Object-Oriented Programming and Inheritance, and MySQL also the creation of Web Dynamic Pages",
    highlights: ["Git", "Linux Commands", "C", "Algorithm"],
  },
  {
    id: "3",
    institution: "Python & JavaScript",
    matter: "High-Level Programming with Python & JavaScript",
    phase: "3-Months basis",
    period: { from: "2023", to: "2024" },
    description:
      "In this phase we leaned more Data Structures and Algorithms, also the Object-Oriented Programming and Inheritance, and MySQL also the creation of Web Dynamic Pages",
    highlights: ["Git", "Linux Commands", "C", "Algorithm"],
  },
  {
    id: "4",
    institution: "Python & JavaScript",
    matter: "High-Level Programming with Python & JavaScript",
    phase: "3-Months basis",
    period: { from: "2023", to: "2024" },
    description:
      "In this phase we leaned more Data Structures and Algorithms, also the Object-Oriented Programming and Inheritance, and MySQL also the creation of Web Dynamic Pages",
    highlights: ["Git", "Linux Commands", "C", "Algorithm"],
  },
  {
    id: "5",
    institution: "Python & JavaScript",
    matter: "High-Level Programming with Python & JavaScript",
    phase: "3-Months basis",
    period: { from: "2023", to: "2024" },
    description:
      "In this phase we leaned more Data Structures and Algorithms, also the Object-Oriented Programming and Inheritance, and MySQL also the creation of Web Dynamic Pages",
    highlights: ["Git", "Linux Commands", "C", "Algorithm"],
  },
  {
    id: "6",
    institution: "Python & JavaScript",
    matter: "High-Level Programming with Python & JavaScript",
    phase: "3-Months basis",
    period: { from: "2023", to: "2024" },
    description:
      "In this phase we leaned more Data Structures and Algorithms, also the Object-Oriented Programming and Inheritance, and MySQL also the creation of Web Dynamic Pages",
    highlights: ["Git", "Linux Commands", "C", "Algorithm"],
  },
];

export default function EducationTimeline() {
  return (
    <section id="education" className="mt-25 px-4 sm:px-6 md:px-8 lg:px-12">
      {/* heading */}
      <SectionHeading index={3} title="Education Timeline" />

      {/* content */}
      <div className="mt-15">
        <Education items={educations} />
      </div>
    </section>
  );
}
