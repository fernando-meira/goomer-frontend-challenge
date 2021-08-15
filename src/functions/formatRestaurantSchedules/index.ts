import { IHours } from 'interfaces/restaurant';

interface Schedule {
  day: string;
  hour: {
    to: string;
    from: string;
  };
}

const weekDays = [
  'Domingo',
  'Segunda',
  'Terça',
  'Quarta',
  'Quinta',
  'Sexta',
  'Sábado',
];

export function formatRestaurantSchedules(hours?: IHours[]): Schedule[] {
  if (!hours) {
    return [];
  }

  const formattedSchedules: Schedule[] = hours.map(hour => {
    const weekDayNames = hour.days.map(day => weekDays[day - 1]);
    let dayString = weekDayNames.join(' e ');

    if (weekDayNames.length >= 3) {
      let consecutive = true;
      let lastDay: number | null = null;

      hour.days.some(day => {
        if (!lastDay) {
          lastDay = day;
          return false;
        }

        consecutive = lastDay + 1 === day;
        lastDay = day;

        return !consecutive;
      });

      if (consecutive) {
        const lastIndex = weekDayNames.length - 1;
        dayString = `${weekDayNames[0]} a ${weekDayNames[lastIndex]}`;
      } else {
        dayString = weekDayNames.join(', ');
      }
    }

    return {
      day: dayString,
      hour,
    };
  });

  return formattedSchedules;
}
