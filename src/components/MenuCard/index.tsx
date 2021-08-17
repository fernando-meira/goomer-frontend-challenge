import { useState, useCallback, useEffect, useMemo } from 'react';
import { AiFillLock } from 'react-icons/ai';

import { Modal } from 'components';
import { colors } from 'styles/colors';
import { IMenu } from 'interfaces/menu';
import award from 'assets/icons/award.svg';
import defaultDish from 'assets/images/default-dish.png';
import { activePromotion, formatCurrency } from 'functions';
import { ModalProductContent } from '../Modal/components/ModalProductContent';

import * as S from './styles';

interface MenuCardProps {
  product: IMenu;
}

export function MenuCard({ product }: MenuCardProps) {
  const [isBlocked, setIsBlocked] = useState(false);
  const [isModalOpen, setModalVisibility] = useState(false);

  const promotion = useMemo(
    () =>
      activePromotion({
        sales: product.sales,
      }),
    [product],
  );

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
    if (promotion && product.price) {
      return (
        <>
          <p>{formatCurrency(promotion.price)}</p>

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

        <p>Produto sem valor</p>
      </>
    );
  }, [product.price, promotion]);

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

          {!!promotion && (
            <S.PromotionTag>
              <img src={award} alt="Promotion tag" />

              <small>{promotion.description}</small>
            </S.PromotionTag>
          )}

          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do</p>

          <div>{renderPrice()}</div>
        </S.Content>
      </S.Container>

      {isModalOpen && (
        <Modal isOpen={isModalOpen} closeModal={toggleModal}>
          <ModalProductContent
            product={{ ...product, activePromotion: promotion }}
          />
        </Modal>
      )}
    </>
  );
}
