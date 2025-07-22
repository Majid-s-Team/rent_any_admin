interface Location {
  type: string;
  coordinates: number[];
}

interface User {
  _id: string;
  current_location: Location;
  rating: number;
  stripe_id: string;
  disapprove_reason: string;
  reviews: number;
  role: string;
  name: string;
  email: string;
  username: string;
  password: string;
  image_url: string;
  license: string;
  mobile_no: string;
  delivery: boolean;
  online_status: boolean;
  profile_verified: boolean;
  payment_active: boolean;
  email_verified: boolean;
  mobile_no_verified: boolean;
  verification_code: string;
  reset_password_token: string;
  slug: string;
  status: boolean;
  created_at: string;
  updated_at: string | null;
  deleted_at: string | null;
  __v: number;
  device_tokens: string[];
  is_admin_approved: boolean;
}

interface Media {
  file: string;
  thumbnail: string | null;
  type: string;
  _id: string;
}

interface Advertisement {
  location: Location;
  _id: string;
  title: string;
  brand: string;
  price_per_slot: number;
  price_per_day: number;
  peak_start_time: string;
  peak_end_time: string;
  peak_price_per_slot: number;
  peak_price_per_day: number;
  address: string;
  country: string;
  city: string;
  favorities: any[];
  latitude: number;
  longitude: number;
  tags: string[];
  description: string;
  ad_status: string;
  category: string;
  user: string;
  featured: boolean;
  rating: number;
  reviews: number;
  delivery: string;
  media: Media[];
  start_time: string;
  end_time: string;
  slot_duration: number;
  advance_booking_duration: string;
  slug: string;
  status: boolean;
  created_at: string;
  updated_at: string | null;
  deleted_at: string | null;
  __v: number;
}

export interface ReportAds {
  _id: string;
  note: string;
  user: User;
  advertisement: Advertisement;
  report_status: string;
}
