import { useLocation } from 'react-router-dom';
import { BsArrowLeftShort } from 'react-icons/bs';

import * as S from './styles';

export function Header() {
  const { pathname } = useLocation();

  return (
    <S.Header>
      {pathname !== '/' && (
        <S.Container>
          <S.GoBackButton to="/">
            <BsArrowLeftShort />
          </S.GoBackButton>
        </S.Container>
      )}
    </S.Header>
  );
}
