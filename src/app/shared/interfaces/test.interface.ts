export interface ITest {
  id: number;
  name: string;
  lessonId: number;
  courseId: number;
  questionsIds: number[];
  openingDate: string;
  creationDate: string;
  closingDate: string;
}
