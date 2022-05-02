import { useContext } from 'react';

import { CartContext } from '../../contexts/cart.context';

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

import { CART_ACTION_TYPES } from '../../contexts/cart.context';

const CheckoutItem = ({ item }) => {
  const { name, imageUrl, price, quantity } = item;

  const { dispatch } = useContext(CartContext);

  const clearItemHandler = () =>
    dispatch({ type: CART_ACTION_TYPES.CLEAR_ITEM, payload: item });
  const addItemHandler = () =>
    dispatch({ type: CART_ACTION_TYPES.ADD_ITEM, payload: item });
  const removeItemHandler = () =>
    dispatch({ type: CART_ACTION_TYPES.REMOVE_ITEM, payload: item });

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
};

export default CheckoutItem;
