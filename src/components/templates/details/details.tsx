import { Button } from "components/atoms/button";
import { ActiveComponentProps } from "../../../lib/interfaces";

const Details = ({ setActiveComponent }: ActiveComponentProps) => {
  return (
    <div className="flex flex-col gap-4 lg:gap-6 items-center justify-center min-h-full text-white">
      <h1 className="text-white font-heading text-5xl">How the game works</h1>
      <div className="text-sm max-w-8/10 mx-auto text-center">
        <p>There will be a total of ten questions.</p>
        <p>
          Each question will present four alternatives, only a single one is
          correct.
        </p>
        <p>You have 15 seconds for each question.</p>
        <p>
          There will be a progress bar on the top of the screen showing the time
          left.
        </p>
        <p>You cannot move to previous questions</p>
        <p>Your score will be higher if you respond faster and correctly.</p>
        <p>
          If you are not sure about an answer, take a guess and move forward.
        </p>
      </div>

      <h1 className="text-white font-heading text-xl">Are you ready?</h1>

      <Button
        variant="default"
        className="font-heading tracking-widest uppercase"
        onClick={() => setActiveComponent("quiz")}
      >
        start now!
      </Button>
    </div>
  );
};

export default Details;
