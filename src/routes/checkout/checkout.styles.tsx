import styled, { css } from 'styled-components';
import Button from '../../components/button/button.component';

type OverlayProps = {
  checkoutToggle?: boolean;
};

export const CheckoutContainer = styled.div`
  width: 55%;
  min-height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px auto 40px auto;
  /* position: relative; */

  @media screen and (max-width: 850px) {
    width: 90%;
  }
`;

export const CheckoutHeader = styled.div`
  width: 100%;
  padding: 10px 0;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid darkgrey;
`;

export const HeaderBlock = styled.div`
  text-transform: capitalize;
  width: 22.5%;
  text-align: center;

  &:first-child {
    padding-right: 12px;
  }

  &:last-child {
    width: 10%;
  }
`;

export const Total = styled.span`
  font-size: 36px;
`;

export const CheckoutButton = styled(Button)`
  background-color: rgb(244, 85, 0);
  border-radius: 5px;
  border: none;

  &:hover {
    background-color: #f76e40;
    color: black;
    border: 1px solid black;
  }
`;

export const CheckoutPayment = styled.div`
  /* margin-left: auto; */
  width: 250px;
  margin-top: 24px;
  border-radius: 5px;
  border: 1px solid #ddd;
  display: flex;
  flex-direction: column;
  gap: 10px;
  background-color: #eee;
  align-items: center;
  padding: 10px;
`;

export const Overlay = styled.div<OverlayProps>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(4px);
  z-index: 1;
  transition: all 0.5s;
  ${({ checkoutToggle }) =>
    !checkoutToggle &&
    css`
      visibility: hidden;
      opacity: 0;
    `}
`;
