import styled, { css } from 'styled-components';

export const SignUpContainer = styled.div`
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
`;
