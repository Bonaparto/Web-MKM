const authorizationDiv = document.getElementById("authorization");
const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');
const repeatInput = document.getElementById('repeat_password');
const submitButton = document.getElementById('submitButton');

const account = {};

const getInputData = () => {
  const username = usernameInput.value;
  const password = passwordInput.value;
  return [username, password];
}

const login = () => {
  const [username, password] = getInputData();
  if (account.username !== username || account.password !== password) {
    alert('Incorrect login or password');
    passwordInput.value = '';
    return;
  }

  authorizationDiv.innerHTML = 'You have logged in'
}

const useLogin = () => {
  authorizationDiv.removeChild(repeatInput);
  submitButton.onclick = login;
  submitButton.innerText = 'Login';
}

const createAccount = () => {
  const [username, password] = getInputData();
  const repeat_password = repeatInput.value;

  if (!username) {
    alert('Incorrect username');
    return;
  }

  if (!password || !repeat_password || repeat_password !== password) {
    alert('Incorrect password data');
    return;
  }

  account['username'] = username;
  account['password'] = password;

  passwordInput.value = '';
  usernameInput.value = '';

  useLogin();
}