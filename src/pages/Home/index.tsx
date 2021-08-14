import { useState, useEffect, useCallback } from 'react';

import { api } from 'services/api';
import { searchRestaurants } from 'functions';
import { Search, RestaurantCard } from 'components';
import { IRestaurant } from 'interfaces/restaurant';

import * as S from './styles';

export function Home() {
  const [searchValue, setSearchValue] = useState('');
  const [restaurants, setRestaurants] = useState<IRestaurant[]>([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState<IRestaurant[]>(
    [],
  );

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

  useEffect(() => {
    setFilteredRestaurants(
      searchRestaurants({ searchValue, allItems: restaurants }),
    );
  }, [searchValue, restaurants]);

  return (
    <S.Container>
      <h1>Bem-vindo ao Lista Rango</h1>

      <Search searchValue={searchValue} setSearchValue={setSearchValue} />

      <S.Content>
        {filteredRestaurants.map(restaurant => (
          <RestaurantCard key={restaurant.id} restaurant={restaurant} />
        ))}
      </S.Content>
    </S.Container>
  );
}
