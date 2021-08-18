const dateFrom = new Date();
const dateTo = new Date(new Date().setHours(new Date().getHours() + 4));

const from = `${dateFrom.getHours()}:${dateFrom.getMinutes()}`;
const to = `${dateTo.getHours()}:${dateTo.getMinutes()}`;
const days = [new Date().getDay() + 1];

export const openRestaurant = {
  id: 1,
  name: 'Cupcake para todos',
  address: 'Rua dos Sonhos, 310',
  hours: [
    {
      from,
      to,
      days,
    },
  ],
  image:
    'https://images.unsplash.com/photo-1525640788966-69bdb028aa73?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=d53c30ba55d9ca863d57fabfffdb416b&auto=format&fit=crop&w=1047&q=80',
};

export const closedRestaurant = {
  id: 2,
  name: 'Comida de república',
  address: 'Rua, 890',
  hours: [
    {
      from: '12:00',
      to: '15:00',
      days: [days[0] === 7 ? 1 : days[0] + 1],
    },
  ],
  image:
    'https://images.unsplash.com/photo-1520209268518-aec60b8bb5ca?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=b2b04f771779f9ce281cb3e6035f360e&auto=format&fit=crop&w=884&q=80',
};
