import { useContext } from 'react';
import { signOutUser } from '../../utils/firebase.utils';
import { UserContext } from '../../contexts/UserContext';
import { CartContext } from '../../contexts/CartContext';
import { ReactComponent as CrownLogo } from '../../assets/crown.svg';
import CartIcon from '../CartIcon/CartIcon';
import CartDropdown from '../CartDropdown/CartDropdown';
import Styles from './navigation.styles.js';

const Navigation = () => {
  const { currentUser } = useContext(UserContext);
  const { isCartOpen } = useContext(CartContext);

  return (
    <>
      <Styles.Container>
        <Styles.LogoContainer to='/'>
          <CrownLogo className='logo' />
        </Styles.LogoContainer>
        <Styles.NavLinks>
          <Styles.NavLink to='shop'>SHOP</Styles.NavLink>
          {currentUser ? (
            <Styles.NavLink as='span' onClick={signOutUser}>
              SIGN OUT
            </Styles.NavLink>
          ) : (
            <Styles.NavLink to='auth'>SIGN IN</Styles.NavLink>
          )}
          <CartIcon />
        </Styles.NavLinks>
        {isCartOpen && <CartDropdown />}
      </Styles.Container>
    </>
  );
};

export default Navigation;
