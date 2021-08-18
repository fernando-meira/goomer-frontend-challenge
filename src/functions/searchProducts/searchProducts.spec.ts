import { searchProducts } from './index';
import { products } from './mocks/products.mock';

describe('searchProducts', () => {
  it('should be able to search product with searchValue = Brigadeiro de padaria', async () => {
    const foundProducts = searchProducts({
      searchValue: 'Brigadeiro de padaria',
      allProducts: products,
    });

    expect(foundProducts[0]).toStrictEqual(products[0]);
  });

  it('should be able to search product without search values (return all products)', async () => {
    const foundProducts = searchProducts({
      searchValue: '',
      allProducts: products,
    });

    expect(foundProducts).toStrictEqual(products);
  });
});
