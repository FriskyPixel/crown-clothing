import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { signOutUser } from '../../utils/firebase.utils';
import { UserContext } from '../../contexts/UserContext';
import { CartContext } from '../../contexts/CartContext';
import { ReactComponent as CrownLogo } from '../../assets/crown.svg';
import CartIcon from '../CartIcon/CartIcon';
import CartDropdown from '../CartDropdown/CartDropdown';
import './navigation.styles.scss';

const Navigation = () => {
  const { currentUser } = useContext(UserContext);
  const { isCartOpen } = useContext(CartContext);

  return (
    <>
      <div className='navigation'>
        <Link className='logo-container' to='/'>
          <CrownLogo className='logo' />
        </Link>
        <div className='nav-links-container'>
          <Link className='nav-link' to='shop'>
            SHOP
          </Link>
          {currentUser ? (
            <span className='nav-link' onClick={signOutUser}>
              SIGN OUT
            </span>
          ) : (
            <Link className='nav-link' to='auth'>
              SIGN IN
            </Link>
          )}
          <CartIcon />
        </div>
        {isCartOpen && <CartDropdown />}
      </div>
    </>
  );
};

export default Navigation;
