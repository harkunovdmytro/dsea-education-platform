import { UserTypes } from '../constants/user-types.constant';

export interface IUser {
  uuid: number;
  userType: UserTypes,
  name: string;
  fathersName: string;
  lastName: string;
  email: string;
  password: string;
  coursesIds: number[];
  groupId: number | null;
}

export interface IUserDto {
  uuid: number;
  userType: number,
  name: string;
  fathersName: string;
  lastName: string;
  email: string;
  password: string;
  coursesIds: number[];
  groupId: number | null;
  facultyId: number | null;
  departmentId: number | null;
}

export interface IUsersForView {

};
