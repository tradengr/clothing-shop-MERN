import useSignup from '../../hooks/useSignup';


const SignupForm = () => {
  const { submitSignup } = useSignup();
  
  return (
    <div>
      <h1>I do not have a account</h1>      
      <h2>Sign up with your email and password</h2>
      <form onSubmit={submitSignup}>
        <label>Display Name</label>
        <input 
          type='text' 
          name='displayName' 
          required 
        />
        <label>Email</label>
        <input 
          type='email' 
          name='email'  
          required 
        />
        <label>Password</label>
        <input 
          type='password' 
          name='password'  
          required 
        />
        <label>Confirm Password</label>
        <input 
          type='password' 
          name='confirmPassword'  
          required 
        />
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default SignupForm;