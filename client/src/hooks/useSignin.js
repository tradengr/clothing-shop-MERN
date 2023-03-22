// import { useContext } from "react";

// import { UserContext } from "../contexts/user.contexts";
import { httpSubmitSignin } from "../apis/backendAPI";

const useSignin = () => {
  // const { setCurrentUser } = useContext(UserContext);

  const submitSignin = async (event) => {
    event.preventDefault();

    const data = new FormData(event.target);
    const email = data.get('email');
    const password = data.get('password');

    const user = {
      email,
      password
    }

    const response = await httpSubmitSignin(user);
    if (response.status === 200)
      window.location.replace('/');
    // const userData = await response.json();
    // console.log('usesignin', userData);
    // setCurrentUser(userData);

  }

  return {
    submitSignin
  };
}

export default useSignin;