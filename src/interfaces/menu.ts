import { IHours } from './restaurant';

export interface ISale {
  price: number;
  hours: IHours[];
  description: string;
}

export interface IMenu {
  name: string;
  image?: string;
  price?: number;
  group: string;
  sales?: ISale[];
  restaurantId: number;
}
