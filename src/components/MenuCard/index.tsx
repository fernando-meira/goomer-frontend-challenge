import { useState, useCallback } from 'react';

import { Modal } from 'components';
import { IMenu } from 'interfaces/menu';
import { formatCurrency } from 'functions';
import award from 'assets/icons/award.svg';
import defaultDish from 'assets/images/default-dish.png';

import * as S from './styles';

interface MenuCardProps {
  product: IMenu;
}

export function MenuCard({ product }: MenuCardProps) {
  const [isModalOpen, setModalVisibility] = useState(false);

  const toggleModal = useCallback(() => {
    setModalVisibility(!isModalOpen);
  }, [isModalOpen]);

  return (
    <>
      <S.Container onClick={toggleModal}>
        <S.ImageWrapper>
          <img
            src={product.image ?? defaultDish}
            alt={`${product.name} foto`}
          />
        </S.ImageWrapper>

        <S.Content>
          <strong>{product.name}</strong>

          {product.sales && (
            <S.PromotionTag>
              <img src={award} alt="Promotion tag" />

              <small>{product.sales[0].description}</small>
            </S.PromotionTag>
          )}

          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do</p>

          <div>
            {product.sales ? (
              <>
                <p>{formatCurrency(product.sales[0].price)}</p>{' '}
                <span>{formatCurrency(product.price)}</span>
              </>
            ) : (
              <p>{formatCurrency(product.price)}</p>
            )}
          </div>
        </S.Content>
      </S.Container>

      {isModalOpen && <Modal isOpen={isModalOpen} closeModal={toggleModal} />}
    </>
  );
}
