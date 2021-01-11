import { API_ROUTE } from '@/constants/apiRoute';
import { nextRequest } from '@/utils/request';
import type { IAddCategory, IEditCategory, IGetCategory } from './global';

export const categoryApi = {
  // * ------ addCategory ------
  addCategory: (data: IAddCategory) =>
    nextRequest(
      'POST',
      API_ROUTE.category,
      { data },
      {
        defaultPost: true,
      },
    ),

  // * ------ editCategory ------
  editCategory: (data: IEditCategory) =>
    nextRequest(
      'POST',
      API_ROUTE.category,
      { data },
      {
        defaultPost: true,
      },
    ),

  // * ------ getCategory ------
  getCategory: (data?: IGetCategory) =>
    nextRequest(
      'GET',
      API_ROUTE.category,
      { data },
      {
        defaultParam: true,
      },
    ),

  // * ------ delCategory ------
  delCategory: (data: IGetCategory) =>
    nextRequest(
      'POST',
      API_ROUTE.category,
      { data },
      {
        defaultPost: true,
      },
    ),
};
