import './button.styles.scss';

const BUTTON_TYPE = {
  google: 'google-button',
  inverted: 'inverted-button'
}

const Button = ({ children, buttonType }) => {
  return (
    <button className={`button-container ${BUTTON_TYPE[buttonType]}`}>
      {children}
    </button> 
  );
};

export default Button;