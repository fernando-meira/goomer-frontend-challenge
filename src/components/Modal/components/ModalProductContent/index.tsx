import { useState } from 'react';
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai';

import { formatCurrency } from 'functions';
import { IMenu, ISale } from 'interfaces/menu';
import defaultDish from 'assets/images/default-dish@2x.png';

import * as S from './styles';

interface ProductWithActivePromotion extends IMenu {
  activePromotion: ISale | null;
}

interface ContentModalProps {
  product: ProductWithActivePromotion;
}

export function ModalProductContent({ product }: ContentModalProps) {
  const [productAmount, setProductAmount] = useState(1);

  const handleChangeAmount = (action: 'increment' | 'decrement') => {
    if (action === 'increment') {
      setProductAmount(productAmount + 1);
    } else if (action === 'decrement' && productAmount > 1) {
      setProductAmount(productAmount - 1);
    }
  };

  const renderTotalPriceButton = () => {
    if (product.activePromotion) {
      return (
        <button type="button">
          <p>Adicionar</p>

          <p>{formatCurrency(productAmount * product.activePromotion.price)}</p>
        </button>
      );
    }
    if (product.price) {
      return (
        <button type="button">
          <p>Adicionar</p>
          <p>{formatCurrency(productAmount * product.price)}</p>
        </button>
      );
    }

    return (
      <button type="button" disabled>
        <p>Produto indísponível</p>
      </button>
    );
  };

  return (
    <>
      <S.BodyModal>
        <img src={product.image ?? defaultDish} alt={`${product.name} foto`} />

        <strong>{product.name}</strong>

        <div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>

          {product.activePromotion?.price ? (
            <>
              {product.price && (
                <span>{formatCurrency(product.activePromotion?.price)}</span>
              )}

              {product.price && <small>{formatCurrency(product.price)}</small>}
            </>
          ) : (
            product.price && <span>{formatCurrency(product.price)}</span>
          )}
        </div>
      </S.BodyModal>

      <S.FooterModal>
        <div>
          <button type="button" onClick={() => handleChangeAmount('decrement')}>
            <AiOutlineMinus />
          </button>

          <p>{productAmount}</p>

          <button type="button" onClick={() => handleChangeAmount('increment')}>
            <AiOutlinePlus />
          </button>
        </div>

        {renderTotalPriceButton()}
      </S.FooterModal>
    </>
  );
}
