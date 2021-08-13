import defaultRestaurantLogo from 'assets/images/png/default-restaurant-logo@2x.png';

import * as S from './styles';

export function RestaurantInfo() {
  return (
    <S.Container>
      <S.ImageWrapper>
        <img src={defaultRestaurantLogo} alt="restaurant-logo" />
      </S.ImageWrapper>

      <S.Content>
        <strong>Nome do Restaurante</strong>

        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>

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
