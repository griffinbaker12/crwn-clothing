import { useDispatch } from 'react-redux';

import { clearItem, addItem, removeItem } from '../../store/cart/cart.action';

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

const CheckoutItem = ({ item }) => {
  const { name, imageUrl, price, quantity } = item;

  const dispatch = useDispatch();

  const removeItemHandler = () => dispatch(removeItem(item));

  const addItemHandler = () => dispatch(addItem(item));

  const clearItemHandler = () => dispatch(clearItem(item));

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
