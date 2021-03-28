import capitalize from './stringHelper';

const objHasPropOfValue = (obj, value) => {
  for (let prop in obj) {
    if (obj[prop] === value) return true;
  }
  return false;
};

const collace = param => {
  return param ? param : '-';
};

const groupByArray = (arr, key) => {
  return arr.reduce(function(rv, x) {
    let v = key instanceof Function ? key(x) : x[key];
    let el = rv.find(r => r && r.key === v);
    if (el) {
      el.values.push(x);
    } else {
      rv.push({ key: v, values: [x] });
    }
    return rv;
  }, []);
};

const getGroupedOptions = (arr, text, value) => {
  return arr.map(ele => ({
    label: capitalize(ele.key),
    data: ele.values.map(val => ({
      text: val[text],
      value: val[value]
    }))
  }));
};

const getOptions = (arr, text, value) => {
  return arr.map(ele => ({
    value: ele[value],
    text: ele[text]
  }));
};

export {
  objHasPropOfValue,
  collace,
  groupByArray,
  getGroupedOptions,
  getOptions
};
