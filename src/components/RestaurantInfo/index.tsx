import { useSelector } from 'react-redux';

import { IState } from 'store';
import { IRestaurant } from 'interfaces/restaurant';
import defaultRestaurantLogo from 'assets/images/default-restaurant-logo@2x.png';

import * as S from './styles';

export function RestaurantInfo() {
  const restaurant = useSelector<IState, IRestaurant>(
    state => state.restaurant,
  );

  return (
    <S.Container>
      <S.ImageWrapper>
        <img
          src={restaurant.image ?? defaultRestaurantLogo}
          alt={`Logo do restaurante ${restaurant.name}`}
        />
      </S.ImageWrapper>

      <S.Content>
        <strong>{restaurant.name}</strong>

        <p>{restaurant.address}</p>

        <span>
          Segunda à Sexta: <time>11:30 às 15:00</time>
        </span>

        <span>
          Sábados: <time>11:30 às 15:00</time>
        </span>

        <span>
          Domingos e Feriados: <time>11:30 às 15:00</time>
        </span>
      </S.Content>
    </S.Container>
  );
}
