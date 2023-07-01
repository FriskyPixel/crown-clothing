import { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { signOutUser } from '../../utils/firebase';
import { UserContext } from '../../contexts/UserContext';
import { ReactComponent as CrownLogo } from '../../assets/crown.svg';
import './Navigation.scss';

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
      <Outlet />
    </>
  );
};

export default Navigation;
