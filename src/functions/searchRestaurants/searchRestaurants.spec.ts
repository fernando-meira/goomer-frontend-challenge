import { searchRestaurants } from './index';
import { restaurants } from './mocks/restaurants.mock';

describe('searchRestaurants', () => {
  it('should be able to search restaurants with searchValue = Cupcake para todos', async () => {
    const foundRestaurants = searchRestaurants({
      searchValue: 'Cupcake para todos',
      allItems: restaurants,
    });

    expect(foundRestaurants[0]).toStrictEqual(restaurants[0]);
  });

  it('should be able to search restaurants without search values (return all restaurants)', async () => {
    const foundRestaurants = searchRestaurants({
      searchValue: '',
      allItems: restaurants,
    });

    expect(foundRestaurants).toStrictEqual(restaurants);
  });
});
