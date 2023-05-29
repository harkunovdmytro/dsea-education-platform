import { createFeatureSelector, createSelector } from '@ngrx/store';
import { IMainReducer, mainReducerKey } from './reducer';
import { IDepartment } from '../shared/interfaces/department.interface';
import { IFaculty } from '../shared/interfaces/faculty.interface';
import { UserTypes } from '../shared/constants/user-types.constant';

export const mainFeatureSelector = createFeatureSelector<IMainReducer>(mainReducerKey);

export const selectCurrentUserType = createSelector(mainFeatureSelector, (state) => state.currentUser?.userType);
export const selectUsername = createSelector(mainFeatureSelector, (state) => `${state.currentUser?.lastName} ${state.currentUser?.name.slice(0, 1)}.`);
export const selectFaculties = createSelector(mainFeatureSelector, (state) => state.faculties);
export const selectDepartments = createSelector(mainFeatureSelector, (state) => state.departments);

export const selectDepartmentsForView = createSelector(mainFeatureSelector, (state) => {
  const faculties = state.faculties;
  const departments: IDepartment[] = state.departments.map((department) => {
    let faculty: IFaculty = faculties
      .find((f) => f?.id === department?.facultyId) as IFaculty;

    if (!~faculty) faculty = faculties[0];

    return {
      ...department,
      faculty,
    };
  });

  return faculties.map((faculty) => {
    const facultyDepartments = departments.filter(d => d?.faculty?.id === faculty?.id);

    return {
      faculty,
      departments: facultyDepartments,
    };
  });
});

export const selectGroups = createSelector(mainFeatureSelector, (state) => state.groups);
export const selectGroupsForView = createSelector(mainFeatureSelector, (state) => {
  const allFaculties = [...state.faculties];
  const allDepartments = [...state.departments];
  const allGroups = [...state.groups];

  return allFaculties.map((faculty) => {
    const facultyDepartments = [...allDepartments].filter(d => d.facultyId === faculty.id);
    let facultyGroups: number = 0;

    return {
      faculty,
      departments: facultyDepartments.map((department) => {
        const groups = [...allGroups].filter((group) => group.departmentId === department.id);
        facultyGroups += groups.length;

        return {
          department,
          groups,
        };
      }),
      facultyGroups,
    };
  });
});

export const selectUsers = createSelector(mainFeatureSelector, (state) => state.users);
export const selectNotStudents = createSelector(mainFeatureSelector, (state) => state.users.filter(u => u.userType > UserTypes.Student));
export const selectTeachers = createSelector(mainFeatureSelector, (state) => state.users.filter(u => u.userType === UserTypes.Teacher));
export const selectAdmins = createSelector(mainFeatureSelector, (state) => state.users.filter(u => u.userType === UserTypes.Administrator));
export const selectUsersForView = createSelector(mainFeatureSelector, (state) => {
  const allFaculties = [...state.faculties];
  const allDepartments = [...state.departments];
  const allGroups = [...state.groups];
  const allUsers = [...state.users];

  return allFaculties.map((faculty) => {
    const facultyDepartments = [...allDepartments].filter(d => d.facultyId === faculty.id);
    let facultyUsers: number = 0;

    return {
      faculty,
      departments: facultyDepartments.map((department) => {
        const groups = [...allGroups].filter((group) => group.departmentId === department.id);

        return {
          department,
          groups: groups.map((group) => {
            const groupUsers = allUsers.filter((user) => user.groupId === group.id);
            facultyUsers += groupUsers.length;

            return {
              group,
              users: groupUsers
            };
          }),
        };
      }),
      facultyUsers,
    };
  });
});

export const selectCourses = createSelector(mainFeatureSelector, (state) => state.courses);
export const selectCoursesForView = createSelector(mainFeatureSelector, (state) => {
  const courses = [...state.courses];

  if(!state.currentUser?.userType) return [];
  if(state.currentUser?.userType === UserTypes.Administrator) return courses;
  if(state.currentUser?.userType === UserTypes.Teacher) {
    return courses.filter(c => c.managers.includes(state.currentUser?.uuid as number))
  }

  return courses.filter(c => c.groups.includes(state.currentUser?.groupId as number))
});
