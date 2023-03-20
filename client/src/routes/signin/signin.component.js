import SigninForm from "../../components/signinForm/signinForm.component";
import SignupForm from "../../components/signupForm/signupForm.component";

const Signin = () => {
  return (
    <div>
      <h1>SIGN IN PAGE</h1>
      <SigninForm/>
      <a href='/auth/google'>Sign In with Google</a>
      <SignupForm/>
    </div>
  );
};

export default Signin;