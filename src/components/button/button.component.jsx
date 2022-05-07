import {
  BaseButton,
  GoogleSignInButton,
  InvertedButton,
  ButtonSpinner,
} from './button.styles.jsx';

import PaymentSuccess from '../payment-success/payment-success-component';

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
  return (
    <CustomButton disabled={isLoading} {...otherProps}>
      {isLoading ? (
        <ButtonSpinner />
      ) : showStatus ? (
        <PaymentSuccess showStatus={showStatus} isSuccessful={isSuccessful} />
      ) : (
        children
      )}
    </CustomButton>
  );
};

// Could always pass in the is complete as a prop and then determine whether to render the success or the error icon

export default Button;
