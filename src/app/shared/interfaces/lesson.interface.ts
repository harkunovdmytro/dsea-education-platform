export interface ILesson {
  id: number;
  header: string;
  subject: string;
  content: string;
  tests: number[];
  openingDate: string;
  creationDate: string;
  closingDate: string;
}
