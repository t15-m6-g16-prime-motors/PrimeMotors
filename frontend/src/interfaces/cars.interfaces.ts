import { ICarUser } from '.';

export interface ICar {
  id: number;
  brand: string;
  model: string;
  description: string;
  color: string;
  year: number;
  fuel_type: string;
  kilometrage: number;
  price: string;
  published: boolean;
  good_deal: boolean;
  created_at: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any;
  user: ICarUser;
  picture: {
    id: number;
    coverImage: string;
    image01: string;
    image02: string;
    image03: string;
    image04: string;
    image05: string;
    image06: string;
  };
}

export interface ICarByBrandFromKenzieAPI {
  id: string;
  name: string;
  brand: string;
  year: string;
  fuel: number | string;
  value: number | string;
}
