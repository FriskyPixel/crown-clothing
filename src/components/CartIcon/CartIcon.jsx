import { useContext } from 'react';
import { CartContext } from '../../contexts/CartContext';
import Styles from './cart-icon.styles.js';

const CartIcon = () => {
  const { setIsCartOpen, totalCartItems } = useContext(CartContext);

  const toggleIsCartOpen = () =>
    setIsCartOpen((prevIsCartOpen) => !prevIsCartOpen);

  return (
    <Styles.Container onClick={toggleIsCartOpen}>
      <Styles.ShoppingBagIcon />
      <Styles.ItemCount>{totalCartItems}</Styles.ItemCount>
    </Styles.Container>
  );
};

export default CartIcon;
