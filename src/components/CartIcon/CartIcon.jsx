import { useContext } from 'react';
import { CartContext } from '../../contexts/CartContext';
import { ReactComponent as ShoppingBag } from '../../assets/shopping-bag.svg';
import './cart-icon.styles.scss';

const CartIcon = () => {
  const { isCartOpen, setIsCartOpen } = useContext(CartContext);

  const toggleIsCartOpen = () =>
    setIsCartOpen((prevIsCartOpen) => !prevIsCartOpen);

  return (
    <div className='cart-icon-container' onClick={toggleIsCartOpen}>
      <ShoppingBag className='shopping-bag-icon' />
      <span className='item-count'>10</span>
    </div>
  );
};

export default CartIcon;
