import defaultRestaurantImage from 'assets/images/default-restaurant-logo.png';

import * as S from './styles';

interface RestaurantCardProps {
  isOpen?: boolean;
}

export function RestaurantCard({ isOpen }: RestaurantCardProps) {
  return (
    <S.Container to="/estabelecimento">
      <S.ImageWrapper>
        <img src={defaultRestaurantImage} alt="restaurant-logo" />
      </S.ImageWrapper>

      <S.Content>
        <strong>Nome do Restaurante</strong>

        <p>Endereço do restaurante</p>
      </S.Content>

      <S.Tag isOpen={isOpen}>
        <p>{isOpen ? 'Aberto agora' : 'Fechado'}</p>
      </S.Tag>
    </S.Container>
  );
}
