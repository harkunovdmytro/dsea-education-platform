import { IFaculty } from './faculty.interface';
import { IDepartmentDto } from './department.interface';

export interface IGroupDto {
  id: number;
  name: string;
  shortName: string;
  departmentId: number;
  facultyId: number;
  creationDate: string;
  closingDate: string;
}

export type IGroupForView = {
  faculty: IFaculty;
  facultyGroups: number;
  departments: {
    department: IDepartmentDto,
    groups: IGroupDto[]
  }[]
}[];
