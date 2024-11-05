import { Button } from "components/atoms/button";
import { ActiveComponentProps } from "../../../lib/interfaces";

const Scoreboard = ({ setActiveComponent }: ActiveComponentProps) => {
  return (
    <div className="flex flex-col gap-4 lg:gap-6 items-center justify-center min-h-full text-white">
      <h2 className="text-white font-heading text-5xl">Scoreboard</h2>
      <p className="text-sm max-w-8/10 lg:max-w-96 mx-auto text-center">
        SCORE
      </p>
      <Button
        variant="default"
        className="font-heading tracking-widest uppercase"
        onClick={() => setActiveComponent("quiz")}
      >
        play again
      </Button>
      <Button
        variant="ghost"
        className="font-heading tracking-widest uppercase"
        onClick={() => setActiveComponent("home")}
      >
        go home
      </Button>
    </div>
  );
};

export default Scoreboard;
