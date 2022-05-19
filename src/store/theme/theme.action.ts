import { THEME_ACTION_TYPES } from './theme.types';
import { createAction } from '../../utils/reducer/reducer.utils';
import { ActionWithPayload } from '../../utils/reducer/reducer.utils';
import { withMatcher } from '../../utils/reducer/reducer.utils';

export type UpdateThemeToggle = ActionWithPayload<
  THEME_ACTION_TYPES.SET_THEME_TOGGLE,
  string
>;

export type SetFocused = ActionWithPayload<
  THEME_ACTION_TYPES.SET_FOCUSED,
  boolean
>;

export const themeToggle = withMatcher(
  (theme: string): UpdateThemeToggle =>
    createAction(THEME_ACTION_TYPES.SET_THEME_TOGGLE, theme)
);

export const setFocused = withMatcher(
  (focused: boolean): SetFocused =>
    createAction(THEME_ACTION_TYPES.SET_FOCUSED, focused)
);
