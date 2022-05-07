import { Fragment } from 'react';
import {
  WrapperSuccess,
  WrapperFailure,
  XWrapper,
  CheckmarkWrapper,
} from './payment-icon-styles';

const PaymentIcon = ({ isSuccessful }) => {
  return (
    <Fragment>
      {isSuccessful ? (
        <WrapperSuccess>
          <CheckmarkWrapper>&#10003;</CheckmarkWrapper>
        </WrapperSuccess>
      ) : (
        <WrapperFailure>
          <XWrapper>&times;</XWrapper>
        </WrapperFailure>
      )}
    </Fragment>
  );
};

export default PaymentIcon;
