import { AnyAction } from 'redux';
import { themeToggle, setFocused } from './theme.action';

export type ThemeState = {
  theme: string;
  focused: boolean;
};

const INITIAL_STATE: ThemeState = {
  theme: 'dark',
  focused: false,
};

export const themeReducer = (state = INITIAL_STATE, action: AnyAction) => {
  if (themeToggle.match(action)) {
    return { ...state, theme: action.payload };
  }

  if (setFocused.match(action)) {
    return { ...state, focused: action.payload };
  }

  return state;
};
