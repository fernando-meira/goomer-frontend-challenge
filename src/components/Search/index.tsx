import { useRef } from 'react';

import searchIcon from 'assets/icons/search.svg';

import * as S from './styles';

interface SearchProps {
  backgroundColor?: string;
}

export function Search({ backgroundColor }: SearchProps) {
  const searchInput = useRef<HTMLInputElement>(null);

  return (
    <S.Container backgroundColor={backgroundColor}>
      <S.LabelWrapper onClick={() => searchInput.current?.focus()}>
        <span>Buscar estabelecimento</span>
      </S.LabelWrapper>

      <input
        type="text"
        ref={searchInput}
        placeholder="Buscar estabelecimento"
      />

      <button type="button">
        <img src={searchIcon} alt="Magnifying glass" />
      </button>
    </S.Container>
  );
}
