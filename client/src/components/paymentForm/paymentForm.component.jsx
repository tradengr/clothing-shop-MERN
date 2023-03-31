import { useState} from 'react'
import { useSelector } from 'react-redux';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js'
import axios from 'axios';

import { selectCartTotalPrice } from '../../redux/cart/cart.selector';
import { selectCurrentUser } from '../../redux/user/user.selector';
import { InvertedButton, ButtonSpinner } from '../button/button.styles'

import './paymentForm.styles.scss';

export default function PaymentForm() {
  const stripe = useStripe();
  const elements = useElements();
  const amount = useSelector(selectCartTotalPrice);
  const currentUser = useSelector(selectCurrentUser);

  const [ isProcessingPayment, setIsProcessingPayment ] = useState(false);

  const handlePayment = async(event) => {
    event.preventDefault();

    if (!stripe || !elements) return;

    setIsProcessingPayment(true);

    const response = await axios.post('http://localhost:8000/payment', {
      amount: amount * 100,
    }, {
      withCredentials: true,
    });

    const client_secret = response.data.client_secret;

    const paymentResult = await stripe.confirmCardPayment(client_secret, {
      payment_method: {
        card: elements.getElement(CardElement),
        billing_details: {
          name: currentUser ? currentUser : 'Guest'
        }
      }
    });

    setIsProcessingPayment(false);

    if (paymentResult.error) alert(paymentResult.error);
    else if (paymentResult.paymentIntent.status === 'succeeded') alert('Payment Successful');
  }

  return (
    <div className='payment-form-container'>
      <form className='form-container' onSubmit={handlePayment}>
        <h2>Credit Card Payment: </h2>
        <CardElement />
        <InvertedButton type='submit' disabled={isProcessingPayment} className='payment-button'>
          {isProcessingPayment ? <ButtonSpinner /> : 'Pay Now' }
        </InvertedButton>
      </form>
    </div>
  )
}