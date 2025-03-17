export type Order = {
  user: User;
  vendor: Vendor;
  address: Address;
  products: Product[];
  type: string;
  order_status: string;
  slug: string;
  status: boolean;
  _id: string;
  sub_total: number;
  total?: number | undefined;
  discount: number;
};

type User = {
  _id: string;
  name: string;
  email: string;
  mobile_no?: string;
  image_url: string;
};

type Vendor = {
  _id: string;
  name: string;
  email: string;
  mobile_no: string;
  image_url: string;
};

type Address = {
  _id: string;
  location: string;
  street_1: string;
};

type Product = {
  _id?: string;
  name: string;
  price: number;
  size: string;
  color: string;
  discount: number;
  quantity: number;
  image_url: string[];
  category: string;
  variant_title: string;
};
