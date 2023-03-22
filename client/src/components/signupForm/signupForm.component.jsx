import useSignup from '../../hooks/useSignup';
import FormInput from '../formInput/formInput.component';
import Button from '../button/button.component';
import './signupForm.styles.scss';

const SignupForm = () => {
  const { submitSignup } = useSignup();
  
  return (
    <div className='sign-up-container'>
      <h2>I do not have a account</h2>      
      <span>Sign up with your email and password</span>
      <form onSubmit={submitSignup}>
        <FormInput
          label = 'Display Name'
          type='text' 
          name='displayName'
          required 
        />
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
        <FormInput
          label='Confirm Password'
          type='password' 
          name='confirmPassword'
          required 
        />
        <Button children='Submit' type="submit" className='center' />
        {/* <Button type="submit">Sign Up</Button> */}
      </form>
    </div>
  );
};

export default SignupForm;