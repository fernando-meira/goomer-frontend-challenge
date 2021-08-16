import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { IState } from 'store';
import { Loader } from 'components';
import { api } from 'services/api/config';
import { IRestaurant } from 'interfaces/restaurant';
import { formatRestaurantSchedules } from 'functions';
import defaultRestaurantLogo from 'assets/images/default-restaurant-logo@2x.png';

import * as S from './styles';

export function RestaurantInfo() {
  const { id } = useParams<{ id: string }>();

  const restaurantInformation = useSelector<IState, IRestaurant>(
    state => state.restaurant,
  );

  const [loading, setLoading] = useState(false);
  const [restaurant, setRestaurant] = useState(restaurantInformation);

  async function fetchRestaurantInformation(restaurantId: string) {
    setLoading(true);

    try {
      const { data } = await api(`restaurants/${restaurantId}`);

      setRestaurant(data);
    } catch (error) {
      throw new Error(error.message);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    if (!restaurant?.id) {
      fetchRestaurantInformation(id);
    }
  }, [id, restaurant.id]);

  return (
    <S.Container>
      {loading ? (
        <Loader />
      ) : (
        <>
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
        </>
      )}
    </S.Container>
  );
}
