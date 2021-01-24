// https://umijs.org/plugins/plugin-access
import { PERMISSIONS } from '@/constants/routePath';
import type { IKeyValue } from '@next-core/index';

// const accessArr = () => {
//   const newRoute = routes.map((i) => i.access);
//   return getOnlyArrValue(newRoute);
// };

type IAllRoles = 'guest' | 'admin' | 'user';

// export default (initialState: API.IUser) => {
export default (initialState: { currentUser: API.IUser }) => {
  const mockAdmin: any = () => {
    const ls = localStorage?.getItem('role');
    console.log('ls', ls);

    if (!ls) {
      localStorage?.setItem('role', '[]');
    }
    return (ls && JSON?.parse(ls)) || [];
  };

  let mockUserRole: any[] = [];

  const checkRoles = (email: string | undefined) => {
    //* --- mockUserRole will be from server

    let allRoles: IAllRoles = 'guest';
    if (email === 'rimsila.itc@gmail.com') {
      allRoles = 'admin';
    } else if (email === 'hin.sinak@gmail.com') {
      allRoles = 'user';
      mockUserRole = ['/dashboard', ...mockAdmin()];
    }
    return allRoles;
  };

  const { currentUser } = initialState || {};
  const { email } = currentUser?.data || {};
  // const routeAccess = getMenuData(routes);

  // console.log('accessArr', accessArr());

  const allPermissions = {
    ...PERMISSIONS,
  };
  // return dgFlatp(allPermissions, currentUser?.permissions);
  return dgFlatPermissions(allPermissions, mockUserRole, checkRoles(email));
};

function dgFlatPermissions(
  allPermissions: IKeyValue,
  curPermissions: string[] = [],
  roleType: IAllRoles,
): IKeyValue<boolean> {
  let result: IKeyValue<boolean> = {};

  const returnBaseRoles = (allPermissionsKey: any) => {
    if (roleType === 'admin') {
      return true;
    }
    return curPermissions.indexOf(allPermissions[allPermissionsKey]) !== -1;
  };

  // eslint-disable-next-line no-restricted-syntax
  for (const key in allPermissions) {
    if (allPermissions.hasOwnProperty(key)) {
      if (typeof allPermissions[key] === 'string') {
        result[allPermissions[key]] = returnBaseRoles(key);
      } else {
        const subResult = dgFlatPermissions(allPermissions[key], curPermissions, roleType);
        result = {
          ...result,
          ...subResult,
        };
      }
    }
  }
  console.log('result', result);

  return result;
}
