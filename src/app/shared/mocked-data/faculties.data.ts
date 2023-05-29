import { IFaculty } from '../interfaces/faculty.interface';
import { IDepartmentDto } from '../interfaces/department.interface';
import { IUser, IUserDto } from '../interfaces/user.interface';
import { UserTypes } from '../constants/user-types.constant';
import { IGroupDto } from '../interfaces/group.interface';
import { ICourse, ICourseDto } from '../interfaces/course.interface';

export const Faculties: IFaculty[] = [
  {
    id: 1,
    name: 'Факультет Машинобудування',
    shortName: 'ФМ',
  },
  {
    id: 2,
    name: 'ФАКУЛЬТЕТ АВТОМАТИЗАЦІЇ МАШИНОБУДУВАННЯ Й ІНФОРМАЦІЙНИХ ТЕХНОЛОГІЙ',
    shortName: 'ФАМІТ',
  },
  {
    id: 3,
    name: 'ФАКУЛЬТЕТ ІНТЕГРОВАНИХ ТЕХНОЛОГІЙ І ОБЛАДНАННЯ',
    shortName: 'ФІТО',
  },
  {
    id: 4,
    name: 'ФАКУЛЬТЕТ ЕКОНОМІКИ ТА МЕНЕДЖМЕНТУ',
    shortName: 'ФЕМ',
  },
];

export const Departments: IDepartmentDto[] = [
  {
    id: 1,
    name: 'Кафедра автоматизації виробничих процесів',
    shortName: 'АВП',
    facultyId: 1,
  },
  {
    id: 2,
    name: 'КАФЕДРА ЕЛЕКТРОМЕХАНІЧНИХ СИСТЕМ АВТОМАТИЗАЦІЇ',
    shortName: 'ЕСА',
    facultyId: 2,
  },
  {
    id: 3,
    name: 'КАФЕДРА КОМП\'ЮТЕРНИХ ІНФОРМАЦІЙНИХ ТЕХНОЛОГІЙ',
    shortName: 'КІТ',
    facultyId: 2,
  },
  {
    id: 4,
    name: 'КАФЕДРА ОБРОБКИ МЕТАЛІВ ТИСКОМ',
    shortName: 'ОМТ',
    facultyId: 3,
  },
  {
    id: 5,
    name: 'КАФЕДРА ТЕХНОЛОГІЯ ТА ОБЛАДНАННЯ ЛИВАРНОГО ВИРОБНИЦТВА',
    shortName: 'ТОЛВ',
    facultyId: 3,
  },
  {
    id: 6,
    name: 'КАФЕДРА Економіка підприємства',
    shortName: 'ЕП',
    facultyId: 4,
  },
  {
    id: 7,
    name: 'КАФЕДРА МОВНОЇ ПІДГОТОВКИ',
    shortName: 'МП',
    facultyId: 4,
  },
];

export const Groups: IGroupDto[] = [
  {
    id: 1,
    name: 'Автоматизація Виробничих процесів 2021 1 Магістри научні',
    shortName: 'АВП-21-1мн',
    departmentId: 1,
    facultyId: 1,
    creationDate: '01.09.2021',
    closingDate: '29.05.2023',
  },
];

export const Users: IUserDto[] = [
  {
    uuid: 1,
    userType: UserTypes.Student,
    name: 'Dmytro',
    fathersName: 'Myhailovich',
    lastName: 'Harkunov',
    email: 'harkunovdmytro@gmail.com',
    password: '0000',
    coursesIds: [],
    facultyId: 1,
    departmentId: 1,
    groupId: 1,
  },
  {
    uuid: 2,
    userType: UserTypes.Teacher,
    name: 'Vycladach',
    fathersName: 'Vycladachevich',
    lastName: 'Vycladachev',
    email: 'vycladach@gmail.com',
    password: '0000',
    coursesIds: [1, 2, 3],
    facultyId: 1,
    groupId: null,
    departmentId: null,
  },
  {
    uuid: 3,
    userType: UserTypes.Administrator,
    name: 'Administrator',
    fathersName: 'Administratorovich',
    lastName: 'Administratorov',
    email: 'administrator@gmail.com',
    password: '0000',
    coursesIds: [],
    facultyId: null,
    groupId: null,
    departmentId: null,
  },
];

export const CurrentUser: IUserDto = Users[2];

export const Courses: ICourseDto[] = [{
  id: 1,
  name: 'Дипломування',
  managers: [2,3],
  groups: [1],
  tests: [],
  openingDate: '',
  creationDate: '',
  closingDate: '',
},{
  id: 2,
  name: 'Технології Проектування Складних Систем',
  managers: [3],
  groups: [1],
  tests: [],
  openingDate: '',
  creationDate: '',
  closingDate: '',
},];
