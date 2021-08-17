import { addDays, subDays } from 'date-fns';

import { IHours } from 'interfaces/restaurant';
import { handleDate, timezoneToBrazil } from '../date';

interface IsOnTimeProps {
  date?: Date;
  hour: IHours;
  dayNumber?: number;
}

export function isOnTime({ hour, date, dayNumber }: IsOnTimeProps): boolean {
  const currentDateTime = date ?? timezoneToBrazil(new Date());
  const currentDayNumber = dayNumber ?? currentDateTime.getDay() + 1;

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
    let tomorrow = day;
    let yesterday = day;

    if (day === 1) {
      tomorrow = day + 1;
      yesterday = 7;
    } else if (day === 7) {
      tomorrow = 1;
      yesterday = day - 1;
    } else {
      tomorrow = day + 1;
      yesterday = day - 1;
    }

    if (hour.days.includes(day) || hour.days.includes(tomorrow)) {
      toDateTime = addDays(toDateTime, 1);

      day = toDateTime.getDay();
      day = day === 1 ? 7 : day - 1;
    } else if (hour.days.includes(yesterday)) {
      fromDateTime = subDays(fromDateTime, 1);

      day = fromDateTime.getDay();
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
}
