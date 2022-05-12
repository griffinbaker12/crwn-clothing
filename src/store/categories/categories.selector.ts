import { createSelector } from 'reselect';
import { RootState } from '../store';
import { CategoriesState } from './categories.reducer';
import { CategoriesMap } from './categories.types';

const selectCategoryReducer = (state: RootState): CategoriesState =>
  state.categories;

const selectCategories = createSelector(
  [selectCategoryReducer],
  categoriesSlice => categoriesSlice.categories
);

export const selectCategoriesMap = createSelector(
  [selectCategories],
  (categories): CategoriesMap =>
    categories.reduce((acc, category) => {
      const { title, items } = category;
      acc[title.toLowerCase()] = items;
      return acc;
    }, {} as CategoriesMap)
);

export const selectIsCategoriesLoading = createSelector(
  [selectCategoryReducer],
  categoriesSlice => categoriesSlice.isLoading
);
