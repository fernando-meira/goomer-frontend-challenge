import { formatCurrency } from '.';

describe('formatCurrency', () => {
  it('should be able to format currency (BRL)', async () => {
    const formattedValue = formatCurrency(10);

    expect(formattedValue).toEqual('R$ 10.00');
  });
});
