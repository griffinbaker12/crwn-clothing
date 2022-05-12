import { AnyAction } from 'redux';
import { Categories } from './categories.types';

import {
  fetchCategoriesStart,
  fetchCategoriesSuccess,
  fetchCategoriesFailure,
} from './categories.action';

export type CategoriesState = {
  readonly categories: Categories[];
  readonly isLoading: boolean;
  readonly error: Error | null;
};

const INITIAL_STATE: CategoriesState = {
  categories: [],
  isLoading: false,
  error: null,
};

export const categoriesReducer = (
  state = INITIAL_STATE,
  action: AnyAction
): CategoriesState => {
  if (fetchCategoriesStart.match(action)) {
    return { ...state, isLoading: true };
  }

  if (fetchCategoriesSuccess.match(action)) {
    return { ...state, categories: action.payload, isLoading: true };
  }

  if (fetchCategoriesFailure.match(action)) {
    return { ...state, error: action.payload, isLoading: true };
  }

  return state;
};
