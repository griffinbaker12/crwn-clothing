import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

import ProductCard from '../../components/product-card/product-card.components';
import Spinner from '../../components/spinner/spinner.component';

import {
  selectCategoriesMap,
  selectIsCategoriesLoading,
} from '../../store/categories/categories.selector';

import {
  CategoryContainer,
  ProductCardContainer,
  Title,
} from './category.styles';

type CategoryRouteParams = {
  category: string;
};

const Category = () => {
  const { category } = useParams<
    keyof CategoryRouteParams
  >() as CategoryRouteParams;
  const categoriesMap = useSelector(selectCategoriesMap);
  const isLoading = useSelector(selectIsCategoriesLoading);
  const [products, setProducts] = useState(categoriesMap[category]);

  useEffect(() => {
    setProducts(categoriesMap[category]);
  }, [category, categoriesMap]);

  return (
    <CategoryContainer>
      <Title>{category.toUpperCase()}</Title>
      {isLoading ? (
        <Spinner />
      ) : (
        <ProductCardContainer>
          {products &&
            products.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
        </ProductCardContainer>
      )}
    </CategoryContainer>
  );
};

export default Category;
