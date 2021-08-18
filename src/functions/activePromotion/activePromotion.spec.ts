import { activePromotion } from './index';

import {
  salesWithActivePromotion,
  salesWithoutActivePromotion,
} from './mocks/sales.mock';

describe('activePromotion', () => {
  it('should able to return the promotion if it is active', async () => {
    const promotion = activePromotion({ sales: salesWithActivePromotion });

    expect(!!promotion?.description).toBe(true);
  });

  it('should not be able to return null if there are no active promotions', async () => {
    const promotion = activePromotion({ sales: salesWithoutActivePromotion });

    expect(promotion).toBe(null);
  });

  it('should be able to return null if sales is undefined', async () => {
    const promotion = activePromotion({});

    expect(promotion).toBe(null);
  });
});
