import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishAbleKey =
    "pk_test_51KSi2UE75sPhUrfi4cxRkFucZKgDjLPDPeRoNJivuNvgimWbKxAh85olhOQLFsROLGG0EaVfD8gDHmsYn6asMcyy00cjqzUn9E";

  const onToken = (token) => {
    console.log(token);
    alert("Payment Successful");
  };
  return (
    <StripeCheckout
      label="Pay Now"
      name="CRWN Clothing"
      billingAddress
      shippingAddress
      image="https://svgshare.com/i/CUz.svg"
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishAbleKey}
    />
  );
};

export default StripeCheckoutButton;
