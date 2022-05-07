import styled from 'styled-components';

export const CheckoutItemContainer = styled.div`
  width: 100%;
  display: flex;
  min-height: 100px;
  border-bottom: 1px solid darkgrey;
  padding: 15px 0;
  font-size: 20px;
  align-items: center;
  justify-content: space-between;
  text-align: center;
`;

export const ImageContainer = styled.div`
  width: 22.5%;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    padding-right: 10px;
  }
`;

export const BaseSpan = styled.span`
  width: 23%;
  @media screen and (max-width: 650px) {
    font-size: 16px;
  }
`;

export const Quantity = styled(BaseSpan)`
  display: flex;
`;

export const Arrow = styled.div`
  cursor: pointer;
`;

export const LeftArrow = styled(Arrow)`
  margin-left: auto;
`;

export const RightArrow = styled(Arrow)`
  margin-right: auto;
`;

export const Value = styled.span`
  margin: 0 10px;
`;

export const RemoveButton = styled.div`
  width: 10%;
  cursor: pointer;
`;
