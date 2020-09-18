import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey =
    "pk_test_51HObQCAc2iO9zPu9mnoDnYTkUCa1Xw6uGgZ1tB0475zapDTyrElEQu1LUzutSL2DcDszFlwX0ZgdqM4VSec0trL900Zm1LQfQV";

  const onToken = (token) => {
    console.log(token);
    alert("Payment Succesful!");
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="SkateBoard Shop"
      currency="CAD"
      billingAddress
      shippingAddress
      description={`Your total is ${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
// Stripe wants price in cents
