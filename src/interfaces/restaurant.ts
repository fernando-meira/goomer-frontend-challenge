interface Hours {
  to: string;
  from: string;
  days: number[];
}

export interface IRestaurant {
  id: number;
  name: string;
  image?: string;
  hours?: Hours[];
  address?: string;
  isOpen?: boolean | undefined;
}
