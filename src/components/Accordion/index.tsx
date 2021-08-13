import { useState, useCallback } from 'react';

import chevron from 'assets/icons/chevron.svg';

import * as S from './styles';

export function Accordion() {
  const [isActive, setIsActive] = useState(false);

  const handleActive = useCallback(() => {
    setIsActive(!isActive);
  }, [isActive]);

  return (
    <S.Container onClick={handleActive}>
      <S.AccordionWrapper>
        <p>Accordion</p>

        <S.Icon src={chevron} alt="icon-chevron" isActive={isActive} />
      </S.AccordionWrapper>

      <S.Content isActive={isActive}>
        <h1>Cards do menu</h1>
      </S.Content>
    </S.Container>
  );
}
