import { colors } from 'styles/colors';
import { Search, Accordion, RestaurantInfo } from 'components';

import * as S from './styles';

export function Restaurant() {
  return (
    <S.Container>
      <RestaurantInfo />

      <div className="grid-template">
        <section>
          <Search backgroundColor={colors.gray[300]} />

          <Accordion />
        </section>

        <aside />
      </div>
    </S.Container>
  );
}
