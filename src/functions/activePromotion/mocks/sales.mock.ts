const dateFrom = new Date();
const dateTo = new Date(new Date().setHours(new Date().getHours() + 4));

const from = `${dateFrom.getHours()}:${dateFrom.getMinutes()}`;
const to = `${dateTo.getHours()}:${dateTo.getMinutes()}`;
const days = [new Date().getDay() + 1];

export const salesWithActivePromotion = [
  {
    description: 'Promoção dos doces',
    price: 5,
    hours: [
      {
        from,
        to,
        days,
      },
    ],
  },
];

export const salesWithoutActivePromotion = [
  {
    description: 'Promoção dos doces',
    price: 5,
    hours: [
      {
        from: '09:00',
        to: '18:00',
        days: [days[0] === 7 ? 1 : days[0] + 1],
      },
    ],
  },
];
