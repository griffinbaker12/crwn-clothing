import { FC, memo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectCartItems } from '../../store/cart/cart.selector';
import { clearItem, addItem, removeItem } from '../../store/cart/cart.action';
import { CartItem } from '../../store/cart/cart.types';
import {
  CheckoutItemContainer,
  ImageContainer,
  BaseSpan,
  Quantity,
  Value,
  RemoveButton,
  LeftArrow,
  RightArrow,
} from './checkout-item.styles';

type CheckoutItemProps = {
  item: CartItem;
};

const CheckoutItem: FC<CheckoutItemProps> = memo(({ item }) => {
  const { name, imageUrl, price, quantity } = item;
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);

  const removeItemHandler = () => dispatch(removeItem(cartItems, item));
  const addItemHandler = () => dispatch(addItem(cartItems, item));
  const clearItemHandler = () => dispatch(clearItem(cartItems, item));

  return (
    <CheckoutItemContainer>
      <ImageContainer>
        <img src={imageUrl} alt={`${name}`} />
      </ImageContainer>
      <BaseSpan>{name}</BaseSpan>
      <Quantity>
        <LeftArrow onClick={removeItemHandler}>&#10094;</LeftArrow>
        <Value>{quantity}</Value>
        <RightArrow onClick={addItemHandler}>&#10095;</RightArrow>
      </Quantity>
      <BaseSpan>${price}</BaseSpan>
      <RemoveButton onClick={clearItemHandler}>&#10005;</RemoveButton>
    </CheckoutItemContainer>
  );
});

export default CheckoutItem;
