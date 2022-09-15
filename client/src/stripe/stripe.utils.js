import { loadStripe } from '@stripe/stripe-js';

export const stripePromise = loadStripe(
  // process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY
  'pk_test_51KlD47BpJAxSN6R9hYbUJJJdv1Kl0HqwxlQb1RXY7LvEF08jSo6Hl9mbOX1OAYYujqJkLkpvs9WdslXDNlSWhOJn00IorcGd20'
);
