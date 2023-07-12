import { useState } from 'react';
import {
  signInAuthUserWithEmailAndPassword,
  signInWithGooglePopup,
} from '../../utils/firebase.utils';
import FormInput from '../FormInput/FormInput';
import Button, { BUTTON_STYLE } from '../Button/Button';
import Styles from './sign-in-form.styles.js';

const defaultFormFields = {
  email: '',
  password: '',
};

const SignInForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  const handleChange = (ev) => {
    const { name, value } = ev.target;
    setFormFields((currValue) => ({ ...currValue, [name]: value }));
  };

  const handleSubmit = async (ev) => {
    ev.preventDefault();

    try {
      await signInAuthUserWithEmailAndPassword(email, password);
      setFormFields(defaultFormFields);
    } catch (err) {
      switch (err.code) {
        case 'auth/wrong-password':
          alert('Incorrect password for email');
          break;
        case 'auth/user-not-found':
          alert('No user associated with this email');
          break;
        default:
          console.error('Error signing in', err);
      }
    }
  };

  return (
    <Styles.Container>
      <h2>Already have an account?</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label='Email'
          required
          type='email'
          name='email'
          value={email}
          onChange={handleChange}
        />

        <FormInput
          label='Password'
          required
          type='password'
          name='password'
          value={password}
          onChange={handleChange}
        />
        <Styles.ButtonsContainer>
          <Button type='submit'>Sign In</Button>
          <Button
            type='button'
            buttonStyle={BUTTON_STYLE.google}
            onClick={signInWithGooglePopup}
          >
            Google Sign In
          </Button>
        </Styles.ButtonsContainer>
      </form>
    </Styles.Container>
  );
};

export default SignInForm;
