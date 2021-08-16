export interface IHours {
  to: string;
  from: string;
  days: number[];
}

export interface IRestaurant {
  id: number;
  name: string;
  image?: string;
  hours?: IHours[];
  address?: string;
}
