import SignInForm from '../../components/SignInForm/SignInForm';
import SignUpForm from '../../components/SignUpForm/SignUpForm';
import Styles from './authentication.styles.js';

const Authentication = () => {
  return (
    <Styles.Container>
      <SignInForm />
      <SignUpForm />
    </Styles.Container>
  );
};

export default Authentication;
