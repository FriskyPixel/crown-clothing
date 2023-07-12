import Styles from './button.styles.js';

export const BUTTON_STYLE = {
  base: Styles.BaseButton,
  inverted: Styles.InvertedButton,
  google: Styles.GoogleSignInButton,
};

const getButton = (buttonStyle = BUTTON_STYLE.base) => buttonStyle;

const Button = ({ children, buttonStyle, ...buttonOptions }) => {
  const CustomButton = getButton(buttonStyle);

  return <CustomButton {...buttonOptions}>{children}</CustomButton>;
};

export default Button;
