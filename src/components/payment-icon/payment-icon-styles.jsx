import styled, { css } from 'styled-components';

export const WrapperSuccess = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 30px;
  width: 30px;
  border: 2px solid #fff;
  border-radius: 50%;
  position: absolute;
  margin-bottom: 10px;
  background: #57eb32;
  top: 163px;
`;

export const WrapperFailure = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 30px;
  width: 30px;
  border: 2px solid #fff;
  border-radius: 50%;
  position: absolute;
  margin-bottom: 10px;
  background: #eb6332;
  top: 163px;
`;

export const CheckmarkWrapper = styled.span`
  color: white;
  font-size: 20px;
  position: absolute;
  top: -13px;
  left: 4px;
`;

export const XWrapper = styled.span`
  color: white;
  font-size: 25px;
  position: absolute;
  top: -13px;
  left: 7px;
`;
