import styled from 'styled-components';

import { colors } from 'styles/colors';

export const BodyModal = styled.div`
  width: 100%;
  padding: 1rem;

  display: flex;
  flex-direction: column;

  > img {
    width: 100%;
    height: 12.25rem;
    margin-bottom: 2.875rem;

    object-fit: cover;
  }

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

    small {
      font-size: 0.75rem;
      color: ${colors.gray[600]};
      text-decoration: line-through;
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

    :disabled {
      opacity: 0.5;

      p {
        font-size: 1rem;
      }
    }
  }
`;
