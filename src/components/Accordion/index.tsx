import { useState, ReactElement } from 'react';

import chevron from 'assets/icons/chevron.svg';

import * as S from './styles';

interface AccordionProps {
  category: string;
  children?: ReactElement;
}

export function Accordion({ children, category }: AccordionProps) {
  const [isActive, setIsActive] = useState(false);

  function handleActive() {
    setIsActive(!isActive);
  }

  return (
    <S.Container>
      <S.AccordionWrapper onClick={handleActive}>
        <p>{category}</p>

        <S.Icon src={chevron} alt="icon-chevron" isActive={isActive} />
      </S.AccordionWrapper>

      <S.Content isActive={isActive}>{children}</S.Content>
    </S.Container>
  );
}
