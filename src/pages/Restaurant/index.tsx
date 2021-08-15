import { useState, useEffect, useCallback } from 'react';
import { useParams } from 'react-router-dom';

import {
  Loader,
  Search,
  MenuCard,
  Accordion,
  RestaurantInfo,
} from 'components';
import { colors } from 'styles/colors';
import { IMenu } from 'interfaces/menu';
import { getRestaurantMenu } from 'services/api/functions';

import * as S from './styles';

export function Restaurant() {
  const { id } = useParams<{ id: string }>();

  const [loading, setLoading] = useState(true);
  const [menu, setMenu] = useState<IMenu[]>([]);
  const [searchValue, setSearchValue] = useState('');

  useEffect(() => {
    async function fetchMenu() {
      setLoading(true);
      try {
        const menuData = await getRestaurantMenu({ id });

        setMenu(menuData);
      } catch (error) {
        throw new Error(error.message);
        // I need to handle the error.
      } finally {
        setLoading(false);
      }
    }

    fetchMenu();
  }, [id]);

  const renderContent = useCallback(() => {
    if (loading) return <Loader />;

    if (menu.length > 0)
      return (
        <S.Content>
          {menu.map(category => (
            <Accordion key={category.name} category={category?.group}>
              <S.WrapperCards>
                <MenuCard />

                <MenuCard />

                <MenuCard />
              </S.WrapperCards>
            </Accordion>
          ))}
        </S.Content>
      );

    return (
      <S.MenuWithoutItemsWrapper>
        <p>Nada para listar.</p>
      </S.MenuWithoutItemsWrapper>
    );
  }, [loading, menu]);

  return (
    <S.Container>
      <RestaurantInfo />

      <S.ContentWrapper>
        <section>
          <Search
            searchValue={searchValue}
            labelText="Buscar no cardápio"
            setSearchValue={setSearchValue}
            backgroundColor={colors.gray[300]}
          />

          {renderContent()}
        </section>

        <aside />
      </S.ContentWrapper>
    </S.Container>
  );
}
