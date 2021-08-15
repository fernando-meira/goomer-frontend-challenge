import { IMenu } from 'interfaces/menu';
import { api } from '../config';

interface GetRestaurantMenuProps {
  id: string;
}

export async function getRestaurantMenu({
  id,
}: GetRestaurantMenuProps): Promise<IMenu[]> {
  const { data } = await api.get<IMenu[]>(`restaurants/${id}/menu`);

  return data;
}
