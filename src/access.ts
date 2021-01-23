// https://umijs.org/plugins/plugin-access
import { PERMISSIONS } from '@/constants/routePath';
import type { IKeyValue } from '@next-core/index';

// export default (initialState: API.IUser) => {
export default (initialState: { currentUser: API.IUser }) => {
  const mockAdmin: any = () => {
    const ls = localStorage?.getItem('role');
    if (!ls) {
      localStorage?.setItem('role', '[]');
    }
    return (ls && JSON?.parse(ls)) || [];
  };
  const { currentUser } = initialState || {};
  const { email } = currentUser?.data || {};
  // const routeAccess = getMenuData(routes);

  //* --- mockUserRole will be from server
  const mockUserRole: any[] = [];

  // if (email === 'rimsila.itc@gmail.com') {
  //   //* admin
  //   mockUserRole = [
  //     ...mockAdmin(),
  //     PERMISSIONS?.settings?.role.index,
  //     PERMISSIONS?.settings?.index,
  //   ];
  // } else {
  //   mockUserRole = [
  //     PERMISSIONS?.stockManagement?.index,
  //     PERMISSIONS?.userManagement?.index,
  //     PERMISSIONS?.stockManagement?.stockList,
  //   ];
  // }

  const allPermissions = {
    ...PERMISSIONS,
  };
  // return dgFlatp(allPermissions, currentUser?.permissions);
  return dgFlatPermissions(allPermissions, mockUserRole, email);
};

function dgFlatPermissions(
  allPermissions: IKeyValue,
  curPermissions: string[] = [],
  email: any,
): IKeyValue<boolean> {
  let result: IKeyValue<boolean> = {};
  // eslint-disable-next-line no-restricted-syntax
  for (const key in allPermissions) {
    if (allPermissions.hasOwnProperty(key)) {
      if (typeof allPermissions[key] === 'string') {
        result[allPermissions[key]] = curPermissions.indexOf(allPermissions[key]) !== -1;
      } else {
        const subResult = dgFlatPermissions(allPermissions[key], curPermissions, email);
        result = {
          ...result,
          ...subResult,
        };
      }
    }
  }
  // @ts-ignore
  return email ? true : result;
}
