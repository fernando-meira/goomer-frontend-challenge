import { IRestaurant } from 'interfaces/restaurant';
import { api } from '../config';

export async function getRestaurants(): Promise<IRestaurant[]> {
  const { data } = await api.get<IRestaurant[]>('restaurants');

  return data;
}
