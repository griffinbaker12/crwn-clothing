import styled from 'styled-components';
import { ReactComponent as CrwnSvg } from '../../assets/crown.svg';
import { Link } from 'react-router-dom';

export const CrwnLogo = styled(CrwnSvg)`
  position: absolute;
`;

export const NavigationContainer = styled.div`
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

export const LogoContainer = styled(Link)`
  height: 100%;
  width: 70px;
  padding: 25px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const NavLinks = styled.div`
  width: 55%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const NavLink = styled(Link)`
  padding: 10px 15px;
  cursor: pointer;
`;
