import styled from 'styled-components';
import Button from '../../components/button/button.component';

export const CheckoutContainer = styled.div`
  width: 70%;
  /* opacity: 60%; */
  min-height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px auto 0;
  /* position: relative; */

  @media screen and (max-width: 850px) {
    width: 85%;
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
