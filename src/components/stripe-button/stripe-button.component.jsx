import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey =
    'pk_test_51KlD47BpJAxSN6R9hYbUJJJdv1Kl0HqwxlQb1RXY7LvEF08jSo6Hl9mbOX1OAYYujqJkLkpvs9WdslXDNlSWhOJn00IorcGd20';

  const label = 'Pay Now';

  const onToken = (token) => {
    console.log(token);
    alert('Payment Successful!');
  };

  return (
    <StripeCheckout
      bitcoin
      label={label}
      name="CRWN Clothing Ltd."
      billingAddress
      shippingAddress
      image="https://svgshare.com/i/CUz.svg"
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel={label}
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
