import styled, { css } from 'styled-components';

export const ProductCartContainer = styled.div`
  width: 22vw;
  display: flex;
  flex-direction: column;
  height: 350px;
  align-items: center;
  position: relative;
  margin-bottom: 5px;
  img {
    width: 100%;
    height: 90%;
    object-fit: cover;
    margin-bottom: 5px;
  }
  button {
    width: 80%;
    opacity: 0.7;
    position: absolute;
    top: 255px;
    display: none;
    @media screen and (max-width: 500px) {
      display: block;
      opacity: 0.9;
      min-width: unset;
      padding: 0 10px;
      font-size: 14px;
    }
  }
  &:hover {
    img {
      opacity: 0.8;
    }
    button {
      opacity: 0.85;
      display: flex;
    }
  }

  ${props =>
    props.theme === 'dark' &&
    css`
      color: white;
    `}

  @media screen and (max-width: 900px) {
    width: 40vw;
    &:hover {
      img {
        opacity: unset;
      }
      button {
        opacity: unset;
      }
    }
  }
`;

export const Footer = styled.div`
  width: 100%;
  height: 5%;
  display: flex;
  justify-content: space-between;
  font-size: 18px;
`;

export const Name = styled.span`
  width: 90%;
  margin-bottom: 15px;
`;
