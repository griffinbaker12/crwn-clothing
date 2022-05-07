const { async } = require('@firebase/util');

// Essentially attaches secret variables in the .env file into our process environment
require('dotenv').config();
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

exports.handler = async event => {
  try {
    const { amount } = JSON.parse(event.body);

    const paymentIntent = await stripe.paymentIntents.create({
      amount,
      currency: 'USD',
      payment_method_types: ['card'],
    });

    return {
      statusCode: 200,
      body: JSON.stringify({ paymentIntent }),
    };
  } catch (error) {
    console.log('Here is the error from the backend', { error });

    return {
      status: 400,
      body: JSON.stringify(error),
    };
  }
};
