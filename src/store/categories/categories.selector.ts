import { createSelector } from 'reselect';
import { RootState } from '../store';
import { CategoriesState } from './categories.reducer';
import { CategoriesMap } from './categories.types';

const selectCategoriesReducer = (state: RootState): CategoriesState =>
  state.categories;

const selectCategories = createSelector(
  [selectCategoriesReducer],
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
  [selectCategoriesReducer],
  categoriesSlice => categoriesSlice.isLoading
);
