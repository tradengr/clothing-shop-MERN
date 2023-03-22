import axios from 'axios';

async function httpSubmitSignup(user) {
  try {
    return await axios.post('http://localhost:8000/signup', user, {
      withCredentials: true
    });
  } catch (err) {
    console.error(err);
  }
}

async function httpSubmitSignin(user) {
  try {
    return await axios.post('http://localhost:8000/auth/local', user, {
      withCredentials: true
    });
  } catch (err) {
    console.error(err);
  }
}

async function httpGetUser() {
  try {
    return await axios.get('http://localhost:8000/user', { withCredentials: true })
  } catch (err) {
    console.error(err);
  } 
}

async function httpSignoutUser() {
  try {
    const response = await axios.delete('http://localhost:8000/signout', {
      withCredentials: true
    });
    if (response.status === 200)
      window.location.replace('/auth');
  } catch (err) {
    console.error(err);
  }
}

export {
  httpSubmitSignup,
  httpSubmitSignin,
  httpGetUser,
  httpSignoutUser,
}