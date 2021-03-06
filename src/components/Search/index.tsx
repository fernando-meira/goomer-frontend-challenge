import { useRef } from 'react';

import searchIcon from 'assets/icons/search.svg';

import * as S from './styles';

interface SearchProps {
  labelText?: string;
  searchValue: string;
  backgroundColor?: string;
  setSearchValue: (param: string) => void;
}

export function Search({
  labelText,
  searchValue,
  setSearchValue,
  backgroundColor,
}: SearchProps) {
  const searchInput = useRef<HTMLInputElement>(null);

  return (
    <S.Container backgroundColor={backgroundColor}>
      <S.LabelWrapper onClick={() => searchInput.current?.focus()}>
        <span>{labelText ?? 'Buscar estabelecimento'}</span>
      </S.LabelWrapper>

      <input
        type="text"
        ref={searchInput}
        value={searchValue}
        onChange={event => setSearchValue(event.target.value)}
        placeholder={labelText ?? 'Buscar estabelecimento'}
      />

      <button type="button">
        <img src={searchIcon} alt="Magnifying glass" />
      </button>
    </S.Container>
  );
}
