import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';

const StripeButton = ({ price }) => {
  const publishableKey = "pk_test_51KqGwCSJ1BRcdbZ3nF8lsFPZxaMY484Vg68iiDTydpSrp0u0DghdmlAXmywWyhONdrXsuuAkh8zAgGrixNPYn3u500axVVFLsY";
  const stripePrice = price * 100;

  const onToken = (token) => {
    console.log(token);
    axios
      .post("http://localhost:8083/payment", {
        amount: stripePrice,
        token,
      })
      .then((response) => {
        console.log(response);
        alert("payment success");
      })
      .catch((error) => {
        console.log(error);
        alert("Payment failed");
      });
  };

  return (
    <StripeCheckout
      amount={stripePrice}
      label="Pay Now"
      name="pay for pizza"
      image="https://cdn.w600.comps.canstockphoto.com/payment-credit-card-delivery-food-pizza-image_csp42229178.jpg"
      description={`Your total is ${price}`}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
      currency="INR"
    />
  );
};

export default StripeButton;
