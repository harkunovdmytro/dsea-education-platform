import { IFaculty } from './faculty.interface';

export interface IDepartmentDto {
  id: number;
  name: string;
  shortName: string;
  facultyId: number;
}

export interface IDepartment {
  id: number;
  name: string;
  shortName: string;
  faculty: IFaculty;
}
