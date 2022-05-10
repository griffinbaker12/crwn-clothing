import { Fragment } from 'react';
import {
  WrapperSuccess,
  WrapperFailure,
  XWrapper,
  CheckmarkWrapper,
} from './payment-icon-styles';
import { useSelector } from 'react-redux';
import { selectIsProccessing } from '../../store/checkout/checkout.selector';

const PaymentIcon = ({ isSuccessful }) => {
  const isProcessing = useSelector(selectIsProccessing);
  return (
    <Fragment>
      {isProcessing ? (
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
