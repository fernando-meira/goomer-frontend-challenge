import { IRestaurant } from 'interfaces/restaurant';

interface SearchProps {
  searchValue: string;
  allItems: IRestaurant[];
}

export function searchRestaurants({ searchValue, allItems }: SearchProps) {
  if (searchValue) {
    const filtered = allItems.filter(restaurant => {
      if (restaurant.name.toLowerCase().includes(searchValue.toLowerCase())) {
        return true;
      }

      return false;
    });

    return filtered;
  }
  return allItems;
}
