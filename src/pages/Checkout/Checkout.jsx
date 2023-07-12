import { useContext } from 'react';
import { CartContext } from '../../contexts/CartContext';
import CheckoutItem from '../../components/CheckoutItem/CheckoutItem';
import Styles from './checkout.styles.js';

const Checkout = () => {
  const headers = ['Product', 'Description', 'Quanity', 'Price', 'Remove'];
  const { cartItems, totalCartPrice } = useContext(CartContext);

  return (
    <Styles.Container>
      <Styles.Headers>
        {headers.map((header, index) => (
          <Styles.Header key={index}>
            <span>{header}</span>
          </Styles.Header>
        ))}
      </Styles.Headers>
      {cartItems.map((cartItem) => (
        <CheckoutItem cartItem={cartItem} key={cartItem.id} />
      ))}
      <Styles.Total>Total: ${totalCartPrice}</Styles.Total>
    </Styles.Container>
  );
};

export default Checkout;
