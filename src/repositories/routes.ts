import { ApiRoute, RequestMethod } from "../types";

const requestMethods: { [key: string]: RequestMethod } = {
  GET: "GET",
  POST: "POST",
  PUT: "PUT",
  PATCH: "PATCH",
  DELETE: "DELETE",
};
Object.freeze(requestMethods);

export const user: ApiRoute = {
  url: "/user",
  method: requestMethods.GET,
  auth: true,
};

export const updateUser: ApiRoute = {
  url: "/user",
  method: requestMethods.PATCH,
  auth: true,
};

export const loginUser: ApiRoute = {
  url: "/user/login",
  method: requestMethods.POST,
  auth: false,
};

export const signupUser: ApiRoute = {
  url: "/user",
  method: requestMethods.POST,
  auth: false,
};

export const forgotPassword: ApiRoute = {
  url: "/user/forgot-password",
  method: requestMethods.POST,
  auth: false,
};

export const verifyCode: ApiRoute = {
  url: "/user/verify-code",
  method: requestMethods.POST,
  auth: false,
};

export const resetPassowrd: ApiRoute = {
  url: "/user/reset-password",
  method: requestMethods.POST,
  auth: false,
};

export const changePassword: ApiRoute = {
  url: "/user/change-password",
  method: requestMethods.POST,
  auth: true,
};

export const uploadfile: ApiRoute = {
  url: "/file/upload",
  method: requestMethods.POST,
  auth: true,
};

export const orderHistory: ApiRoute = {
  url: "/order",
  method: requestMethods.GET,
  auth: true,
};

export const orderUpdate: ApiRoute = {
  url: "/order",
  method: requestMethods.PATCH,
  auth: true,
};

// export const orderDetails: ApiRoute = {
//   url: "/order",
//   method: requestMethods.GET,
//   auth: true,
// };

export const createProduct: ApiRoute = {
  url: "/product",
  method: requestMethods.POST,
  auth: true,
};

export const editProduct: ApiRoute = {
  url: "/product",
  method: requestMethods.PATCH,
  auth: true,
};

export const deleteProduct: ApiRoute = {
  url: "/product",
  method: requestMethods.DELETE,
  auth: true,
};

export const categories: ApiRoute = {
  url: "/category",
  method: requestMethods.GET,
  auth: true,
};

export const subCategories: ApiRoute = {
  url: "/sub-category",
  method: requestMethods.GET,
  auth: true,
};

export const getProducts: ApiRoute = {
  url: "/product",
  method: requestMethods.GET,
  auth: true,
};

export const dispute: ApiRoute = {
  url: "/dispute",
  method: requestMethods.GET,
  auth: true,
};
