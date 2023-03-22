import useSignin from '../../hooks/useSignin';
import FormInput from '../formInput/formInput.component';
import Button from '../button/button.component';
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
        <Button children='Sign In' type="submit" />
      </form>
      <form action='http://localhost:8000/auth/google'>
        <Button children='Sign In with Google' buttonType='google' type='submit' />
      </form>
    </div>
  );
};

export default SigninForm;