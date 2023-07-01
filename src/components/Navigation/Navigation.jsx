import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { signOutUser } from '../../utils/firebase.utils';
import { UserContext } from '../../contexts/UserContext';
import { ReactComponent as CrownLogo } from '../../assets/crown.svg';
import './navigation.styles.scss';

const Navigation = () => {
  const { currentUser } = useContext(UserContext);

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
        </div>
      </div>
    </>
  );
};

export default Navigation;