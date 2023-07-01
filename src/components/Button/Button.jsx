import './button.styles.scss';

const BUTTON_STYLE = {
  inverted: 'inverted',
  google: 'google-sign-in',
};

const Button = ({ children, buttonStyle, ...buttonOptions }) => {
  return (
    <button
      className={`button-container ${BUTTON_STYLE[buttonStyle]}`}
      {...buttonOptions}
    >
      {children}
    </button>
  );
};

export default Button;
