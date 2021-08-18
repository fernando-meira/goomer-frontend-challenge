import { separateGroupsFromMenu } from './index';
import { menu } from './mocks/menu.mock';

describe('searchRestaurants', () => {
  it('should be able to search restaurants with searchValue = Cupcake para todos', async () => {
    const formattedNameOfGroups = [
      'doces',
      'salgados',
      'pratos estranhos',
      'sucos exóticos',
    ];

    const formattedArrayOfProducts = [
      [
        {
          restaurantId: 1,
          name: 'Brigadeiro de padaria',
          image:
            'https://st4.depositphotos.com/1077028/21147/i/1600/depositphotos_211470810-stock-photo-brigadeiro-brazilian-famous-chocolate-candy.jpg',
          price: 8,
          group: 'Doces',
          sales: [
            {
              description: 'Terça-feira doce',
              price: 5,
              hours: [{ from: '09:00', to: '18:00', days: [3] }],
            },
          ],
        },
        {
          restaurantId: 1,
          name: 'Sonho de chocolate',
          price: 6,
          group: 'Doces',
        },
        {
          restaurantId: 1,
          name: 'Brownie',
          image:
            'https://st.depositphotos.com/1692343/1996/i/950/depositphotos_19965431-stock-photo-fresh-homemade-chocolate-brownie.jpg',
          price: 4.5,
          group: 'Doces',
          sales: [
            {
              description: 'Terça-feira doce',
              price: 5,
              hours: [{ from: '09:00', to: '18:00', days: [3] }],
            },
          ],
        },
        {
          restaurantId: 1,
          name: 'Paçoca caseira',
          image:
            'https://st3.depositphotos.com/8857146/14730/i/1600/depositphotos_147309937-stock-photo-pe-de-moleque-and-peanut.jpg',
          price: 3.5,
          group: 'Doces',
          sales: [
            {
              description: 'Terça-feira doce',
              price: 5,
              hours: [{ from: '09:00', to: '18:00', days: [3] }],
            },
          ],
        },
        {
          restaurantId: 1,
          name: 'Cupcake de banana',
          image:
            'https://static8.depositphotos.com/1055647/1027/i/950/depositphotos_10271401-stock-photo-banana-and-carrot-bran-muffins.jpg',
          price: 6.5,
          group: 'Doces',
          sales: [
            {
              description: 'Terça-feira doce',
              price: 5,
              hours: [{ from: '09:00', to: '18:00', days: [3] }],
            },
          ],
        },
      ],
      [
        {
          restaurantId: 1,
          name: 'Salgado de banana com chiclete',
          image:
            'https://static7.depositphotos.com/1009541/749/i/950/depositphotos_7494671-stock-photo-arabic-pastry-buns-with-cheese.jpg',
          price: 5.2,
          group: 'Salgados',
        },
      ],
      [
        {
          restaurantId: 1,
          name: 'Feijoada de nutella com manga',
          image:
            'https://st2.depositphotos.com/4687049/6974/i/450/depositphotos_69740977-stock-photo-typical-brazilian-dish-feijoada.jpg',
          price: 10.99,
          group: 'Pratos estranhos',
        },
        {
          restaurantId: 1,
          name: 'Panqueca de abóbora com abacate',
          image:
            'https://static4.depositphotos.com/1011240/292/i/450/depositphotos_2921445-stock-photo-pancakes-with-spinach.jpg',
          price: 6.8,
          group: 'Pratos estranhos',
        },
      ],
      [
        {
          restaurantId: 1,
          name: 'Suco de amora com couve',
          image:
            'https://st2.depositphotos.com/2444995/8287/i/450/depositphotos_82874434-stock-photo-fresh-green-smoothie-on-rustic.jpg',
          price: 5.8,
          group: 'Sucos exóticos',
        },
        {
          restaurantId: 1,
          name: 'Suco de uva com goiaba',
          image:
            'https://st2.depositphotos.com/1055484/10070/i/450/depositphotos_100703178-stock-photo-fresh-guava-juice-on-white.jpg',
          price: 5.8,
          group: 'Sucos exóticos',
        },
        {
          restaurantId: 1,
          name: 'Suco de ameixa com romã',
          image:
            'https://static8.depositphotos.com/1001069/1050/i/450/depositphotos_10503128-stock-photo-pomegranate-juice-in-a-glass.jpg',
          price: 5.8,
          group: 'Sucos exóticos',
        },
      ],
    ];

    const { nameOfGroups, arrayOfProducts } = separateGroupsFromMenu(menu);

    expect(nameOfGroups).toStrictEqual(formattedNameOfGroups);
    expect(arrayOfProducts).toStrictEqual(formattedArrayOfProducts);
  });
});
