// import { Button } from "components/atoms/button";
import { QuizQuestion } from "../../../lib/interfaces";

interface QuizQuestionProps {
  question: QuizQuestion;
}

const QuizSingleQuestion = ({ question }: QuizQuestionProps) => {
  return (
    <div className="flex flex-col gap-4 lg:gap-6 items-center justify-center min-h-full text-white">
      <h3 className="text-white font-heading text-5xl">{question.question}</h3>

      <div className="">
        {question.answers.map((answer: string, index: number) => (
          <button
            key={index}
            // onClick={() => handleClick(answer)}
          >
            {answer}
          </button>
        ))}
      </div>

      {/* <Button
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
      </Button> */}
    </div>
  );
};

export default QuizSingleQuestion;
