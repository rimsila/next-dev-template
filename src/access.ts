// https://umijs.org/plugins/plugin-access
import { PERMISSIONS } from '@/constants/routePath';
import type { IKeyValue } from '@next-core/index';

// export default (initialState: API.IUser) => {
export default (initialState: { currentUser: API.IUser }) => {
  const { currentUser } = initialState || {};
  const { email } = currentUser?.data || {};
  if (currentUser) {
    const allPermissions = {
      ...PERMISSIONS,
    };
    // return dgFlatp(allPermissions, currentUser?.permissions,accessMock);
    const checkAccess = dgFlatPermissions(
      allPermissions,
      (email === 'hin.sinak@gmail.com1' || email === 'rimsila.itc@gmail.com') && true,
    );
    console.log('checkAccess', checkAccess);
    return checkAccess;
  }
  return false;
};

function dgFlatPermissions(
  allPermissions: IKeyValue,
  mock: boolean,
  // curPermissions: string[] = [],
): IKeyValue<boolean> {
  let result: IKeyValue<boolean> = {};

  // eslint-disable-next-line no-restricted-syntax
  for (const key in allPermissions) {
    if (allPermissions.hasOwnProperty(key)) {
      if (typeof allPermissions[key] === 'string') {
        // result[allPermissions[key]] = curPermissions.indexOf(allPermissions[key]) !== -1;
        result[allPermissions[key]] = mock;
      } else {
        // const subResult = dgFlatPermissions(allPermissions[key], curPermissions);
        const subResult = dgFlatPermissions(allPermissions[key], mock);
        result = {
          ...result,
          ...subResult,
        };
      }
    }
  }
  return result;
}
