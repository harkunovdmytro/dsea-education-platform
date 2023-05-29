export enum QuestionType {
  textAnswer = 0,
  onlyAnswer = 1,
  multipleAnswers = 2
}

export interface IQuestion {
  id: number;
  questionType: QuestionType;
  title: string;
  content: string;
  answersIds: number[];
  answerId: number;
}
