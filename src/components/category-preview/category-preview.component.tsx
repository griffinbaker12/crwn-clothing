import { FC } from 'react';
import {
  CategoryPreviewContainer,
  Title,
  Preview,
} from './category-preview.styles';
import ProductCard from '../product-card/product-card.components';
import { CategoryItem } from '../../store/categories/categories.types';
import { useSelector } from 'react-redux';
import { selectTheme } from '../../store/theme/theme.selector';

type CategoryPreviewProps = {
  title: string;
  products: CategoryItem[];
};

const CategoryPreview: FC<CategoryPreviewProps> = ({ title, products }) => {
  const theme = useSelector(selectTheme);

  return (
    <CategoryPreviewContainer>
      <h2>
        <Title theme={theme} to={title}>
          {title.toUpperCase()}
        </Title>
      </h2>
      <Preview>
        {products
          .filter((_, i) => i < 4)
          .map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
      </Preview>
    </CategoryPreviewContainer>
  );
};

export default CategoryPreview;
