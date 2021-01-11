declare namespace API {
  // * =========== IAddMoney ===========

  export type IAddMoney = {
    accessKey?: string;
    currencyCode: string;
    accountType: string;
    amount: string;
    categoryId: string;
    paidFor: PaidFor[];
    sharedWith: SharedWith[];
    status: string;
    description: string;
  };

  export type SharedWith = {
    userId: string;
    amount: string;
  };

  export type PaidFor = {
    userId: string;
  };

  // * =========== ICategory ===========
  export type IGetCategory = {
    pageNum?: number;
    limit?: number;
  };
  export type IAddCategory = {
    name: string;
  };
  export type IEditCategory = {
    name: string;
    contentId: string;
  };

  // * =========== IUserAuth ===========
  export type IUser = {
    data?: {
      fullName?: string;
      id?: number;
      email?: string;
      status?: string;
      avatar?: string;
    };
    message: Record<string, unknown>;
    status: number;
  };
  export type ILogin = {
    email: string;
    password: string;
  };
  export type IForgotPassword = {
    email: string;
    newPassword: string;
    confirmNewPassword: string;
  };
}
