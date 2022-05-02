import { useEffect } from 'react';
import CategoriesPreview from '../categories-preview/categories-preview.component';
import Category from '../category/category.components';
import { Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setCategories } from '../../store/categories/categories.action';
import { getCategoriesAndDocuments } from '../../utils/firebase/firebase.utils';

const Shop = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const getCategoriesMap = async () => {
      const response = await getCategoriesAndDocuments();
      dispatch(setCategories(response));
    };
    getCategoriesMap();
  }, []);

  return (
    <Routes>
      <Route index element={<CategoriesPreview />}></Route>
      <Route path=":category" element={<Category />}></Route>
    </Routes>
  );
};

export default Shop;
