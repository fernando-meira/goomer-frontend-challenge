import { useState } from 'react';
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai';

import { IMenu } from 'interfaces/menu';
import { formatCurrency } from 'functions';
import xIcon from 'assets/images/x-icon.jpg';
import defaultDish from 'assets/images/default-dish@2x.png';

import * as S from './styles';

interface ModalProps {
  product: IMenu;
  isOpen: boolean;
  closeModal: () => void;
}

export function Modal({ isOpen, product, closeModal }: ModalProps) {
  const [productAmount, setProductAmount] = useState(1);

  const handleChangeAmount = (action: 'increment' | 'decrement') => {
    if (action === 'increment') {
      setProductAmount(productAmount + 1);
    } else if (action === 'decrement' && productAmount > 1) {
      setProductAmount(productAmount - 1);
    }
  };

  return (
    <S.Container
      isOpen={isOpen}
      ariaHideApp={false}
      onRequestClose={closeModal}
    >
      <S.HeaderModal>
        <S.CloseModalButton onClick={closeModal}>
          <img src={xIcon} alt="x-icon" />
        </S.CloseModalButton>
      </S.HeaderModal>

      <S.BodyModal>
        <img src={product.image ?? defaultDish} alt={`${product.name} foto`} />

        <strong>{product.name}</strong>

        <div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>

          {product.price && <span>{formatCurrency(product.price)}</span>}
        </div>
      </S.BodyModal>

      <S.FooterModal>
        <div>
          <button type="button" onClick={() => handleChangeAmount('decrement')}>
            <AiOutlineMinus />
          </button>

          <p>{productAmount}</p>

          <button type="button" onClick={() => handleChangeAmount('increment')}>
            <AiOutlinePlus />
          </button>
        </div>

        <button type="button">
          <p>Adicionar</p>

          {product.price && (
            <p>{formatCurrency(productAmount * product.price)}</p>
          )}
        </button>
      </S.FooterModal>
    </S.Container>
  );
}
