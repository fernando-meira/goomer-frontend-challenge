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

        <img src={product.image ?? defaultDish} alt={`${product.name} foto`} />
      </S.HeaderModal>

      <S.BodyModal>
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
          <button type="button">
            <AiOutlineMinus />
          </button>

          <p>1</p>

          <button type="button">
            <AiOutlinePlus />
          </button>
        </div>

        <button type="button">
          <p>Adicionar</p>

          {product.price && <p>{formatCurrency(product.price)}</p>}
        </button>
      </S.FooterModal>
    </S.Container>
  );
}
