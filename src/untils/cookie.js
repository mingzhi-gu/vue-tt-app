import cookie from 'js-cookie';

function setCookie(userInfo) {
  const arr = Object.entries(userInfo);
  for (let i = 0; i < arr.length; i += 1) {
    cookie.set(i[0], i[1]);
  }
}
function getCookie() {
  return {
    appkey: cookie.get('appkey'),
    username: cookie.get('username'),
    email: cookie.get('email'),
    role: cookie.get('role'),
  };
}

function removeCookie() {
  cookie.remove('appkey'),
  cookie.remove('username'),
  cookie.remove('email'),
  cookie.remove('role');
}

export default {
  setCookie,
  getCookie,
  removeCookie,
};
