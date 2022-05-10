import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectCartTotal } from '../../store/cart/cart.selector';
import { selectCurrentUser } from '../../store/user/user.selector';
import {
  updateProcessing,
  updateShowStatus,
  updateSuccess,
} from '../../store/checkout/checkout.action';
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
} from '../../components/payment-form/payment-form.styles.jsx';
import userEvent from '@testing-library/user-event';

const PaymentForm = ({ toggleForm, checkoutToggle }) => {
  const stripe = useStripe();
  const elements = useElements();
  const amount = useSelector(selectCartTotal);
  const currentUser = useSelector(selectCurrentUser);
  const dispatch = useDispatch();

  const resetForm = () => {
    dispatch(updateShowStatus(false));
    elements.getElement('card').clear();
  };

  const handleError = (
    errorMsg = 'Please add items to cart prior to checking out.'
  ) => {
    dispatch(updateProcessing(false));
    dispatch(updateShowStatus(true));
    alert(errorMsg);
    dispatch(updateSuccess(false));
  };

  const handlePayment = async e => {
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

    // Not really important, but curious how I can get the x button to render before the alert message shows? How can that be done?
    if (response === 'invalid cart') {
      handleError();
      setTimeout(() => {
        toggleForm(false);
        setTimeout(() => {
          resetForm();
        }, 1000);
      }, 1000);
    }

    const {
      paymentIntent: { client_secret },
    } = response;

    const paymentResult = await stripe.confirmCardPayment(client_secret, {
      payment_method: {
        card: elements.getElement(CardElement),
        billing_details: {
          name: currentUser ? currentUser.displayName : 'guest',
        },
      },
    });

    updateProcessing(false);
    updateShowStatus(true);

    if (paymentResult.error) {
      alert('Error processing payment, please try again');
      updateSuccess(false);
      setTimeout(() => updateShowStatus(false), 1000);
    } else {
      if (paymentResult.paymentIntent.status === 'succeeded') {
        alert('Payment success, thank you for shopping with us!');
        updateSuccess(true);
        setTimeout(() => {
          toggleForm(false);
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
    >
      <CloseForm type="button" onClick={toggleForm}>
        &times;
      </CloseForm>
      <h2>Credit Card Payment</h2>
      <FormContainer>
        <PaymentCard />
        <PaymentButton buttonType={BUTTON_TYPE_CLASSES.inverted}>
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
