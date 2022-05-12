import styled from 'styled-components';

import {
  BaseButton,
  GoogleSignInButton,
  InvertedButton,
} from '../button/button.styles';

export const CartDropDownContainer = styled.div`
  position: absolute;
  width: 240px;
  height: 330px;
  display: flex;
  flex-direction: column;
  padding: 20px;
  border: 1px solid black;
  background-color: white;
  top: 90px;
  right: 40px;
  z-index: 5;

  ${BaseButton},
  ${GoogleSignInButton},
  ${InvertedButton} {
    margin-top: auto;
  }

  ${BaseButton} {
    margin-top: 4px;
    margin-left: 0px;

    @media screen and (max-width: 850px) {
      min-width: 0;
      padding: 0 10px 0 10px;
    }
  }

  @media screen and (max-width: 850px) {
    width: 192px;
    height: 264px;
  }
`;

export const EmptyMessage = styled.span`
  font-size: 18px;
  margin: 50px auto;
`;

export const CartItems = styled.div`
  height: 280px;
  display: flex;
  flex-direction: column;
  overflow: auto;

  ::-webkit-scrollbar {
    width: 0.4rem;
  }

  ::-webkit-scrollbar-thumb {
    background-color: rgba(80, 80, 80, 0.65);
    border-radius: 10px;
    outline: slategrey solid 1px;
  }

  ::-webkit-scrollbar-track {
    background-color: transparent;
    border-radius: 10px;
  }
`;
