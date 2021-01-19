// https://umijs.org/plugins/plugin-access
import { permissions } from '@config/routes';
import type { IKeyValue } from '@next-core/core';

// export default (initialState: API.IUser) => {
export default () => {
  // const { currentUser } = initialState || {};
  const mockUserRole = [
    permissions.stockManagement.index,
    permissions.userManagement.index,
    permissions.stockManagement.stockList,
  ];
  const allPermissions = {
    ...permissions,
  };
  // return dgFlatp(allPermissions, currentUser?.permissions);
  return dgFlatPermissions(allPermissions, mockUserRole);
};

function dgFlatPermissions(
  allPermissions: IKeyValue,
  curPermissions: string[] = [],
): IKeyValue<boolean> {
  let result: IKeyValue<boolean> = {};
  // eslint-disable-next-line no-restricted-syntax
  for (const key in allPermissions) {
    if (allPermissions.hasOwnProperty(key)) {
      if (typeof allPermissions[key] === 'string') {
        result[allPermissions[key]] = curPermissions.indexOf(allPermissions[key]) !== -1;
      } else {
        const subResult = dgFlatPermissions(allPermissions[key], curPermissions);
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
