import { Fragment } from 'react';
import {
  WrapperSuccess,
  WrapperFailure,
  XWrapper,
  CheckmarkWrapper,
} from './payment-icon-styles';
import { useSelector } from 'react-redux';
import { selectIsSuccessful } from '../../store/checkout/checkout.selector';

const PaymentIcon = () => {
  const isSuccess = useSelector(selectIsSuccessful);
  return (
    <Fragment>
      {isSuccess ? (
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
