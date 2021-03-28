const set = (cname, cvalue, exdays) => {
  let d = new Date();
  d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
  let expires = 'expires=' + d.toUTCString();
  document.cookie = cname + '=' + cvalue + ';' + expires + ';path=/';
};

const get = cname => {
  let name = cname + '=';
  let ca = document.cookie.split(';');
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return '';
};

const parse = cstring => {
  const cookieStrings = cstring.split(';');
  const cookies = [];

  for (let i = 0; i < cookieStrings.length; i++) {
    let indexOfAssign = cookieStrings[i].indexOf('=');

    let obj = {
      name: cookieStrings[i].slice(0, indexOfAssign).trim(),
      value: cookieStrings[i].slice(indexOfAssign + 1, cookieStrings[i].length)
    };

    cookies.push(obj);
  }

  cookies.lookup = function(param) {
    return this.filter(obj => obj.name === param)[0].value;
  };

  return cookies;
};

export default { set, get, parse };
