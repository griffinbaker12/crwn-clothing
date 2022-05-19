import Button, { BUTTON_TYPE_CLASSES } from '../button/button.component';
import { FC, useContext } from 'react';
import { ExportedThemeContext } from '../../routes/navigation/navigation.component';
import { CategoryItem } from '../../store/categories/categories.types';
import { ProductCartContainer, Footer, Name } from './product-card.styles';
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from '../../store/cart/cart.action';
import { selectCartItems } from '../../store/cart/cart.selector';

type ProductCardProps = {
  product: CategoryItem;
};

const ProductCard: FC<ProductCardProps> = ({ product }) => {
  const { name, price, imageUrl } = product;
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);

  const { theme } = useContext(ExportedThemeContext);

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
