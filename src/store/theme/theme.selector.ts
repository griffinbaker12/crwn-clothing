import { createSelector } from 'reselect';
import { ThemeState } from './theme.reducer';
import { RootState } from '../store';

const selectThemeReducer = (state: RootState): ThemeState => state.theme;

export const selectTheme = createSelector(
  [selectThemeReducer],
  theme => theme.theme
);

export const selectFocused = createSelector(
  [selectThemeReducer],
  theme => theme.focused
);
