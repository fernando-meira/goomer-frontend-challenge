import { colors } from 'styles/colors';
import { Search, Accordion, RestaurantInfo, MenuCard } from 'components';

import * as S from './styles';

export function Restaurant() {
  const menuCategories = [
    { id: 1, group: 'Almoços' },
    { id: 2, group: 'Bebidas' },
    { id: 3, group: 'Sobremesas' },
    { id: 4, group: 'Acompanhamentos' },
  ];

  return (
    <S.Container>
      <RestaurantInfo />

      <div className="grid-template">
        <section>
          <Search backgroundColor={colors.gray[300]} />

          <S.Content>
            {menuCategories.map(category => (
              <Accordion key={category.id} category={category.group}>
                <S.WrapperCards>
                  <MenuCard />

                  <MenuCard />

                  <MenuCard />
                </S.WrapperCards>
              </Accordion>
            ))}
          </S.Content>
        </section>

        <aside />
      </div>
    </S.Container>
  );
}
