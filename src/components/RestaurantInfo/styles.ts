import styled from 'styled-components';

export const Container = styled.div`
  max-width: 43.5rem;

  display: flex;
  align-items: center;
  flex-direction: row;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const ImageWrapper = styled.div`
  height: auto;
  width: 9.0625rem;
  margin-right: 1.3rem;

  > img {
    width: 100%;
    height: 100%;

    object-fit: contain;
  }
`;

export const Content = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;

  strong {
    margin-bottom: 0.25rem;

    font-weight: 500;
    font-size: 1.5rem;
  }

  p {
    margin-bottom: 0.175rem;

    font-size: 1rem;
  }

  span {
    font-size: 0.75rem;

    > time {
      margin-left: 0.25rem;

      font-weight: 600;
    }
  }
`;
