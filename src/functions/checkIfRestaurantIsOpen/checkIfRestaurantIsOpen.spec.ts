import { checkIfRestaurantIsOpen } from './index';

import { openRestaurant, closedRestaurant } from './mocks/restaurants.mock';

describe('checkIfRestaurantIsOpen', () => {
  it('should be able to return "true" if the restaurant is open', async () => {
    const isOpen = checkIfRestaurantIsOpen({ hours: openRestaurant.hours });

    expect(isOpen).toBe(true);
  });

  it('should be able to return "false" if the restaurant is closed', async () => {
    const isOpen = checkIfRestaurantIsOpen({ hours: closedRestaurant.hours });

    expect(isOpen).toBe(false);
  });

  it('should be able to return "true" if hours are not entered', async () => {
    const isOpen = checkIfRestaurantIsOpen({});

    expect(isOpen).toBe(false);
  });
});
