import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai';

import xIcon from 'assets/images/x-icon.jpg';
import defaultDish from 'assets/images/default-dish@2x.png';

import * as S from './styles';

interface ModalProps {
  isOpen: boolean;
  closeModal: () => void;
}

export function Modal({ isOpen, closeModal }: ModalProps) {
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

        <img src={defaultDish} alt="dish" />
      </S.HeaderModal>

      <S.BodyModal>
        <strong>Nome do prato</strong>

        <div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>

          <span>R$ 19,90</span>
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

          <p>R$ 19,90</p>
        </button>
      </S.FooterModal>
    </S.Container>
  );
}
