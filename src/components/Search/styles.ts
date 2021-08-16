import styled from 'styled-components';

import { colors } from 'styles/colors';

interface ContainerProps {
  backgroundColor?: string;
}

export const Container = styled.div<ContainerProps>`
  width: 100%;
  height: 2.5rem;
  max-width: 52.5rem;
  border-radius: 2.8rem;
  box-shadow: 0px 2px 4px ${colors.gray[900]};

  display: flex;
  align-items: center;

  background-color: ${({ backgroundColor }) =>
    backgroundColor || colors.gray[100]};

  > input {
    border: none;
    padding: 0.5rem 1rem;

    flex: 1;

    background-color: transparent;

    ::placeholder {
      color: transparent;
    }
  }

  > button {
    margin: 0.75rem 1.2rem;

    display: flex;
    align-items: center;
    justify-content: center;
  }

  @media (max-width: 1024px) {
    width: 100%;
  }

  @media (max-width: 768px) {
    > input {
      padding: 0.5rem 2rem;

      ::placeholder {
        color: ${colors.gray[700]};
      }
    }
  }

  @media (max-width: 280px) {
    > button {
      display: none;
    }
  }
`;

export const LabelWrapper = styled.div`
  width: 100%;
  height: 100%;
  max-width: 16.25rem;
  border-radius: 1.5rem 0 0 1.5rem;

  display: flex;
  align-items: center;
  justify-content: center;

  cursor: pointer;
  background-color: ${colors.white};

  > span {
    font-size: 1rem;
    font-weight: 500;
    white-space: nowrap;
    text-overflow: ellipsis;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;
