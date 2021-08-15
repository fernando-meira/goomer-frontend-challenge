import { addDays, subDays } from 'date-fns';
import { zonedTimeToUtc } from 'date-fns-tz';

import { IHours } from 'interfaces/restaurant';

interface CheckIfRestaurantIsOpenProps {
  hours?: IHours[];
}

interface HandleDateProps {
  date?: Date;
  hour: number;
  minutes: number;
}

function timezoneToBrazil(date: Date) {
  return zonedTimeToUtc(date, 'America/Sao_Paulo');
}

function handleDate({ date, hour, minutes }: HandleDateProps) {
  return timezoneToBrazil(
    new Date((date ?? new Date()).setHours(hour, minutes, 0)),
  );
}

export function checkIfRestaurantIsOpen({
  hours,
}: CheckIfRestaurantIsOpenProps): boolean {
  if (!hours) {
    return false;
  }

  const currentDateTime = timezoneToBrazil(new Date());
  const currentDayNumber = currentDateTime.getDay() + 1;

  const result = hours.some(hour => {
    const [fromHours, fromMinutes] = hour.from.split(':');
    const [toHours, toMinutes] = hour.to.split(':');

    let fromDateTime = handleDate({
      hour: Number(fromHours),
      minutes: Number(fromMinutes),
    });

    let toDateTime = handleDate({
      hour: Number(toHours),
      minutes: Number(toMinutes),
    });

    let day = currentDayNumber;

    if (fromDateTime > toDateTime) {
      let oneMoreDay = day;
      let lessADay = day;

      if (day === 1) {
        oneMoreDay = day + 1;
        lessADay = 7;
      } else if (day === 7) {
        oneMoreDay = 1;
        lessADay = day - 1;
      } else {
        oneMoreDay = day + 1;
        lessADay = day - 1;
      }

      if (hour.days.includes(oneMoreDay)) {
        toDateTime = addDays(toDateTime, 1);

        day = toDateTime.getDay() + 1;
        day = day === 1 ? 7 : day - 1;
      } else if (hour.days.includes(lessADay)) {
        fromDateTime = subDays(fromDateTime, 1);

        day = fromDateTime.getDay() - 1;
        day = day === 7 ? 1 : day + 1;
      } else {
        return false;
      }
    }

    return (
      currentDateTime >= fromDateTime &&
      currentDateTime <= toDateTime &&
      hour.days.includes(day)
    );
  });

  return result;
}
