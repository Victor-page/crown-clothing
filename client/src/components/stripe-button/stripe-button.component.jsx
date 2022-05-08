import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey =
    'pk_test_51KlD47BpJAxSN6R9hYbUJJJdv1Kl0HqwxlQb1RXY7LvEF08jSo6Hl9mbOX1OAYYujqJkLkpvs9WdslXDNlSWhOJn00IorcGd20';
  const label = 'Pay Now';
  const description = `Your total is $${price}`;
  const imageUrl = 'https://svgshare.com/i/CUz.svg';

  const handleError = (error) => {
    console.log('Payment error: ', error);
    alert(
      'There was an issue with your payment. Please make sure you use the provided credit cart.'
    );
  };

  const handleResponse = (response) => {
    console.log(response);
    alert('Payment successful');
  };

  const onToken = (token) =>
    axios({
      url: 'payment',
      method: 'post',
      data: { amount: priceForStripe, token },
    })
      .then(handleResponse)
      .catch(handleError);

  return (
    <StripeCheckout
      bitcoin
      label={label}
      name="CRWN Clothing Ltd."
      billingAddress
      shippingAddress
      image={imageUrl}
      description={description}
      amount={priceForStripe}
      panelLabel={label}
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
