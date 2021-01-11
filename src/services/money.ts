import { API_ROUTE } from '@/constants/apiRoute';
import { nextRequest } from '@/utils/request';

export const moneyApi = {
  // * ------ addMoney ------
  addMoney: (data: API.IAddMoney) =>
    nextRequest('POST', API_ROUTE.payment, data, {
      defaultPost: true,
    }),

  // * ------ editMoney ------
  editMoney: (data: API.IEditMoney) =>
    nextRequest(
      'POST',
      API_ROUTE.payment,
      { data },
      {
        defaultPost: true,
      },
    ),

  // * ------ getMoney ------
  getMoney: (data?: API.IGetMoney) =>
    nextRequest(
      'GET',
      API_ROUTE.payment,
      { data },
      {
        defaultParam: true,
      },
    ),

  // * ------ delMoney ------
  delMoney: (data: API.IGetMoney) =>
    nextRequest(
      'POST',
      API_ROUTE.payment,
      { data },
      {
        defaultPost: true,
      },
    ),
};
