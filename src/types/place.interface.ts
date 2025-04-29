export interface PlaceDTO {
  id: string;
  name: string;
  description: string;
  coupons: number;
  cover: string;
  address: string;
  latitude: number;
  longitude:  number;
  phone: string;
  rules?: {
    id: string
    description: string
  }[];
}