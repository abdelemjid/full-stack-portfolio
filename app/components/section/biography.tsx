import Image from "next/image";
import SectionHeading from "../ui/section-heading";
import { FaUserGear } from "react-icons/fa6";
import { GraphStar, Zap } from "lucide-react";

export default function Biography() {
  return (
    <section id="about" className="mt-25 px-4 sm:px-6 md:px-8 lg:px-12">
      {/* heading */}
      <SectionHeading index={1} title="Biography & Engineering Core" />

      {/* content */}
      <div className="flex flex-col lg:flex-row gap-20 mt-15">
        {/* image */}
        <div className="relative w-75 h-75">
          {/* corners */}
          <div className="absolute -top-5 -left-5 w-10 h-10 border-t-2 border-l-2 border-primary/60" />
          <div className="absolute -bottom-5 -right-5 w-10 h-10 border-r-2 border-b-2 border-primary/60" />
          <div className="absolute -top-5 -right-5 w-6 h-6 border-t-2 border-r-2 border-secondary/60" />
          <div className="absolute -bottom-5 -left-5 w-6 h-6 border-l-2 border-b-2 border-secondary/60" />

          <Image
            className="rounded-xl"
            src="/me.jpg"
            alt="Me"
            width={300}
            height={300}
          />

          <div className="absolute bottom-5 left-0 w-full">
            <div className="w-[95%] mx-auto flex flex-row justify-between items-center flex-wrap p-2 bg-background/80 backdrop-blur-sm rounded-md">
              <div className="flex flex-row gap-1 items-center">
                <div className="w-3 h-3 rounded-full bg-secondary" />
                <p className="text-foreground text-xs text-nowrap">
                  Verified ALX Graduate
                </p>
              </div>

              <p className="text-xs text-primary text-nowrap">
                COHORT 13 of #2024
              </p>
            </div>
          </div>
        </div>

        {/* biography text */}
        <div className="flex flex-col gap-4 text-muted text-lg max-w-2xl">
          <p>
            I am a specialized back-end software developer calibrated by the
            intense, project-based furnace of the in partnership with Holberton
            School. In a cohort driven by rigorous peer reviews and absolute
            code accountability, I mastered web development from pure C memory
            allocation and Linux command line through to Python with Flask and
            Node.js with Express.js.
          </p>
          <p>
            My journey is rooted in pan-African software engineering
            excellence—building robust, reliable web applications with React.js
            and now I am taking my time for learning Next.js. I write code that
            honors system performance and human end-users alike.
          </p>

          {/* cards */}
          <div className="flex flex-row gap-4 flex-wrap">
            <div className="w-50 h-50 rounded-md bg-muted/10 p-5 space-y-3">
              <div className="w-fit h-fit bg-tertiary/15 p-1 rounded-sm text-tertiary border border-tertiary/50">
                <FaUserGear size={18} />
              </div>

              <h3 className="text-xl text-foreground">Engineering Empathy</h3>

              <p className="text-xs text-muted">
                Writing clean, self-documenting code built for human maintainers
                and intuitive interfaces
              </p>
            </div>

            <div className="w-50 h-50 rounded-md bg-muted/10 p-5 space-y-3">
              <div className="w-fit h-fit bg-secondary/15 p-1 rounded-sm text-secondary border border-secondary/50">
                <GraphStar size={18} />
              </div>

              <h3 className="text-xl text-foreground">Scalable Applications</h3>

              <p className="text-xs text-muted">
                Build clean, reliable and scalable web applications.
              </p>
            </div>

            <div className="w-50 h-50 rounded-md bg-muted/10 p-5 space-y-3">
              <div className="w-fit h-fit bg-primary/15 p-1 rounded-sm text-primary border border-primary/50">
                <Zap size={18} />
              </div>

              <h3 className="text-xl text-foreground">Relentless Grit</h3>

              <p className="text-xs text-muted">
                Tackling ambiguous edgecases and performance bottlenecks with
                deep debugging rigor.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
