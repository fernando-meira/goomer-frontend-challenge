import defaultRestaurantImage from 'assets/images/default-restaurant-logo.png';
import { IRestaurant } from 'interfaces/restaurant';

import * as S from './styles';

interface RestaurantCardProps {
  isOpen?: boolean;
  restaurant: IRestaurant;
}

export function RestaurantCard({ isOpen, restaurant }: RestaurantCardProps) {
  return (
    <S.Container to={`estabelecimento/${restaurant.id}`}>
      <S.ImageWrapper>
        <img
          src={restaurant.image ?? defaultRestaurantImage}
          alt={`Logo do restaurante ${restaurant.name}`}
        />
      </S.ImageWrapper>

      <S.Content>
        <strong>{restaurant.name}</strong>

        <p>{restaurant.address}</p>
      </S.Content>

      <S.Tag isOpen={isOpen}>
        <p>{isOpen ? 'Aberto agora' : 'Fechado'}</p>
      </S.Tag>
    </S.Container>
  );
}
