import SigninForm from "../../components/signinForm/signinForm.component";
import SignupForm from "../../components/signupForm/signupForm.component";
import './authentication.styles.scss';

const Authentication = () => {
  return (
    <div className="sign-in-up-container">
      <SigninForm/>
      <SignupForm/>
      {/* <form action="/signout" method="post">
        <button type="submit">Sign Out</button>
      </form> */}
    </div>
  );
};

export default Authentication;