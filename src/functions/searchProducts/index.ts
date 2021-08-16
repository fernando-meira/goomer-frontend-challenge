import { IMenu } from 'interfaces/menu';

interface SearchProductsProps {
  searchValue: string;
  allProducts: IMenu[];
}

export function searchProducts({
  searchValue,
  allProducts,
}: SearchProductsProps) {
  if (searchValue) {
    const filtered = allProducts.filter(product => {
      if (product.name.toLowerCase().includes(searchValue.toLowerCase())) {
        return true;
      }

      return false;
    });

    return filtered;
  }
  return allProducts;
}
