import { createContext, useReducer, useEffect } from 'react';
import { getCategoriesAndDocuments } from '../utils/firebase/firebase.utils.js';

export const CategoriesContext = createContext({
  categoriesMap: {},
});

export const USER_ACTION_TYPES = {
  SET_CATEGORIES_MAP: 'SET_CATEGORIES_MAP',
};

const categoriesReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case USER_ACTION_TYPES.SET_CATEGORIES_MAP:
      return {
        ...state,
        categoriesMap: { ...payload },
      };
    default:
      throw Error(`Unhandled type ${type} in UserReducer`);
  }
};

const INITIAL_STATE = {
  categoriesMap: {},
};

export const CategoriesProvider = ({ children }) => {
  const [{ categoriesMap }, dispatch] = useReducer(
    categoriesReducer,
    INITIAL_STATE
  );

  const value = { categoriesMap };

  useEffect(() => {
    const getCategoriesMap = async () => {
      const response = await getCategoriesAndDocuments();
      dispatch({
        type: USER_ACTION_TYPES.SET_CATEGORIES_MAP,
        payload: response,
      });
    };
    getCategoriesMap();
  }, []);

  return (
    <CategoriesContext.Provider value={value}>
      {children}
    </CategoriesContext.Provider>
  );
};
