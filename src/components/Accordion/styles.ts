import styled from 'styled-components';

import { colors } from 'styles/colors';

export const Container = styled.div`
  width: 100%;
  height: auto;

  background-color: transparent;
`;

export const AccordionWrapper = styled.button.attrs(() => {
  'button';
})`
  width: 98%;
  margin-left: 2%;
  padding: 0.75rem 2.125rem 0.75rem 0.875rem;
  border-bottom: 1px solid ${colors.gray[700]};

  display: flex;
  align-items: center;
  justify-content: space-between;

  > p {
    font-weight: 600;
    text-transform: capitalize;
  }
`;

export const Icon = styled.img<{ isActive: boolean }>`
  transition: transform 0.3s;

  transform: ${({ isActive }) =>
    isActive ? 'rotate(0deg)' : 'rotate(-90deg)'};
`;

export const Content = styled.div<{ isActive?: boolean }>`
  width: 100%;

  display: ${({ isActive }) => !isActive && 'none'};
`;
