// https://umijs.org/plugins/plugin-access
import { Permissions } from '@config/routes';
import type { IKeyValue } from '@next-core/core';

export default (initialState: API.IUser) => {
  const { currentUser } = initialState || {};
  const allPermissions = {
    ...Permissions,
  };
  return dgFlatPermissions(allPermissions, currentUser?.permissions);
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
  return result;
}
