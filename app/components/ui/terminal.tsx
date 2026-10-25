interface CommandProps {
  command: string;
  result?: React.ReactNode;
  background?: boolean;
}

function TerminalCommand({
  command,
  result,
  background = false,
}: CommandProps) {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex flex-row gap-2 items-center text-xs">
        {/* shell user */}
        <p className="text-secondary">
          guest@web-shell<span className="text-foreground">:</span>
          <span className="text-tertiary">~</span>
          <span className="text-gray-300">$</span>
        </p>
        {/* command */}
        <p className="text-gray-300">{command}</p>
      </div>

      <div
        className={`text-gray-300 ${background ? "bg-gray-500/20 rounded-md py-2 pl-5 pr-3" : "pl-5"}`}
      >
        {result}
      </div>
    </div>
  );
}

export default function HeroTerminal() {
  return (
    <div className="min-w-sm max-w-lg">
      <div className="flex flex-col justify-between rounded-md border-2 border-gray-800 bg-background/80 backdrop-blur-lg">
        {/* head */}
        <div className="flex flex-row justify-between items-center bg-gray-800/80 px-4 py-3">
          {/* terminal buttons */}
          <div className="flex flex-row gap-2">
            <div className="w-3 h-3 rounded-full bg-red-300" />
            <div className="w-3 h-3 rounded-full bg-green-300" />
            <div className="w-3 h-3 rounded-full bg-gray-300" />
          </div>

          {/* terminal title */}
          <p className="text-xs text-muted">bash -- 0x0061@alx-station: ~</p>

          {/* terminal status */}
          <p className="text-xs text-tertiary">READY</p>
        </div>
        {/* commands */}
        <div className="flex flex-col gap-2 p-5">
          <TerminalCommand
            command="whoami"
            result={
              <p className="text-xs">
                &gt;<span className="text-tertiary mx-2">0x0061</span>
                {"("}ALX Software Engineering Alum {"//"} Full-Stack Distributed
                {")"}
              </p>
            }
          />
          <TerminalCommand
            command="uname -a"
            result={
              <p className="text-xs">
                &gt;
                <span className="mx-1" />
                Linux 6.8.0-alx-kernel x86_64 SMP GNU/Linux {"("}
                Peer-Driven Mastery{")"}
              </p>
            }
          />
          <TerminalCommand
            background
            command="cat << 'STATS'"
            result={
              <div className="flex flex-col gap-1">
                <div className="flex flex-row justify-between items-center">
                  <p className="text-xs text-muted">Core Spec:</p>
                  <p className="text-xs text-tertiary">
                    Microservices & Systems
                  </p>
                </div>
                <div className="flex flex-row justify-between items-center">
                  <p className="text-xs text-muted">Rooted In:</p>
                  <p className="text-xs text-secondary">C, Unix, Algorithms</p>
                </div>
                <div className="flex flex-row justify-between items-center">
                  <p className="text-xs text-muted">Deployment Engine:</p>
                  <p className="text-xs text-tertiary">Docker / K8s / AWS</p>
                </div>
                <div className="flex flex-row justify-between items-center">
                  <p className="text-xs text-muted">Availability:</p>
                  <p className="text-xs text-secondary">
                    Open to Develop web applications
                  </p>
                </div>
              </div>
            }
          />
          <TerminalCommand command="_" />
        </div>
        {/* footer */}
        <div className="flex flex-row justify-between items-center bg-gray-800/80 px-4 py-2">
          {/* status */}
          <div className="flex flex-row gap-2 items-center">
            {/* execution status button */}
            <div className="w-2 h-2 rounded-full bg-secondary" />
            {/* execution status */}
            <div className="flex flex-row gap-1 justify-between items-center">
              <p className="text-xs text-muted">0 errors</p>
              <div className="h-3 w-px bg-muted" />
              <p className="text-xs text-muted">0 warnings</p>
            </div>
          </div>

          {/* terminal mode */}
          <p className="text-xs text-tertiary">UTF-8 // TCP ESTABLISHED</p>
        </div>
      </div>
    </div>
  );
}
