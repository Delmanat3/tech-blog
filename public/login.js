
const loginFormHandler = async (event) => {
  event.preventDefault();

const email=$('#email-login').val().trim();
console.log(email)
const password=$('#password-login').val().trim();
console.log(password)
  if (email && password) {
    // Send a POST request to the API endpoint
    const response = await fetch('/api/users/login', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      // If successful, redirect the browser to the profile page
      document.location.replace('/');
      // replace / with profile later
    } else {
      alert(response.statusText);
    }
  }
};

const signupFormHandler = async (event) => {
  event.preventDefault();

  const username=$('#username-signup').val()
  //console.log(username)
  const email=$('#email-signup').val()
  //console.log(email)
  const password=$('#password-signup').val()
  //console.log(password)

  if (username && email && password) {
    const response = await fetch('/api/users', {
      method: 'POST',
      body: JSON.stringify({ username, email, password }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
     document.location.replace('/');
    //  change homepage to profile later once profile view is set up
    } else {
      alert(response.statusText);
    }
  }
};


  $('.login-form').on('submit', loginFormHandler);


  $('.signup-form').on('submit', signupFormHandler);
