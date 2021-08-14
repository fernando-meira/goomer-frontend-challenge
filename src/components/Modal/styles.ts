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

  padding: 1.5rem;

  > img {
    width: 100%;
    height: auto;
  }
`;

export const BodyModal = styled.div`
  width: 100%;
  padding: 1rem;

  > strong {
    font-weight: 500;
    font-size: 1.5rem;
  }

  > div {
    display: flex;
    align-items: flex-end;
    justify-content: space-between;

    > p {
      width: 100%;
      max-width: 23.75rem;
    }

    > span {
      font-size: 2rem;
      font-weight: 500;
      white-space: nowrap;
      color: ${colors.green[500]};
    }
  }
`;

export const FooterModal = styled.footer`
  width: 100%;
  padding: 1.5rem 0.75rem 1.25rem;
  border-top: 1px solid ${colors.gray[300]};

  display: flex;
  align-items: center;
  justify-content: space-between;

  > div {
    width: 7.8rem;
    height: 3.125rem;
    border-radius: 4px;
    border: 1px solid ${colors.gray[300]};

    display: flex;
    align-items: center;
    justify-content: space-evenly;

    > button {
      > svg {
        font-size: 1.5rem;
        color: ${colors.green[500]};
      }
    }

    > p {
      font-weight: 500;
      font-size: 1.25rem;
      color: ${colors.green[500]};
    }
  }

  > button {
    width: 100%;
    height: 3.125rem;
    max-width: 16.5rem;
    border-radius: 4px;

    display: flex;
    align-items: center;
    justify-content: space-around;

    background-color: ${colors.green[500]};

    > p {
      font-weight: 500;
      font-size: 1.5rem;
      color: ${colors.white};
    }
  }
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
