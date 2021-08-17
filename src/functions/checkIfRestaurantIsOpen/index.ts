import { IHours } from 'interfaces/restaurant';
import { timezoneToBrazil } from '../date';
import { isOnTime } from '../isOnTime';

interface CheckIfRestaurantIsOpenProps {
  hours?: IHours[];
}

export function checkIfRestaurantIsOpen({
  hours,
}: CheckIfRestaurantIsOpenProps): boolean {
  if (!hours) {
    return false;
  }

  const currentDateTime = timezoneToBrazil(new Date());
  const currentDayNumber = currentDateTime.getDay() + 1;

  const result = hours.some(hour =>
    isOnTime({ hour, date: currentDateTime, dayNumber: currentDayNumber }),
  );

  return result;
}
