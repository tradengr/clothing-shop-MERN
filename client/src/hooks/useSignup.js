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
    
    if (password !== confirmPassword) {
      // TODO: display error message
      alert('Password does not match');
      return;
    }

    const user = {
      displayName,
      email,
      password,
    }
    // console.log(user)
    const response = await httpSubmitSignup(user);    
    console.log(response);

    // TODO: set success based on response
  }

  return {
    submitSignup
  }
}

export default useSignup;
  