import styled from 'styled-components';
import Modal from 'react-modal';

import { colors } from 'styles/colors';

export const Container = styled(Modal)`
  top: 50%;
  left: 50%;
  position: absolute;
  transform: translate(-50%, -50%);

  width: 90%;
  max-width: 37.5rem;
  border-radius: 0.5rem;
  box-shadow: 0px 4px 8px ${colors.gray[900]};

  display: flex;
  align-items: center;
  flex-direction: column;

  background-color: ${colors.white};
`;

export const HeaderModal = styled.header`
  position: relative;

  width: 100%;
`;

export const CloseModalButton = styled.button`
  top: -1.5rem;
  right: -1.5rem;
  position: absolute;

  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  box-shadow: 0px 2px 4px ${colors.gray[900]};

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: ${colors.white};

  img {
    width: 1.5rem;
    height: 1.5rem;
  }
`;
