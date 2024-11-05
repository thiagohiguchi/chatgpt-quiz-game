export const NUM_QUESTIONS = 10;

export const NUM_ANSWERS = 4;

export const TIME_TO_ANSWER_IN_MS = 15000;

export const THEMES = ` nature, science, countries, movies, curiosity, planets, foods, simple math, and fun facts`;

export const PROMPT = `Generate a random trivia questionnaire with the following themes ${THEMES}.
The questionnaire must have ${NUM_QUESTIONS} questions, along with ${NUM_ANSWERS} answer choices for each question. 
Only return the array in the response with no additional text, explanation, or formatting.
Make sure the entire response is a valid JSON array, formatted with double quotes for keys and string values. 
Format the response as:

[{
  "question": string,
  "correctAnswer": 0 | 1 | 2 | 3,
  "answers": [string, string, string, string],
}]

Only one of the answers should be correct. Make the question general and suitable for all ages.`;
