import { ISale } from 'interfaces/menu';
import { timezoneToBrazil } from '../date';
import { isOnTime } from '../isOnTime';

interface CheckIfPromotionIsActiveProps {
  sales?: ISale[];
}

export function activePromotion({
  sales,
}: CheckIfPromotionIsActiveProps): ISale | null {
  if (!sales) {
    return null;
  }

  const currentDateTime = timezoneToBrazil(new Date());
  const currentDayNumber = currentDateTime.getDay() + 1;

  let activeSale: ISale | null = null;

  sales.some(sale => {
    const isActiveHour = sale.hours.some(hour =>
      isOnTime({ hour, date: currentDateTime, dayNumber: currentDayNumber }),
    );

    activeSale = isActiveHour ? sale : null;

    return !!activeSale;
  });

  return activeSale;
}
