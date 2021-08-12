import styled from 'styled-components';

export const Container = styled.main`
  margin: 0 auto;
  max-width: 1366px;
  padding: 0 4.7rem;

  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;

  h1 {
    margin: 2rem 0;

    font-weight: 500;
    font-size: 1.5rem;
  }
`;

export const Content = styled.div`
  width: 100%;
  margin-top: 2.875rem;

  display: grid;
  grid-gap: 2.125rem 3rem;
  grid-template-columns: repeat(3, 1fr);
`;
