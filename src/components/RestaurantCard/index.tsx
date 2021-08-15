import { useEffect, useState } from 'react';

import { IRestaurant } from 'interfaces/restaurant';
import { checkIfRestaurantIsOpen } from 'functions';
import defaultRestaurantImage from 'assets/images/default-restaurant-logo.png';

import * as S from './styles';

interface RestaurantCardProps {
  restaurant: IRestaurant;
}

export function RestaurantCard({ restaurant }: RestaurantCardProps) {
  const [isOpen, setIsOpen] = useState(false);

  const numberOfHours = restaurant.hours?.length || 0;

  useEffect(() => {
    function handleIsOpen() {
      setIsOpen(
        numberOfHours > 0
          ? checkIfRestaurantIsOpen({
              hours: restaurant.hours,
            })
          : false,
      );

      setInterval(
        () => {
          setIsOpen(
            numberOfHours > 0
              ? checkIfRestaurantIsOpen({
                  hours: restaurant.hours,
                })
              : false,
          );
        },
        1000 * 30, // Thirty seconds
      );
    }

    handleIsOpen();
  }, [restaurant.hours, numberOfHours]);

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
