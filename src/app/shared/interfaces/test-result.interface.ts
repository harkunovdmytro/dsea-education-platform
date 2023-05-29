export interface ITestResult {
  id: number;
  testId: number;
  examineeId: number;
  grade: number;
  answersIds: number[];
  creationDate: string;
}
