import { zonedTimeToUtc } from 'date-fns-tz';

interface HandleDateProps {
  date?: Date;
  hour: number;
  minutes: number;
}

export function timezoneToBrazil(date: Date) {
  return zonedTimeToUtc(date, 'America/Sao_Paulo');
}

export function handleDate({ date, hour, minutes }: HandleDateProps) {
  return timezoneToBrazil(
    new Date((date ?? new Date()).setHours(hour, minutes, 0)),
  );
}
