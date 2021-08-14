import { useState, useEffect, useCallback } from 'react';

import { api } from 'services/api';
import { Search, RestaurantCard } from 'components';
import { IRestaurant } from 'interfaces/restaurant';

import * as S from './styles';

export function Home() {
  const [restaurants, setRestaurants] = useState<IRestaurant[]>([]);

  const fetchRestaurants = useCallback(async () => {
    try {
      const { data } = await api.get<IRestaurant[]>('restaurants');

      setRestaurants(data);
    } catch (error) {
      throw new Error(error.message);
    }
  }, []);

  useEffect(() => {
    fetchRestaurants();
  }, [fetchRestaurants]);

  return (
    <S.Container>
      <h1>Bem-vindo ao Lista Rango</h1>

      <Search />

      <S.Content>
        {restaurants.map(restaurant => (
          <RestaurantCard key={restaurant.id} restaurant={restaurant} />
        ))}
      </S.Content>
    </S.Container>
  );
}
