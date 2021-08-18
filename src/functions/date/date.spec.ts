import { handleDate, timezoneToBrazil } from './index';

describe('date', () => {
  it('should be able to handleDate with date param', async () => {
    const date = handleDate({ hour: 12, minutes: 0, date: new Date() });

    expect(Object.prototype.toString.call(date)).toBe('[object Date]');
  });

  it('should be able to handleDate without date param', async () => {
    const date = handleDate({ hour: 12, minutes: 0 });

    expect(Object.prototype.toString.call(date)).toBe('[object Date]');
  });

  it('should be able to timezoneToBrazil return date', async () => {
    const date = timezoneToBrazil(new Date());

    expect(Object.prototype.toString.call(date)).toBe('[object Date]');
  });
});
