import styled from 'styled-components';

export const CategoriesContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-top: 20px;

  @media screen and (max-width: 550px) {
    display: grid;
    grid-template-columns: 1fr 1fr;

    div:last-child {
      grid-column: 1 / 3;
    }
  }
`;
