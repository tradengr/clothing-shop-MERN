async function httpSubmitSignup(user) {
  try {
    return await fetch('http://localhost:8000/signup', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(user)
    })
  } catch (err) {
    console.error(err);
  }
}

export {
  httpSubmitSignup
}