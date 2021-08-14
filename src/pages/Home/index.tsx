import { useState, useEffect } from 'react';

import { searchRestaurants } from 'functions';
import { IRestaurant } from 'interfaces/restaurant';
import { Search, Loader, RestaurantCard } from 'components';
import { getRestaurants } from 'services/api/functions';

import * as S from './styles';

export function Home() {
  const [loading, setLoading] = useState(true);
  const [searchValue, setSearchValue] = useState('');
  const [restaurants, setRestaurants] = useState<IRestaurant[]>([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState<IRestaurant[]>(
    [],
  );

  async function fetchRestaurants() {
    try {
      const restaurantsData = await getRestaurants();

      setRestaurants(restaurantsData);
    } catch (error) {
      throw new Error(error.message);
      // Need to handle the error.
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchRestaurants();
  }, []);

  useEffect(() => {
    setFilteredRestaurants(
      searchRestaurants({ searchValue, allItems: restaurants }),
    );
  }, [searchValue, restaurants]);

  return (
    <S.Container>
      <h1>Bem-vindo ao Lista Rango</h1>

      <Search searchValue={searchValue} setSearchValue={setSearchValue} />

      {loading ? (
        <Loader />
      ) : (
        <S.Content>
          {filteredRestaurants.map(restaurant => (
            <RestaurantCard key={restaurant.id} restaurant={restaurant} />
          ))}
        </S.Content>
      )}
    </S.Container>
  );
}
