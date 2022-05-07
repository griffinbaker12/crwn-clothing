import { Fragment } from 'react';
import {
  WrapperSuccess,
  WrapperFailure,
  XWrapper,
  CheckmarkWrapper,
} from './payment-success-styles';

const PaymentSuccess = ({ isSuccessful }) => {
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

export default PaymentSuccess;
