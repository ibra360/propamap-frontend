import Router from 'next/router';

export const redirect = route => {
  Router.push(route)

};

export const redirectHome = (route = null) => {
  Router.push(route || '/');
};

export const redirectNotFound = (route = null) => {
  Router.push(route || '/error');
};
