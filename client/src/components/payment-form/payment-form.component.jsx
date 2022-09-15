import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';

import CustomButton from '../custom-button/custom-button.component';

import { PaymentFormContainer, FormContainer } from './payment-form.styles';

const PaymentForm = () => {
  const stripe = useStripe();
  const elements = useElements();

  const paymentHandler = async (event) => {
    if (!stripe || !elements) return;
  };

  return (
    <PaymentFormContainer>
      <FormContainer>
        <h2>Credit Card Payment: </h2>
        <CardElement />
        <CustomButton inverted>Pay now</CustomButton>
      </FormContainer>
    </PaymentFormContainer>
  );
};

export default PaymentForm;
