import { createAction, props } from '@ngrx/store';
import { IFaculty } from '../shared/interfaces/faculty.interface';
import { IDepartmentDto } from '../shared/interfaces/department.interface';
import { IGroupDto } from '../shared/interfaces/group.interface';
import { IUser, IUserDto } from '../shared/interfaces/user.interface';
import { ICourseDto } from '../shared/interfaces/course.interface';

export const loadData = createAction('[App] Load Data');
export const saveData = createAction('[App] Save Data');

// FACULTIES

export const createFaculty = createAction(
  '[App] Create Faculty',
  props<{ faculty: IFaculty }>(),
);
export const deleteFaculty = createAction(
  '[App] Delete Faculty',
  props<{ id: number }>(),
);
export const editFaculty = createAction(
  '[App] Edit Faculty',
  props<{ faculty: IFaculty }>(),
);

// DEPARTMENTS

export const createDepartment = createAction(
  '[App] Create Department',
  props<{ department: IDepartmentDto }>(),
);
export const deleteDepartment = createAction(
  '[App] Delete Department',
  props<{ id: number }>(),
);
export const editDepartment = createAction(
  '[App] Edit Department',
  props<{ department: IDepartmentDto }>(),
);

// GROUPS

export const createGroup = createAction(
  '[App] Create Group',
  props<{ group: IGroupDto }>(),
);
export const deleteGroup = createAction(
  '[App] Delete Group',
  props<{ id: number }>(),
);
export const editGroup = createAction(
  '[App] Edit Group',
  props<{ group: IGroupDto }>(),
);

// USERS

export const createUser = createAction(
  '[App] Create User',
  props<{ user: IUserDto }>(),
);
export const deleteUser = createAction(
  '[App] Delete User',
  props<{ uuid: number }>(),
);
export const editUser = createAction(
  '[App] Edit User',
  props<{ user: IUserDto }>(),
);

// COURSE

export const createCourse = createAction(
  '[App] Create Course',
  props<{ course: ICourseDto }>(),
);
export const deleteCourse = createAction(
  '[App] Delete Course',
  props<{ id: number }>(),
);
export const editCourse = createAction(
  '[App] Edit Course',
  props<{ course: ICourseDto }>(),
);

// COURSE LESSON

// COURSE LESSON TEST
