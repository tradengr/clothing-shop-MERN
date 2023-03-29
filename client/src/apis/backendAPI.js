import axios from 'axios';

const API_URL = 'http://localhost:8000';

async function httpSubmitSignup(user) {
  try {
    return await axios.post(`${API_URL}/signup`, user, {
      withCredentials: true
    });
  } catch (err) {
    console.error(err);
  }
}

async function httpSubmitSignin(user) {
  try {
    return await axios.post(`${API_URL}/auth/local`, user, {
      withCredentials: true
    });
  } catch (err) {
    console.error(err);
  }
}

async function httpGetUser() {
  try {
    const response = await axios.get(`${API_URL}/user`, { withCredentials: true });
    const user = response.data;
    return user;
  } catch (err) {
    console.error(err);
  } 
}

async function httpSignoutUser() {
  try {
    const response = await axios.delete(`${API_URL}/signout`, {
      withCredentials: true
    });
    if (response.status === 200)
      window.location.replace('/auth');
  } catch (err) {
    console.error(err);
  }
}

async function httpGetCategories() {
  try {
    const response = await axios.get(`${API_URL}/categories`, { withCredentials: true });
    const categories = response.data;
    return categories;
  } catch (err) {
    console.error(err);
  }
}

export {
  httpSubmitSignup,
  httpSubmitSignin,
  httpGetUser,
  httpSignoutUser,
  httpGetCategories,
}