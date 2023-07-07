import { useContext } from 'react';
import { CartContext } from '../../contexts/CartContext';
import CheckoutItem from '../../components/CheckoutItem/CheckoutItem';
import './checkout.styles.scss';

const Checkout = () => {
  const headers = ['Product', 'Description', 'Quanity', 'Price', 'Remove'];
  const { cartItems, totalCartPrice } = useContext(CartContext);

  return (
    <div className='checkout-container'>
      <div className='checkout-header'>
        {headers.map((header, index) => (
          <div className='header-block' key={index}>
            <span>{header}</span>
          </div>
        ))}
      </div>
      {cartItems.map((cartItem) => (
        <CheckoutItem cartItem={cartItem} key={cartItem.id} />
      ))}
      <span className='total'>Total: ${totalCartPrice}</span>
    </div>
  );
};

export default Checkout;
