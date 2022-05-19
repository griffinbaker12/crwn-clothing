import React, { Fragment, useState } from 'react';
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
import { selectTheme } from '../../store/theme/theme.selector';

const Navigation = () => {
  const currentUser = useSelector(selectCurrentUser);
  const isCartOpen = useSelector(selectIsCartOpen);
  const theme = useSelector(selectTheme);
  const dispatch = useDispatch();
  //   setTheme(prevState => (prevState === 'dark' ? 'light' : 'dark'));

  const handleClick = () => dispatch(signOutStart());

  return (
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
  );
};

export default Navigation;
