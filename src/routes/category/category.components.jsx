import { useContext, useState, useEffect, Fragment } from 'react';
import { useParams } from 'react-router-dom';

import ProductCard from '../../components/product-card/product-card.components';

import { CategoriesContext } from '../../contexts/categories.context';

import {
  CategoryContainer,
  ProductCardContainer,
  Title,
} from './category.styles';

const Category = () => {
  const { category } = useParams();
  const { categoriesMap } = useContext(CategoriesContext);
  const [products, setProducts] = useState(categoriesMap[category]);

  useEffect(() => {
    setProducts(categoriesMap[category]);
  }, [category, categoriesMap]);

  return (
    <CategoryContainer>
      <Title>{category.toUpperCase()}</Title>
      <ProductCardContainer>
        {products &&
          products.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
      </ProductCardContainer>
    </CategoryContainer>
  );
};

export default Category;
