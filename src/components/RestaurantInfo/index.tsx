import { useSelector } from 'react-redux';

import { IState } from 'store';
import { IRestaurant } from 'interfaces/restaurant';
import { formatRestaurantSchedules } from 'functions';
import defaultRestaurantLogo from 'assets/images/default-restaurant-logo@2x.png';

import * as S from './styles';

export function RestaurantInfo() {
  const restaurant = useSelector<IState, IRestaurant>(
    state => state.restaurant,
  );

  // If there is no restaurant in global status, make the call in the api with the id coming from the parameters.
  // useEffect;
  // if (!restaurant?.id) {
  // }

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

        {restaurant.hours &&
          formatRestaurantSchedules(restaurant.hours).map(schedule => (
            <span key={`${schedule.day}:${JSON.stringify(schedule.hour)}`}>
              {schedule.day}:
              <time>
                {schedule.hour.from} às {schedule.hour.to}
              </time>
            </span>
          ))}
      </S.Content>
    </S.Container>
  );
}
