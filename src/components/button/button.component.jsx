import {
  BaseButton,
  GoogleSignInButton,
  InvertedButton,
  ButtonSpinner,
} from './button.styles.jsx';
import { useSelector } from 'react-redux';
import {
  selectIsProccessing,
  selectIsShowingStatus,
} from '../../store/checkout/checkout.selector.js';
import PaymentIcon from '../payment-icon/payment-icon-component.jsx';
import { Fragment } from 'react';

export const BUTTON_TYPE_CLASSES = {
  base: 'base',
  google: 'google-sign-in',
  inverted: 'inverted',
};

const getButton = (buttonType = BUTTON_TYPE_CLASSES.base) =>
  ({
    [BUTTON_TYPE_CLASSES.base]: BaseButton,
    [BUTTON_TYPE_CLASSES.google]: GoogleSignInButton,
    [BUTTON_TYPE_CLASSES.inverted]: InvertedButton,
  }[buttonType]);

const Button = ({
  children,
  buttonType,
  isLoading,
  isSuccessful,
  showStatus,
  ...otherProps
}) => {
  const CustomButton = getButton(buttonType);
  const isProcessing = useSelector(selectIsProccessing);
  const isShowingStatus = useSelector(selectIsShowingStatus);
  console.log(isProcessing, isShowingStatus);
  return (
    <CustomButton disabled={isLoading} {...otherProps}>
      {isProcessing ? (
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
