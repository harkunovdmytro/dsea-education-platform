import { createReducer, on } from '@ngrx/store';
import { Courses, CurrentUser, Departments, Faculties, Groups, Users } from '../shared/mocked-data/faculties.data';
import { IFaculty } from '../shared/interfaces/faculty.interface';
import { createCourse, createDepartment, createFaculty, createGroup, createUser, deleteCourse, deleteDepartment, deleteFaculty, deleteGroup, deleteUser, editCourse, editDepartment, editFaculty, editGroup, editUser, loadData, saveData } from './actions';
import { IDepartmentDto } from '../shared/interfaces/department.interface';
import { IUserDto } from '../shared/interfaces/user.interface';
import { generateId } from '../shared/utils/id-generator.util';
import { IGroupDto } from '../shared/interfaces/group.interface';
import { ICourseDto } from '../shared/interfaces/course.interface';

export interface IMainReducer {
  currentUser: IUserDto | null;
  faculties: IFaculty[];
  departments: IDepartmentDto[];
  groups: IGroupDto[];
  users: IUserDto[];
  courses: ICourseDto[]
}

export const mainReducerKey = '[App] Main Reducer';

const mainReducerInitialState: IMainReducer = {
  currentUser: CurrentUser,
  faculties: Faculties,
  departments: Departments,
  groups: Groups,
  users: Users,
  courses: Courses,
};

const mainReducerInitialEmptyState: IMainReducer = {
  currentUser: null,
  faculties: [],
  departments: [],
  groups: [],
  users: [],
  courses: []
};

export const mainReducer = createReducer<IMainReducer>(
  mainReducerInitialEmptyState,

  // GENERAL

  on(loadData, (state) => {
    const newState = JSON.parse(localStorage.getItem('dsea-lms-state') as string) as IMainReducer;
    // const newState = null;

    if (!newState) return mainReducerInitialState;
    return newState;
    // return { ...newState, courses: Courses };
    // return state;
  }),
  on(saveData, (state) => {
    localStorage.setItem('dsea-lms-state', JSON.stringify(state));
    return state;
  }),

  // FACULTIES

  on(createFaculty, (state: IMainReducer, { faculty }) => ({
    ...state,
    faculties: [...state.faculties, {
      ...faculty,
      id: generateId(),
    }],
  })),
  on(deleteFaculty, (state, { id }) => {
    const faculties = [...state.faculties];
    const index = faculties.findIndex(f => f.id === id);

    if (!~index) return state;

    faculties.splice(index, 1);

    return { ...state, faculties };
  }),
  on(editFaculty, (state, { faculty }) => {
    const faculties = [...state.faculties];
    const index = state.faculties.findIndex(f => f.id === faculty.id);

    if (!~index) return state;

    faculties[index] = faculty;

    return { ...state, faculties };
  }),

  // DEPARTMENTS

  on(createDepartment, (state: IMainReducer, { department }) => {
    const departmentToAdd: IDepartmentDto = {
      ...department,
      id: generateId(),
    };

    const departments = [...state.departments, departmentToAdd];

    return ({
      ...state,
      departments,
    });
  }),
  on(deleteDepartment, (state, { id }) => {
    const departments = [...state.departments];
    const index = departments.findIndex(d => d.id === id);

    if (!~index) return state;

    departments.splice(index, 1);

    return { ...state, departments };
  }),
  on(editDepartment, (state, { department }) => {
    const departments = [...state.departments];
    const index = departments.findIndex(d => d.id === department.id);

    if (!~index) return state;

    departments[index] = department;

    return { ...state, departments };
  }),

  // GROUPS

  on(createGroup, (state: IMainReducer, { group }) => {
    const groupToAdd: IGroupDto = {
      ...group,
      id: generateId(),
    };

    const groups = [...state.groups, groupToAdd];
    return ({
      ...state,
      groups,
    });
  }),
  on(deleteGroup, (state, { id }) => {
    const groups = [...state.groups];
    const index = groups.findIndex(g => g.id === id);

    if (!~index) return state;

    groups.splice(index, 1);

    return { ...state, groups };
  }),
  on(editGroup, (state, { group }) => {
    const groups = [...state.groups];
    const index = groups.findIndex(f => f.id === group.id);

    if (!~index) return state;

    groups[index] = group;

    return { ...state, groups };
  }),

  // USERS

  on(createUser, (state: IMainReducer, { user }) => {
    const userToAdd: IUserDto = {
      ...user,
      uuid: generateId(),
    };

    const users = [...state.users, userToAdd];
    return ({
      ...state,
      users,
    });
  }),
  on(deleteUser, (state, { uuid }) => {
    const users = [...state.users];
    const index = users.findIndex(u => u.uuid === uuid);

    if (!~index) return state;

    users.splice(index, 1);

    return { ...state, users };
  }),
  on(editUser, (state, { user }) => {
    const users = [...state.users];
    const index = users.findIndex(u => u.uuid === user.uuid);

    if (!~index) return state;

    users[index] = user;

    return { ...state, users };
  }),

  // COURSES

  on(createCourse, (state: IMainReducer, { course }) => {
    const courseToAdd = {
      ...course,
      id: generateId()
    } as ICourseDto;

    const courses = [...state.courses, courseToAdd];
    return ({
      ...state,
      courses,
    });
  }),
  on(deleteCourse, (state, { id }) => {
    const courses = [...state.courses];
    const index = courses.findIndex(c => c.id === id);

    if (!~index) return state;

    courses.splice(index, 1);

    return { ...state, courses };
  }),
  on(editCourse, (state, { course }) => {
    const courses = [...state.courses];
    const index = courses.findIndex(c => c.id === course.id);

    if (!~index) return state;

    courses[index] = course;

    return { ...state, courses };
  }),
);
