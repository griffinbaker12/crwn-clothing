import { CATEGORIES_ACTION_TYPES, Categories } from './categories.types';
import {
  createAction,
  Action,
  ActionWithPayload,
} from '../../utils/reducer/reducer.utils';
import { create } from 'domain';

export type FetchCategoriesStart =
  Action<CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START>;

export type FetchCategoriesSuccess = ActionWithPayload<
  CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_SUCCESS,
  Categories[]
>;

export type FetchCategoriesFailure = ActionWithPayload<
  CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_FAILURE,
  Error
>;

export type CategoriesAction =
  | FetchCategoriesStart
  | FetchCategoriesSuccess
  | FetchCategoriesFailure;

export const fetchCategorieStart = (): FetchCategoriesStart =>
  createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START);

export const fetchCategorieSuccess = (
  categoriesArray: Categories[]
): FetchCategoriesSuccess =>
  createAction(
    CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_SUCCESS,
    categoriesArray
  );

export const fetchCategoriesFailure = (error: Error): FetchCategoriesFailure =>
  createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_FAILURE, error);
