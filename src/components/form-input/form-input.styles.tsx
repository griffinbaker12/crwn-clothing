import styled, { css } from 'styled-components';

const darkModeColor = 'white';
const subColor = 'grey';
const mainColor = 'black';

const shrinkLabelStyles = css`
  top: -18px;
  font-size: 12px;
  color: ${mainColor};
`;

type FormInputLabelProps = {
  shrink?: boolean;
  theme: string;
};

export const FormInputLabel = styled.label<FormInputLabelProps>`
  color: ${subColor};
  font-size: 16px;
  font-weight: normal;
  position: absolute;
  pointer-events: none;
  left: 5px;
  top: 10px;
  transition: 300ms ease all;
`;
export const Input = styled.input`
  background: none;
  background-color: white;
  color: ${subColor};
  font-size: 18px;
  padding: 10px 10px 10px 5px;
  display: block;
  width: 100%;
  border: none;
  border-radius: 0;
  border-bottom: 1px solid ${subColor};
  margin: 25px 0;

  &:focus {
    outline: none;
  }

  &:focus ~ ${FormInputLabel} {
    ${shrinkLabelStyles};
    ${props =>
      props.theme === 'dark' &&
      css`
        color: white;
      `}
  }
`;

export const Group = styled.div`
  position: relative;
  margin: 45px 0;

  input[type='password'] {
    letter-spacing: 0.3em;
  }
`;
