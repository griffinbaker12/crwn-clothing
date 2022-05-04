import Button, { BUTTON_TYPE_CLASSES } from '../button/button.component';

import { ProductCartContainer, Footer, Name } from './product-card.styles';
import { useDispatch } from 'react-redux';
import { addItem } from '../../store/cart/cart.action';

const ProductCard = ({ product }) => {
  const { name, price, imageUrl } = product;
  const dispatch = useDispatch();

  const addProductToCart = () => dispatch(addItem(product));

  return (
    <ProductCartContainer>
      <img src={imageUrl} alt={`${name}`} />
      <Footer>
        <Name>{name}</Name>
        <span>${price}</span>
      </Footer>
      <Button
        buttonType={BUTTON_TYPE_CLASSES.inverted}
        onClick={addProductToCart}
      >
        Add to cart
      </Button>
    </ProductCartContainer>
  );
};

export default ProductCard;
