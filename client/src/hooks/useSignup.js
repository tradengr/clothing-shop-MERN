import { httpSubmitSignup } from '../apis/backendAPI';

const useSignup = () => {
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

    const response = await httpSubmitSignup(user);
    if (response.status === 201)
      window.location.reload();
  }

  return {
    submitSignup
  }
}

export default useSignup;
  