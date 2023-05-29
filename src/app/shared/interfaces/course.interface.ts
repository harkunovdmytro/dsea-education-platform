export interface ICourse {
  id: number;
  name: string;
  managers: number[];
  groups: number[];
  tests: number[];
  openingDate: string;
  creationDate: string;
  closingDate: string;
}

export interface ICourseDto {
  id: number;
  name: string;
  managers: number[];
  groups: number[];
  tests: number[];
  openingDate: string;
  creationDate: string;
  closingDate: string;
}
