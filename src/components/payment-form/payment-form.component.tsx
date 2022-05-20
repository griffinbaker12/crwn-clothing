import { useState, FormEvent } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectCartTotal } from '../../store/cart/cart.selector';
import { selectCurrentUser } from '../../store/user/user.selector';
import {
  updateProcessing,
  updateShowStatus,
  updateSuccess,
} from '../../store/payment/payment.action';
import { useStripe, useElements, CardElement } from '@stripe/react-stripe-js';
import { BUTTON_TYPE_CLASSES } from '../button/button.component';
import { clearCart } from '../../store/cart/cart.action';
import {
  PaymentFormContainer,
  FormContainer,
  PaymentButton,
  CloseForm,
  PaymentCard,
  Note,
} from './payment-form.styles';
import { StripeCardElement } from '@stripe/stripe-js';
import { selectTheme } from '../../store/theme/theme.selector';

export type PaymentFormProps = {
  toggleForm: () => void;
  checkoutToggle: boolean;
};

const PaymentForm = ({ toggleForm, checkoutToggle }: PaymentFormProps) => {
  const stripe = useStripe();
  const elements = useElements();
  const amount = useSelector(selectCartTotal);
  const currentUser = useSelector(selectCurrentUser);
  const theme = useSelector(selectTheme);
  const dispatch = useDispatch();

  const resetForm = (cardDetails?: StripeCardElement) => {
    dispatch(updateShowStatus(false));
    if (!cardDetails) {
      return;
    }
    cardDetails.clear();
  };

  const handleError = (
    errorMsg = 'Please add items to cart prior to checking out.'
  ) => {
    dispatch(updateProcessing(false));
    dispatch(updateShowStatus(true));
    alert(errorMsg);
    dispatch(updateSuccess(false));
  };

  const handlePayment = async (e: FormEvent<HTMLDivElement>) => {
    e.preventDefault();

    if (!stripe || !elements) return;

    dispatch(updateProcessing(true));

    const response = await fetch('/.netlify/functions/create-payment-intent', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ amount: amount * 100 }),
    }).then(res =>
      res.json().catch(e => {
        if (e.message === 'Unexpected token Y in JSON at position 0') {
          return 'invalid cart';
        }
        return 'error';
      })
    );

    if (response === 'error') {
      handleError('Error processing payment, please try again!');
      setTimeout(() => resetForm(), 1000);
      return;
    }

    if (response === 'invalid cart') {
      handleError();
      setTimeout(() => {
        toggleForm();
        setTimeout(() => {
          resetForm();
        }, 1000);
      }, 1000);
    }

    const {
      paymentIntent: { client_secret },
    } = response;

    const cardDetails = elements.getElement(CardElement);

    if (!cardDetails) return;

    const paymentResult = await stripe.confirmCardPayment(client_secret, {
      payment_method: {
        card: cardDetails,
        billing_details: {
          name: currentUser ? currentUser.displayName : 'guest',
        },
      },
    });

    dispatch(updateProcessing(false));
    dispatch(updateShowStatus(true));

    if (paymentResult.error) {
      alert('Error processing payment, please try again');
      dispatch(updateSuccess(false));
      setTimeout(() => dispatch(updateShowStatus(false)), 1000);
    } else {
      if (paymentResult.paymentIntent.status === 'succeeded') {
        alert('Payment success, thank you for shopping with us!');
        dispatch(updateSuccess(true));
        setTimeout(() => {
          toggleForm();
          dispatch(clearCart());
          setTimeout(() => {
            resetForm();
          }, 1000);
        }, 1000);
      }
    }
  };

  return (
    <PaymentFormContainer
      checkoutToggle={checkoutToggle}
      onSubmit={handlePayment}
      theme={theme}
    >
      <CloseForm type="button" onClick={toggleForm}>
        &times;
      </CloseForm>
      <h2>Credit Card Payment</h2>
      <FormContainer>
        <PaymentCard />
        <PaymentButton
          buttonType={BUTTON_TYPE_CLASSES.inverted}
          checkout={true}
        >
          Pay now
        </PaymentButton>
      </FormContainer>
      <Note>
        *Please use the following test card for payments*
        <br />
        4242 4242 4242 4242 --- Exp: 04/24 -- CVC: 424 -- Zip: 00000
      </Note>
    </PaymentFormContainer>
  );
};

export default PaymentForm;
