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
}
