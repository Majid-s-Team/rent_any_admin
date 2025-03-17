export type UserType = {
  _id?: string;
  role?: string;
  name?: string;
  email?: string;
  mobile_no?: string;
  username?: string;
  password?: string;
  image_url?: string;
  driving_license?: string;
  trade_license?: string;
  emirates_id?: string;
  verified?: boolean;
  profile_completed?: boolean;
  online_status?: boolean;
  payment_active?: boolean;
  email_verified?: boolean;
  phone_verified?: boolean;
  verification_code?: null | string;
  slug?: string;
  status?: boolean;
  __v?: number;
  reset_password_token?: string;
  store_name?: string;
  address?: string;
  cover_image?: string;
  country?: string;
  city?: string;
};

export type CurrentLocation = {
  type?: string;
  coordinates?: [number, number];
};
