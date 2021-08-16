import { IMenu } from 'interfaces/menu';

interface SearchProps {
  allItems: IMenu[];
  searchValue: string;
}

export function search({ searchValue, allItems }: SearchProps) {
  if (searchValue) {
    const filtered = allItems.filter(item => {
      if (item.name.toLowerCase().includes(searchValue.toLowerCase())) {
        return true;
      }

      return false;
    });

    return filtered;
  }
  return allItems;
}
