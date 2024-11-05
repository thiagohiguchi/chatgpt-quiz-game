export const NUM_QUESTIONS: number = 2;

export const NUM_ANSWERS: number = 10;

export const TIME_TO_ANSWER_IN_MS: number = 15000;

export const THEMES: string[] = [
  'nature',
  'science',
  'countries',
  'movies',
  'curiosity',
  'planets',
  'foods',
  'interesting facts',
  'fun facts',
];

export const PROMPT: string = `
The questionnaire must have ${NUM_QUESTIONS} questions, along with ${NUM_ANSWERS} answer choices for each question. 
Only return the array in the response with no additional text, explanation, or formatting.
Make sure the entire response is a valid JSON array, formatted with double quotes for keys and string values. 
Format the response as:

[{
  "question": string,
  "correctAnswer": 0 | 1 | 2 | 3,
  "answers": [string, string, string, string],
}]

Only one of the answers should be correct. Make the question general and suitable for all ages.
Generate a random trivia questionnaire with the following themes:
`;


