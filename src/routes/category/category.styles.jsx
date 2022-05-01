import styled from 'styled-components';

export const ProductCardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;
  /* justify-items: center; */

  @media screen and (max-width: 900px) {
    grid-template-columns: 1fr 1fr;
    gap: 15px;
  }
`;

export const Title = styled.h2`
  font-size: 38px;
  margin-bottom: 25px;
  text-align: center;
`;

export const CategoryContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
