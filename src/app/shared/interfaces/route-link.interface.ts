import { UserTypes } from '../constants/user-types.constant';

export interface IRouteLink {
  name: string;
  link: string;
  allowedFor: UserTypes;
  subPages?: IRouteLink[];
  subPagesVisible?: boolean;
}
