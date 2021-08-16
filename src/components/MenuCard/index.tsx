import { useState, useCallback, useEffect } from 'react';
import { AiFillLock } from 'react-icons/ai';

import { Modal } from 'components';
import { IMenu } from 'interfaces/menu';
import { formatCurrency } from 'functions';
import award from 'assets/icons/award.svg';
import defaultDish from 'assets/images/default-dish.png';

import { colors } from 'styles/colors';
import * as S from './styles';

interface MenuCardProps {
  product: IMenu;
}

export function MenuCard({ product }: MenuCardProps) {
  const [isBlocked, setIsBlocked] = useState(false);
  const [isModalOpen, setModalVisibility] = useState(false);

  const toggleModal = useCallback(() => {
    if (isBlocked) {
      return;
    }

    setModalVisibility(!isModalOpen);
  }, [isModalOpen, isBlocked]);

  useEffect(() => {
    if (!product.price) {
      setIsBlocked(true);
    }
  }, [setIsBlocked, product.price]);

  const renderPrice = useCallback(() => {
    if (product.sales && product.price) {
      return (
        <>
          <p>{formatCurrency(product.sales[0].price)}</p>

          <span>{formatCurrency(product.price)}</span>
        </>
      );
    }

    if (product.price) {
      return <p>{formatCurrency(product.price)}</p>;
    }

    return (
      <>
        <AiFillLock color={colors.green[500]} size="1rem" />

        <p>Produto indisponível</p>
      </>
    );
  }, [product.sales, product.price]);

  return (
    <>
      <S.Container onClick={toggleModal} disabled={isBlocked}>
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

          <div>{renderPrice()}</div>
        </S.Content>
      </S.Container>

      {isModalOpen && (
        <Modal
          product={product}
          isOpen={isModalOpen}
          closeModal={toggleModal}
        />
      )}
    </>
  );
}
