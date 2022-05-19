import Button, { BUTTON_TYPE_CLASSES } from '../button/button.component';
import { FC } from 'react';
import { CategoryItem } from '../../store/categories/categories.types';
import { ProductCartContainer, Footer, Name } from './product-card.styles';
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from '../../store/cart/cart.action';
import { selectCartItems } from '../../store/cart/cart.selector';
import { selectTheme } from '../../store/theme/theme.selector';

type ProductCardProps = {
  product: CategoryItem;
};

const ProductCard: FC<ProductCardProps> = ({ product }) => {
  const { name, price, imageUrl } = product;
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);
  const theme = useSelector(selectTheme);

  const addProductToCart = () => dispatch(addItem(cartItems, product));

  return (
    <ProductCartContainer theme={theme}>
      <img src={imageUrl} alt={`${name}`} />
      <Footer>
        <Name>{name}</Name>
        <span style={{ display: 'inline-block', marginLeft: '2px' }}>
          ${price}
        </span>
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
