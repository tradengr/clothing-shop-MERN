import axios from 'axios';

async function httpSubmitSignup(user) {
  // try {
  //   return await fetch('http://localhost:8000/signup', {
  //     method: 'post',
  //     headers: {
  //       'Content-Type': 'application/json'
  //     },
  //     body: JSON.stringify(user)
  //   })
  // } catch (err) {
  //   console.error(err);
  // }
  try {
    return await axios.post('http://localhost:8000/signup', user, {
      withCredentials: true
    });
  } catch (err) {
    console.error(err);
  }
}

async function httpSubmitSignin(user) {
  // try {
  //   return await fetch('http://localhost:8000/auth/local', {
  //     method: 'post',
  //     headers: {
  //       'Content-Type': 'application/json'
  //     },
  //     body: JSON.stringify(user)
  //   })
  // } catch (err) {
  //   console.error(err);
  // }
  try {
    return await axios.post('http://localhost:8000/auth/local', user, {
      withCredentials: true
    });
  } catch (err) {
    console.error(err);
  }
}

export {
  httpSubmitSignup,
  httpSubmitSignin
}