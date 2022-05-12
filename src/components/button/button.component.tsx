import React, { FC, ButtonHTMLAttributes } from 'react';
import {
  BaseButton,
  GoogleSignInButton,
  InvertedButton,
  ButtonSpinner,
} from './button.styles';
import { useSelector } from 'react-redux';
import {
  selectIsProccessing,
  selectIsShowingStatus,
} from '../../store/payment/payment.selector';
import PaymentIcon from '../payment-icon/payment-icon-component';
import { Fragment } from 'react';

export enum BUTTON_TYPE_CLASSES {
  base = 'base',
  google = 'google-sign-in',
  inverted = 'inverted',
}

const getButton = (buttonType = BUTTON_TYPE_CLASSES.base): typeof BaseButton =>
  ({
    [BUTTON_TYPE_CLASSES.base]: BaseButton,
    [BUTTON_TYPE_CLASSES.google]: GoogleSignInButton,
    [BUTTON_TYPE_CLASSES.inverted]: InvertedButton,
  }[buttonType]);

export type ButtonProps = {
  children: React.ReactNode;
  buttonType?: BUTTON_TYPE_CLASSES;
  isLoading?: boolean;
  checkout?: boolean;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const Button: FC<ButtonProps> = ({
  children,
  buttonType,
  checkout,
  ...otherProps
}) => {
  const CustomButton = getButton(buttonType);
  const isProcessing = useSelector(selectIsProccessing);
  const isShowingStatus = useSelector(selectIsShowingStatus);
  return (
    <CustomButton disabled={isProcessing} {...otherProps}>
      {!checkout ? (
        children
      ) : isProcessing ? (
        <ButtonSpinner />
      ) : isShowingStatus ? (
        <PaymentIcon />
      ) : (
        children
      )}
    </CustomButton>
  );
};

export default Button;
