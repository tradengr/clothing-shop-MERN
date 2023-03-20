import { httpSubmitSignin } from "../apis/backendAPI";


const useSignin = () => {
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
    console.log(response);
  }

  return submitSignin;
}

export default useSignin;