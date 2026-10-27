import { MdOutlineTerminal } from "react-icons/md";
import Button from "../ui/button";
import { FileText } from "lucide-react";
import HeroTerminal from "../ui/terminal";
import Link from "next/link";

export default function HeroSection() {
  return (
    <div className="mt-10 px-4 sm:px-6 md:px-8 lg:px-12">
      <div className="flex flex-col md:flex-row gap-10 justify-between">
        {/* content */}
        <div className="flex flex-col gap-8">
          {/* subtitle */}
          <div className="w-fit flex flex-row gap-3 items-center text-tertiary/80 text-xs border border-tertiary/80 bg-tertiary/10 px-3 py-0.5 rounded-sm">
            <MdOutlineTerminal size={18} />
            <p>
              {"["}0X0061{"]"} {"//"} FULL-STACK DEVELOPER BASED IN MOROCCO AT
              ALX-AFRICA
            </p>
          </div>

          {/* title */}
          <p className="text-5xl">
            Full-Stack <span className="text-tertiary">Next.js</span>
            <br /> Developer
          </p>

          {/* text */}
          <p className="max-w-4xl text-muted text-lg">
            Forged through the intensive low-level rigor of the ALX Software
            Engineering program. Bridging C memory control, distributed
            microservice design, and modern reactive front-ends to deploy
            resilient high-scale web systems.
          </p>

          {/* statistics */}
          <div className="border-t border-b border-muted/30 py-2">
            <div className="flex flex-row justify-between items-center">
              {/* years */}
              <div className="">
                <h3 className="text-lg text-tertiary">2+ Yrs</h3>
                <p className="text-xs text-muted">PRODUCTION CRAFT</p>
              </div>
              {/* ships */}
              <div className="">
                <h3 className="text-lg text-secondary">5+ Ships</h3>
                <p className="text-xs text-muted">LIVE DEPLOYMENT</p>
              </div>
              {/* technologies */}
              <div className="">
                <h3 className="text-lg text-primary">8+ Techs</h3>
                <p className="text-xs text-muted">LEARNED TECHS</p>
              </div>
            </div>
          </div>

          {/* buttons */}
          <div className="mt-8 flex flex-row gap-3">
            <Button Icon={MdOutlineTerminal}>
              <Link href="#projects">Explore Projects</Link>
            </Button>
            <Button style="muted" Icon={FileText}>
              Download CV / Resume
            </Button>
          </div>
        </div>
        {/* terminal */}
        <div className="">
          <HeroTerminal />
        </div>
      </div>
    </div>
  );
}
