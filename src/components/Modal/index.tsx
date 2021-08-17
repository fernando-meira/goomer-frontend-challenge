import { ReactElement } from 'react';

import xIcon from 'assets/images/x-icon.jpg';

import * as S from './styles';

interface ModalProps {
  isOpen: boolean;
  children: ReactElement;
  closeModal: () => void;
}

export function Modal({ isOpen, closeModal, children }: ModalProps) {
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

      {children}
    </S.Container>
  );
}
