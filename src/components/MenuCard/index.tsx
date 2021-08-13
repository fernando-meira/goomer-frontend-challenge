import award from 'assets/icons/award.svg';
import defaultDish from 'assets/images/default-dish.png';

import * as S from './styles';

export function MenuCard() {
  return (
    <S.Container>
      <S.ImageWrapper>
        <img src={defaultDish} alt="default-dish" />
      </S.ImageWrapper>

      <S.Content>
        <strong>Nome do Prato</strong>

        <S.PromotionTag>
          <img src={award} alt="Promotion tag" />

          <small>Promo Almoço</small>
        </S.PromotionTag>

        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do</p>

        <div>
          <p>R$ 19,90</p> <span>R$ 19,90</span>
        </div>
      </S.Content>
    </S.Container>
  );
}
