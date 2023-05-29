export interface IAnswer {
  id: number;
  questionId: number;
  answerText: string;
  isCorrect: boolean;
  filePath: string;
  creationDate: string;
}
