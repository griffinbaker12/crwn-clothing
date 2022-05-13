import { FC, memo } from 'react';
import { CartItemContainer, ItemDetails } from './cart-item.styles';
import { CartItem as _CartItem } from '../../store/cart/cart.types';

type CartItemProps = {
  item: _CartItem;
};

const CartItem: FC<CartItemProps> = memo(({ item }) => {
  const { name, imageUrl, price, quantity } = item;
  return (
    <CartItemContainer>
      <img src={imageUrl} alt={`${name}`} />
      <ItemDetails>
        <span>{name}</span>
        <span>
          {quantity} x ${price}
        </span>
      </ItemDetails>
    </CartItemContainer>
  );
});

export default CartItem;
