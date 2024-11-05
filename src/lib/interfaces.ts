export type ActiveComponentType = 'home' | 'quiz' | 'details';

export interface ActiveComponentProps {
  setActiveComponent: (component: ActiveComponentType) => void;
}

export type QuizQuestion = {
  question: string;
  correctAnswer: number;
  answers: string[];
};

export interface UserState {
  name: string;
  score: number;
  isFinalScore: boolean;
}
