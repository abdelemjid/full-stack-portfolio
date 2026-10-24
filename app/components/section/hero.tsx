import { MdOutlineTerminal } from "react-icons/md";

export default function HeroSection() {
  return (
    <div className="px-5 mt-10 md:px-8 lg:px-10 mx-auto max-w-7xl">
      <div className="flex flex-row md:flex-col gap-5 items-center">
        {/* content */}
        <div className="flex flex-col gap-8">
          {/* subtitle */}
          <div className="w-fit flex flex-row gap-3 items-center text-tertiary/80 text-xs border border-tertiary/80 bg-tertiary/10 px-3 py-0.5 rounded-sm">
            <MdOutlineTerminal size={18} />
            <p>
              &#91;0X0061&#93; &#47;&#47; FULL-STACK DEVELOPER BASED IN MOROCCO
              AT ALX-AFRICA
            </p>
          </div>

          {/* title */}
          <p className="text-5xl">
            Full-Stack <span className="text-tertiary">Next.js</span>
            <br /> Developer
          </p>

          {/* text */}
          <p className="max-w-lg text-muted text-lg">
            Forged through the intensive low-level rigor of the ALX Software
            Engineering program. Bridging C memory control, distributed
            microservice design, and modern reactive front-ends to deploy
            resilient high-scale web systems.
          </p>
        </div>
        {/* terminal */}
        <div className="flex-1"></div>
      </div>
    </div>
  );
}
