import { formatRestaurantSchedules } from './index';

import { hours } from './mocks/hours.mock';

describe('formatRestaurantSchedules', () => {
  it('should be able to format restaurant hours', async () => {
    const formattedSchedules = [
      {
        day: 'Segunda a Sexta',
        hour: { from: '12:00', to: '15:00', days: [2, 3, 4, 5, 6] },
      },
      {
        day: 'Segunda a Quinta',
        hour: { from: '19:00', to: '23:00', days: [2, 3, 4, 5] },
      },
      {
        day: 'Sexta, Sábado, Domingo',
        hour: { from: '19:00', to: '02:00', days: [6, 7, 1] },
      },
    ];

    const schedules = formatRestaurantSchedules(hours);

    expect(schedules).toStrictEqual(formattedSchedules);
  });

  it('should be able to return empty array if hours are not entered', async () => {
    const schedules = formatRestaurantSchedules();

    expect(schedules).toStrictEqual([]);
  });
});
