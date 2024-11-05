import React, { useState, useEffect } from "react";
import { QuizQuestion } from "../../../lib/interfaces";
import { Progress } from "@/components/atoms/progress";
import { cn } from "@/lib/utils";
import { useUser } from "../../../contexts/userContext"; // Adjust the path as necessary

interface QuizQuestionsProps {
  questions: QuizQuestion[];
}

const QuizQuestions = ({ questions }: QuizQuestionsProps) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userScore, setUserScore] = useState<number>(0);
  const [timeLeft, setTimeLeft] = useState<number>(15000); // Timer starts at 30 seconds (15000 ms)
  const [showingFeedback, setShowingFeedback] = useState<boolean>(false); // Feedback display
  const [feedbackResult, setFeedbackResult] = useState<boolean>(false); // Feedback resut
  const { setUser } = useUser();
  const currentQuestion = questions[currentQuestionIndex];

  const handleAnswer = (answerIndex: number) => {
    if (answerIndex === currentQuestion.correctAnswer) {
      setFeedbackResult(true);
      // Points gained: 1000 + total of ms left in the clock
      setUserScore(userScore + 1000 + Math.floor(timeLeft / 10)); // Remove the last digit from ms leftto keep it more pleasing
    } else {
      setFeedbackResult(false);
    }

    // Set feedback mode to true, which pauses the timer
    setShowingFeedback(true);

    // If is last show scoreboard
    // if (currentQuestionIndex === questions.length - 1) {
    //   console.log("foi");
    //   moveToNextQuestion();
    // }

    // Show feedback for 2 seconds, then move to the next question
    setTimeout(() => {
      setShowingFeedback(false);
      moveToNextQuestion();
    }, 2000);
  };

  const moveToNextQuestion = () => {
    setTimeLeft(15000); // Reset timer for the next question

    if (currentQuestionIndex + 1 < questions.length) {
      console.log("move");
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      console.log("Quiz finished! Final score:", userScore);
      setUser((prevUser) => ({
        ...prevUser,
        name: "bayyaya",
        score: userScore,
      }));

      // Additional end-of-quiz logic can go here
    }
  };

  // Countdown timer effect
  useEffect(() => {
    // If showing feedback, skip the timer countdown
    if (showingFeedback) return;

    const intervalId = setInterval(() => {
      setTimeLeft((prevTimeLeft) => {
        if (prevTimeLeft > 0) return prevTimeLeft - 100;
        moveToNextQuestion();
        return 0;
      });
    }, 100);

    // Clear interval on component unmount or when timeLeft changes
    return () => clearInterval(intervalId);
  }, [currentQuestionIndex, showingFeedback]);

  return (
    <div className="pt-16 lg:pt-0">
      {/* Timer and Progress Bar */}
      <div className="fixed top-0 left-0 w-full font-heading bg-black">
        <div className="layout">
          <div className="">
            <Progress value={100 - (timeLeft / 15000) * 100} />
          </div>
          <div className="flex flex-row justify-between py-2 text-white text-lg">
            <div className="">
              {currentQuestionIndex + 1}/{questions.length}
            </div>
            <div className="">{userScore} points</div>
          </div>
        </div>
      </div>

      {/* Question */}
      <h3 className="text-white font-heading text-3xl md:text-5xl">
        {currentQuestion.question}
      </h3>

      {/* Answer Buttons */}
      <div className="flex flex-col gap-4 mt-6">
        {currentQuestion.answers.map((answer: string, index: number) => (
          <button
            className={cn(
              "rounded p-2 border border-primary",
              "hover:bg-primary/50 focus:bg-primary/50",
              "text-white text-xl font-heading text-start",
              showingFeedback === true &&
                index === currentQuestion.correctAnswer &&
                "bg-lime-600/30 border-lime-600",
              showingFeedback === true &&
                index !== currentQuestion.correctAnswer &&
                "bg-red-600/30 border-red-600"
            )}
            onClick={() => handleAnswer(index)}
            key={index}
            disabled={showingFeedback} // Disable buttons during feedback
          >
            {index + 1} - {answer}
          </button>
        ))}
      </div>

      {/* Feedback Indicator */}
      {showingFeedback && (
        <p
          className={cn(
            "text-center mt-5 font-heading text-2xl",
            !feedbackResult && "text-red-600",
            feedbackResult && "text-lime-600"
          )}
        >
          {feedbackResult ? "Correct!" : "Incorrect!"}
        </p>
      )}
    </div>
  );
};

export default QuizQuestions;
