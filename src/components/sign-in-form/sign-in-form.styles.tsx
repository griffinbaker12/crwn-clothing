import styled, { css } from 'styled-components';

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const SignInContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 380px;

  h2 {
    margin: 10px 0;
  }

  h2,
  span {
    ${props =>
      props.theme === 'dark' &&
      css`
        color: white;
      `}
  }

  @media screen and (max-width: 1000px) {
    margin-bottom: 50px;
  }
`;
