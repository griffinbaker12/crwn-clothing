import React, { Fragment, createContext, useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { signOutStart } from '../../store/user/user.action';
import CartIcon from '../../components/cart-icon/cart-icon.component';
import { GlobalStyle } from '../../global.styles';
import CartDropdown from '../../components/cart-dropdown/cart-dropdown.component';
import {
  NavigationContainer,
  LogoContainer,
  NavLinks,
  NavLink,
  CrwnLogo,
} from './navigation.styles';
import LightDarkToggle from '../../components/light-dark-toggle/light-dark-toggle.component';
import { selectCurrentUser } from '../../store/user/user.selector';
import { selectIsCartOpen } from '../../store/cart/cart.selector';

type ThemeContext = {
  theme: string;
  toggleTheme: () => void;
  focused: boolean;
  setFocused: React.Dispatch<React.SetStateAction<boolean>>;
};

export const ExportedThemeContext = createContext<ThemeContext>({
  theme: '',
  toggleTheme: () => {},
  focused: false,
  setFocused: () => {},
});

const Navigation = () => {
  const currentUser = useSelector(selectCurrentUser);
  const isCartOpen = useSelector(selectIsCartOpen);
  const dispatch = useDispatch();

  const [theme, setTheme] = useState('');
  const [focused, setFocused] = useState(false);
  const toggleTheme = () =>
    setTheme(prevState => (prevState === 'dark' ? 'light' : 'dark'));

  const handleClick = () => dispatch(signOutStart());

  return (
    <ExportedThemeContext.Provider
      value={{ theme, toggleTheme, focused, setFocused }}
    >
      <Fragment>
        <GlobalStyle theme={theme} />
        <NavigationContainer className={theme}>
          <LogoContainer to="/">
            <CrwnLogo />
          </LogoContainer>
          <NavLinks>
            <LightDarkToggle />
            <NavLink theme={theme} to="/shop">
              SHOP
            </NavLink>
            {currentUser ? (
              <NavLink theme={theme} as="span" onClick={handleClick}>
                SIGN OUT
              </NavLink>
            ) : (
              <NavLink theme={theme} className="nav-link" to="/auth">
                SIGN IN
              </NavLink>
            )}
            <CartIcon />
          </NavLinks>
          {isCartOpen && <CartDropdown />}
        </NavigationContainer>
        <Outlet />
      </Fragment>
    </ExportedThemeContext.Provider>
  );
};

export default Navigation;
