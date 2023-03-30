import useSignin from '../../hooks/useSignin';
import FormInput from '../formInput/formInput.component';
import { Button, GoogleButton } from '../button/button.styles';
import { httpGoogleSignin } from '../../apis/backendAPI';

import './signinForm.styles.scss';


const SigninForm = () => {
  const { submitSignin } = useSignin();

  return (
    <div className='sign-in-container'>
      <h2>Already have an account?</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={submitSignin}>
        <FormInput
          label='Email' 
          type='email' 
          name='email'
          required 
        />
        <FormInput
          label='Password' 
          type='password' 
          name='password'
          required 
        />
        <Button type='submit'>Sign In</Button>
      </form>
      {/* <form action='http://localhost:8000/auth/google'>
        <GoogleButton type='submit'>Sign In With Google</GoogleButton>
      </form> */}
      <GoogleButton onClick={httpGoogleSignin}>Sign In With Google</GoogleButton>
    </div>
  );
};

export default SigninForm;