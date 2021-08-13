import { Search, RestaurantInfo } from 'components';
import { colors } from 'styles/colors';

import * as S from './styles';

export function Restaurant() {
  return (
    <S.Container>
      <RestaurantInfo />

      <div className="grid-template">
        <section>
          <Search backgroundColor={colors.gray[300]} />
        </section>

        <aside />
      </div>
    </S.Container>
  );
}
