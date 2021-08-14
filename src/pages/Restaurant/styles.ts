import styled from 'styled-components';

import { colors } from 'styles/colors';

export const Container = styled.main`
  margin: 0 auto;
  max-width: 1366px;
  padding: 0 4.7rem;

  display: flex;
  flex-direction: column;

  > div {
    margin: 1.5rem 0 1rem;
  }

  @media (max-width: 768px) {
    padding: 0 1.5rem;
  }
`;

export const ContentWrapper = styled.div`
  display: grid;
  grid-gap: 10%;
  grid-template-columns: 65% auto;

  section {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }

  aside {
    width: 100%;
    height: 48rem;
    background-color: ${colors.gray[300]};
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;

    aside {
      display: none;
    }
  }
`;

export const Content = styled.div`
  width: 100%;
  margin-top: 1.5rem;
`;

export const WrapperCards = styled.div`
  padding: 1.5rem 0;

  display: grid;
  grid-gap: 1.5rem 1.857rem;
  grid-template-columns: repeat(2, 1fr);

  @media (max-width: 1280px) {
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
  }

  @media (max-width: 768px) {
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
  }
`;
