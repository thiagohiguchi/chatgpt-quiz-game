// import OpenAI from "openai";

import { ActiveComponentProps, QuizQuestion } from "../../../lib/interfaces";
import QuizQuestions from "components/organisms/quizQuestions";
import Scoreboard from "components/molecules/scoreboard";

const QuizManager = ({ setActiveComponent }: ActiveComponentProps) => {
  // // Set up your OpenAI API key
  // const openai = new OpenAI({
  //   apiKey:
  //     "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",
  //   dangerouslyAllowBrowser: true,
  // });

  // // Function to generate a themed question with multiple-choice answers
  // async function generateQuestion(theme: string): Promise<string> {
  //   // Update the prompt to include the theme
  //   const prompt = `
  //   Generate a random trivia question with the theme "${theme}" along with 5 answer choices. Format the response as:

  //   Question: <question text>
  //   A. <Answer 1>
  //   B. <Answer 2>
  //   C. <Answer 3>
  //   D. <Answer 4>
  //   E. <Answer 5>

  //   Only one of the answers should be correct. Make the question general and suitable for all ages.
  // `;

  //   try {
  //     const response = await openai.createChatCompletion({
  //       model: "gpt-4",
  //       messages: [{ role: "user", content: prompt }],
  //       max_tokens: 150,
  //       temperature: 0.7,
  //     });

  //     // Extract and return the generated question and answers
  //     const questionAndAnswers = response.data.choices[0].message?.content;
  //     return questionAndAnswers || "No question generated";
  //   } catch (error) {
  //     console.error("Error generating question:", error);
  //     return "Error generating question";
  //   }
  // }

  // // Example usage with a theme
  // generateQuestion("science").then((question) => {
  //   console.log(question);
  // });

  const natureQuestions: QuizQuestion[] = [
    {
      question: "What is the largest mammal in the world?",
      correctAnswer: 0,
      answers: ["Blue Whale", "Elephant", "Giraffe", "Hippopotamus"],
    },
    {
      question: "What process do plants use to convert sunlight into energy?",
      correctAnswer: 1,
      answers: [
        "Respiration",
        "Photosynthesis",
        "Transpiration",
        "Fermentation",
      ],
    },
    {
      question: "Which gas do plants absorb from the atmosphere?",
      correctAnswer: 2,
      answers: ["Oxygen", "Nitrogen", "Carbon Dioxide", "Hydrogen"],
    },
    {
      question: "What is the tallest tree species in the world?",
      correctAnswer: 3,
      answers: ["Redwood", "Pine", "Oak", "Coast Redwood"],
    },
    {
      question: "Which of the following is not a biome?",
      correctAnswer: 0,
      answers: ["Desertification", "Tundra", "Rainforest", "Savanna"],
    },
    {
      question: "What is the primary component of Earth's atmosphere?",
      correctAnswer: 2,
      answers: ["Oxygen", "Nitrogen", "Carbon Dioxide", "Argon"],
    },
    {
      question:
        "Which animal is known for its ability to change color for camouflage?",
      correctAnswer: 2,
      answers: ["Chameleon", "Octopus", "Both A and B", "Cuttlefish"],
    },
    {
      question: "What type of rock is formed from cooled magma?",
      correctAnswer: 0,
      answers: ["Igneous", "Sedimentary", "Metamorphic", "Fossilized"],
    },
    {
      question: "Which ocean is the largest on Earth?",
      correctAnswer: 1,
      answers: [
        "Atlantic Ocean",
        "Pacific Ocean",
        "Indian Ocean",
        "Arctic Ocean",
      ],
    },
    {
      question: "What is the most abundant element in the universe?",
      correctAnswer: 3,
      answers: ["Oxygen", "Carbon", "Iron", "Hydrogen"],
    },
  ];

  return (
    <div className="">
      <QuizQuestions questions={natureQuestions} />
      {/* <Scoreboard /> */}
    </div>
  );
};

export default QuizManager;
