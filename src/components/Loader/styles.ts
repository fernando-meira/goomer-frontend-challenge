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

export const Container = styled(VscLoading)`
  margin-top: 2rem;

  display: block;

  font-size: 2rem;
  color: ${colors.green[500]};
  animation: ${rotate} 0.8s linear infinite;
`;
