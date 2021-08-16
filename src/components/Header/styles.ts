import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { colors } from 'styles/colors';

export const Header = styled.header`
  width: 100vw;
  height: 3.875rem;
  box-shadow: 0px 4px 8px ${colors.gray[900]};

  background-color: ${colors.green[500]};
`;

export const Container = styled.div`
  width: 100%;
  height: 100%;
  margin: 0 auto;
  padding: 0 4.7rem;
  max-width: 1366px;

  display: flex;
  align-items: center;

  @media (max-width: 1024px) {
    padding: 0 3.5rem;
  }

  @media (max-width: 768px) {
    padding: 0 1.5rem;
  }
`;

export const GoBackButton = styled(Link)`
  padding: 0.5rem;
  border-radius: 50%;
  box-shadow: 0px 4px 8px ${colors.gray[900]};

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: ${colors.white};

  svg {
    font-size: 1.5rem;
    color: ${colors.green[500]};
  }
`;
