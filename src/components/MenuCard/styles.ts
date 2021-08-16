import styled from 'styled-components';
import { colors } from 'styles/colors';

export const Container = styled.button`
  position: relative;

  width: 100%;
  height: auto;
  max-width: 24.5rem;
  box-shadow: 0px 4px 8px ${colors.gray[900]};

  display: flex;
  align-items: center;

  transition: transform 0.2s;
  background-color: ${colors.white};

  :hover {
    transform: translateX(0.25rem);
  }

  :disabled {
    opacity: 0.5;

    transform: none;
  }

  @media (max-width: 1280px) {
    max-width: 100%;
  }
`;

export const ImageWrapper = styled.div`
  width: 7.2rem;
  height: 7.2rem;

  > img {
    width: 100%;
    height: 100%;

    object-fit: cover;
  }
`;

export const Content = styled.div`
  padding: 1rem;

  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;

  text-align: left;

  > strong {
    overflow: hidden;

    margin-bottom: 0.5rem;

    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;

    font-size: 1rem;
    font-weight: 500;
    text-overflow: ellipsis;
  }

  > p {
    margin-bottom: 0.5rem;

    font-weight: 400;
    font-size: 0.75rem;
  }

  > div {
    display: flex;
    align-items: center;

    > p {
      font-weight: 500;
      color: ${colors.green[500]};
    }

    p + span {
      margin-left: 0.25rem;

      font-size: 0.75rem;
      color: ${colors.gray[600]};
      text-decoration: line-through;
    }

    > svg + p {
      margin-left: 0.25rem;

      font-size: 0.75rem;
    }
  }

  @media (max-width: 1280px) {
    padding: 0.75rem;
  }
`;

export const PromotionTag = styled.span`
  top: 0.6rem;
  right: 0.5rem;
  position: absolute;

  border-radius: 0.75rem;
  padding: 0.25rem 0.75rem;

  display: flex;
  align-items: center;

  color: ${colors.white};
  background: ${colors.purple[500]};

  img + small {
    margin-left: 0.25rem;

    font-weight: 700;
    font-size: 0.5rem;
  }
`;
