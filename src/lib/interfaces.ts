export type ActiveComponentType = 'home' | 'quiz';

export interface ActiveComponentProps {
  setActiveComponent: (component: ActiveComponentType) => void;
}

export type QuizQuestion = {
  question: string;
  correctAnswer: 0 | 1 | 2 | 3;
  answers: [string, string, string, string];
}
