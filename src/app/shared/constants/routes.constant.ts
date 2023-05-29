import { IRouteLink } from '../interfaces/route-link.interface';
import { UserTypes } from './user-types.constant';

export const SIDEBAR_ROUTES: IRouteLink[] = [
  {
    name: 'Dashboard',
    link: 'dashboard',
    allowedFor: UserTypes.Student,
  },
  {
    name: 'Courses',
    link: 'courses',
    allowedFor: UserTypes.Student,
  },
  {
    name: 'Grades',
    link: 'grades',
    allowedFor: UserTypes.Student,
  },
  {
    name: 'Calendar',
    link: 'calendar',
    allowedFor: UserTypes.Student,
  },
  {
    name: 'Schedule',
    link: 'schedule',
    allowedFor: UserTypes.Student,
  },
  {
    name: 'Settings',
    link: 'settings',
    allowedFor: UserTypes.Student,
  },
  {
    name: 'Administration',
    link: 'administration',
    allowedFor: UserTypes.Administrator,
    subPagesVisible: true,
    subPages: [
      {
        name: 'Faculties',
        link: 'faculties',
        allowedFor: UserTypes.Administrator,
      },
      {
        name: 'Departments',
        link: 'departments',
        allowedFor: UserTypes.Administrator,
      },
      {
        name: 'Groups',
        link: 'groups',
        allowedFor: UserTypes.Administrator,
      },
      {
        name: 'Users',
        link: 'users',
        allowedFor: UserTypes.Administrator,
      },
    ],
  },
];
