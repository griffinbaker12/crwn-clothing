import { CATEGORIES_ACTION_TYPES } from './categories.types';
import { getCategoriesAndDocuments } from '../../utils/firebase/firebase.utils';

export const fetchCategoriesStart = () => ({
  type: CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START,
});

export const fetchCategoriesSuccess = categoriesArray => ({
  type: CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_SUCCESS,
  payload: categoriesArray,
});

export const fetchCategoriesFailure = error => ({
  type: CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_FAILURE,
  payload: error,
});

export const fetchCategoriesAsync = () => async dispatch => {
  dispatch(fetchCategoriesStart());
  try {
    const categoriesArray = await getCategoriesAndDocuments();
    dispatch(fetchCategoriesSuccess(categoriesArray));
  } catch (error) {
    dispatch(fetchCategoriesFailure(error));
  }
};
