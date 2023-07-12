import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { CartContext } from '../../contexts/CartContext';
import CartItem from '../CartItem/CartItem';
import Styles from './cart-dropdown.styles.js';

const CartDropdown = () => {
  const { cartItems, setIsCartOpen } = useContext(CartContext);
  const navigate = useNavigate();

  const goToCheckoutHandler = () => {
    navigate('/checkout');
    setIsCartOpen(false);
  };

  return (
    <Styles.Container>
      <Styles.CartItems>
        {cartItems.length ? (
          cartItems.map((item) => <CartItem key={item.id} cartItem={item} />)
        ) : (
          <Styles.EmptyMessage>Your cart is empty</Styles.EmptyMessage>
        )}
      </Styles.CartItems>
      <Styles.CheckoutButton onClick={goToCheckoutHandler}>
        GO TO CHECKOUT
      </Styles.CheckoutButton>
    </Styles.Container>
  );
};

export default CartDropdown;
