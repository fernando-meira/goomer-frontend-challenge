import styled, { keyframes } from 'styled-components';
import { VscLoading } from 'react-icons/vsc';

import { colors } from 'styles/colors';

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

export const Container = styled.div`
  width: 100%;
  margin-top: 2rem;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Icon = styled(VscLoading)`
  font-size: 2rem;
  color: ${colors.green[500]};
  animation: ${rotate} 0.8s linear infinite;
`;
