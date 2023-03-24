// import './button.styles.scss';
// import { BaseButton, InvertedButton, GoogleButton } from "./button.styles";

// const BUTTON_TYPE = {
//   google: 'google-button',
//   inverted: 'inverted-button'
// }

// const Button = ({ children, buttonType, ...otherProps }) => {
//   return (
//     <button className={`button-container ${BUTTON_TYPE[buttonType]}`} {...otherProps}>
//       {children}
//     </button> 
//   );
// };

// export default Button;

import { BaseButton, InvertedButton, GoogleButton } from "./button.styles";

const BUTTON_TYPE = {
  google: 'google-button',
  inverted: 'inverted-button'
}

const Button = ({ children, buttonType, ...otherProps }) => {
  return (
    <button className={`button-container ${BUTTON_TYPE[buttonType]}`} {...otherProps}>
      {children}
    </button> 
  );
};

export default Button;