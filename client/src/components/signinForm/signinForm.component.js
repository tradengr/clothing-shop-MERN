import useSignin from '../../hooks/useSignin';


const SigninForm = () => {
  const { submitSignin } = useSignin();

  return (
    <div>
      {/* <h1>I do not have a account</h1>       */}
      <h2>Sign in with your email and password</h2>
      <form onSubmit={submitSignin}>
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
        <button type="submit">Sign In</button>
      </form>
    </div>
  );
};

export default SigninForm;