const authorization = document.getElementById("authorization");
const username_input = document.getElementById('username');
const password_input = document.getElementById('password');
const password1_input = document.getElementById('password1');
const submit_button = document.getElementById('submitButton');

const account = {};

const login = () => {
  const username = username_input.value;
  const password = password_input.value;
  if (account.username !== username || account.password !== password) {
    alert('Неправильные данные');
    password_input.value = '';
    return;
  }

  authorization.innerHTML = 'Вы зашли в аккаунт'
}

const change_to_login = () => {
  authorization.removeChild(password1_input);
  submit_button.onclick = login;
  submit_button.innerText = 'Login';
}

const create = () => {
  const username = username_input.value;
  const password = password_input.value;
  const password1 = password1_input.value;

  if (!username) {
    alert('Некорректный логин');
    return;
  }

  if (!password || !password1 || password1 !== password) {
    alert('Некорректный пароль');
    return;
  }

  account['username'] = username;
  account['password'] = password;

  password_input.value = '';
  username_input.value = '';

  change_to_login();
}