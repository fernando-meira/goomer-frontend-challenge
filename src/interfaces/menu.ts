import { IHours } from './restaurant';

interface ISales {
  price: number;
  hours: IHours[];
  description: string;
}

export interface IMenu {
  name: string;
  image: string;
  price: number;
  group: string;
  sales: ISales[];
  restaurantId: number;
}
