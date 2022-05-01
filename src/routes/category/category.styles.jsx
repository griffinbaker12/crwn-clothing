import styled from 'styled-components';

export const CategoryContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 20px;
  row-gap: 50px;
`;

export const CategoryTitle = styled.div`
  font-size: 38px;
  margin-bottom: 30px;
  margin-top: 0px;
  text-align: center;
`;