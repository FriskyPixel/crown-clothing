import Styles from './form-input.styles.js';

const FormInput = ({ label, ...inputOptions }) => {
  return (
    <Styles.Container>
      <Styles.Input {...inputOptions} />
      {label && (
        <Styles.InputLabel shrink={inputOptions.value.length}>
          {label}
        </Styles.InputLabel>
      )}
    </Styles.Container>
  );
};

export default FormInput;
