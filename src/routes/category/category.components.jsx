import { useState, useEffect, Fragment } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

import ProductCard from '../../components/product-card/product-card.components';

import { selectCategories } from '../../store/categories/categories.selector';

import {
  CategoryContainer,
  ProductCardContainer,
  Title,
} from './category.styles';

const Category = () => {
  const { category } = useParams();
  const categoriesMap = useSelector(selectCategories);
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
