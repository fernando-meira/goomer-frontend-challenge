import { Search, RestaurantCard } from 'components';

import * as S from './styles';

export function Home() {
  return (
    <S.Container>
      <h1>Bem-vindo ao Lista Rango</h1>

      <Search />

      <S.Content>
        <RestaurantCard />

        <RestaurantCard isOpen />

        <RestaurantCard />
      </S.Content>
    </S.Container>
  );
}
