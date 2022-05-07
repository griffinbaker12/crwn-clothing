import styled from 'styled-components';
import { css } from 'styled-components';
import Button from '../button/button.component';
import { CardElement } from '@stripe/react-stripe-js';

export const PaymentFormContainer = styled.div`
  height: 300px;
  width: 450px;
  padding: 0px 15px 0px 15px;
  justify-content: center;
  border: 1px solid black;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  overflow: hidden;
  z-index: 2;
  background-color: white;
  border-radius: 9px;
  box-shadow: 0 4rem 6rem rgba(0, 0, 0, 0.25);
  transition: all 0.5s;
  ${({ checkoutToggle }) =>
    !checkoutToggle &&
    css`
      visibility: hidden;
      opacity: 0;
    `}

  ${({ checkoutToggle }) =>
    !checkoutToggle &&
    css`
      visibility: hidden;
      opacity: 0;
    `}

    ${({ checkoutToggle }) =>
    !checkoutToggle &&
    css`
      animation-duration: 400ms;
      animation-timing-function: ease-in-out;
      animation-name: panelShakeAnimation;
      -webkit-animation-duration: 400ms;
      -webkit-animation-timing-function: ease-in-out;
      -webkit-animation-name: panelShakeAnimation;
    `}

  h2 {
    position: absolute;
    top: 8%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;

export const FormContainer = styled.form`
  height: 140px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border: 1px solid #ddd;
  background-color: #eee;
  margin-top: 80px;
  gap: 14px;
  border-radius: 5px;
`;

export const PaymentButton = styled(Button)`
  margin-left: auto;
  margin-right: auto;
  border-radius: 5px;
`;

export const CloseForm = styled.button`
  position: absolute;
  top: 4px;
  right: 8px;
  cursor: pointer;
  border: none;
  background: none;
  color: #555;
  font-size: 24px;
`;

export const PaymentCard = styled(CardElement)`
  border: 1px solid #0f57f1;
  border-radius: 5px;
  background-color: white;
  padding: 12px 0px 12px 0px;
  padding-left: 4px;
  display: inline-block;
  width: 90%;
  margin-left: auto;
  margin-right: auto;

  :hover {
    /* border: 1px solid #f238e2; */
  }
`;

export const Note = styled.div`
  color: red;
  text-align: center;
  margin-top: 14px;
`;
