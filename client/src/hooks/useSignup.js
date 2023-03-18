import { httpSubmitSignup } from '../apis/backendAPI';

const useSignup = () => {
  // TODO: move to another folder
  const submitSignup = async (event) => {
    event.preventDefault();
  
    const data = new FormData(event.target);
    const displayName = data.get('displayName');
    const email = data.get('email');
    const password = data.get('password');
    const confirmPassword = data.get('confirmPassword');
    const response = await httpSubmitSignup({
      displayName,
      email,
      password,
      confirmPassword
    });
  
    // TODO: set success based on response
  }

  return {
    submitSignup
  }
}

export default useSignup;
  