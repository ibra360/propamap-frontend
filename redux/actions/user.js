import serviceHandler from '../../utils/services/serviceHandler';
import cookies from '../../utils/services/cookie';
import { COOKIE_IDENTIFIER, COOKIE_ID } from '../../core/constants/auth';

export const CreateUserAction = async user => {
  const res = await serviceHandler.post(`user/register`, {
    body: JSON.stringify(user)
  });
  if (res.result) {
    cookies.set(
      COOKIE_IDENTIFIER,
      res.token,
      user.rememberMe ? 365 * 4 : 'session'
    )
    cookies.set(
      COOKIE_ID,
      JSON.stringify(res.body),
      user.rememberMe ? 365 * 4 : 'session'
    )
  }

  return res;
};

export const UpdateUserAction = async user => {
  const res = await serviceHandler.put(`users`, {
    body: JSON.stringify(user)
  });
  return res;
};

export const UpdateProfileAction = async user => {
  const res = await serviceHandler.put('users/profile', {
    body: JSON.stringify(user)
  });
  return res;
};

export const UpdatePasswordAction = async userPassword => {
  const res = await serviceHandler.put('users/password', {
    body: JSON.stringify(userPassword)
  });
  return res;
};

export const GetUsersAction = async (query = null) => {
  if (query) {
    query = `${query.query ? `query=${query.query}` : ''}${
      query.accountType ? `&&accountType=${query.accountType}` : ''
    }`;
  }
  const res = await serviceHandler.get(`users?${query}`);
  return res;
};

export const GetUserByIdAction = async id => {
  const res = await serviceHandler.get(`users/${id}`);
  return res;
};

export const GetProfileAction = async id => {
  const res = await serviceHandler.get('users/me');
  return res;
};

export const ForgotPassword = async user => {
  const res = await serviceHandler.post(`user/forgotPassword`, {
    body: JSON.stringify(user)
  })
  return res
};

