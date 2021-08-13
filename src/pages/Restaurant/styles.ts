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

  .grid-template {
    display: grid;
    grid-gap: 8rem;
    grid-template-columns: 51rem auto;

    section {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
    }

    aside {
      background-color: ${colors.gray[300]};
    }
  }
`;

export const Content = styled.div`
  width: 100%;
  margin-top: 1.5rem;
`;
