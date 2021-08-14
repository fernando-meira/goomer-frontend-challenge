import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { colors } from 'styles/colors';

interface TagProps {
  isOpen?: boolean;
}

export const Container = styled(Link)`
  position: relative;

  width: 100%;
  height: 6.25rem;
  border-radius: 0.25rem;
  box-shadow: 0px 2px 4px ${colors.gray[800]};

  display: flex;
  align-items: center;
  transition: transform 0.2s;
  background-color: ${colors.white};

  :hover {
    transform: translateX(0.25rem);
  }
`;

export const ImageWrapper = styled.div`
  width: 6.25rem;
  height: 6.25rem;

  > img {
    width: 100%;
    height: 100%;
    border-top-left-radius: 4px;
    border-bottom-left-radius: 4px;

    object-fit: cover;
  }
`;

export const Content = styled.div`
  padding: 0.5rem;
  padding-left: 1.5rem;

  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;

  > strong {
    overflow: hidden;

    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;

    font-size: 1rem;
    font-weight: 500;
    text-overflow: ellipsis;
  }

  > p {
    font-weight: 400;
    font-size: 0.75rem;
  }
`;

export const Tag = styled.span<TagProps>`
  top: -1rem;
  right: -1rem;
  position: absolute;

  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  box-shadow: 0px 1px 2px ${colors.gray[900]};

  display: flex;
  align-items: center;
  justify-content: center;

  text-align: center;
  background-color: ${({ isOpen }) =>
    isOpen ? colors.purple[500] : colors.purple[100]};

  p {
    font-weight: 700;
    font-size: 0.5rem;
    color: ${colors.white};
  }
`;
