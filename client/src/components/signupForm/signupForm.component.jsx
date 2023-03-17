import { useState } from "react";

const SignupForm = () => {
  const defaultFormFields = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
  }

  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value })
  }
  console.log(formFields);

  return (
    <div>
      <h1>I do not have a account</h1>      
      <h2>Sign up with your email and password</h2>
      <form>
        <label>Display Name</label>
        <input 
          type='text' 
          name='displayName' 
          value={displayName} 
          onChange={handleChange} 
          required 
        />
        <label>Email</label>
        <input 
          type='email' 
          name='email' 
          value={email} 
          onChange={handleChange} 
          required 
        />
        <label>Password</label>
        <input 
          type='password' 
          name='password' 
          value={password} 
          onChange={handleChange} 
          required 
        />
        <label>Confirm Password</label>
        <input 
          type='password' 
          name='confirmPassword' 
          value={confirmPassword} 
          onChange={handleChange} 
          required 
        />
      </form>
    </div>
  );
};

export default SignupForm;