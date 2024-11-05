export type ActiveComponentType = 'home' | 'quiz'| 'details';

export interface ActiveComponentProps {
  setActiveComponent: (component: ActiveComponentType) => void;
}

export type QuizQuestion = {
  question: string;
  correctAnswer: 0 | 1 | 2 | 3;
  answers: [string, string, string, string];
}

export interface UserState {
  name: string;
  score: number;
  isFinalScore: boolean;
}