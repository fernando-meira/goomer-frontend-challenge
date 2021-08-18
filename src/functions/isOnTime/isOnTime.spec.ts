import { isOnTime } from './index';

let to: string;
let from: string;
let dateTo: Date;
let dateFrom: Date;
let days: number[];

describe('isOnTime', () => {
  beforeEach(() => {
    dateFrom = new Date();
    dateTo = new Date(new Date().setHours(new Date().getHours() + 4));

    from = `${dateFrom.getHours()}:${dateFrom.getMinutes()}`;
    to = `${dateTo.getHours()}:${dateTo.getMinutes()}`;
    days = [new Date().getDay() + 1];
  });

  it('should be able to check if it is on time with only hour param', async () => {
    const result = isOnTime({
      hour: { from, to, days },
    });

    expect(result).toBe(true);
  });

  it('should be able to check if it is on time with hour, date and dayNumber param', async () => {
    const result = isOnTime({
      hour: { from, to, days },
      date: new Date(),
      dayNumber: new Date().getDay() + 1,
    });

    expect(result).toBe(true);
  });
});
