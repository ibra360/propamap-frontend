import serviceHandler from '../../utils/services/serviceHandler';
import cookies from '../../utils/services/cookie';
import { COOKIE_IDENTIFIER,COOKIE_ID } from '../../core/constants/auth';
import socket from "../../utils/socket"

export const TryLogInAction = async () => {
  const res = await serviceHandler.get('user/auth');
  return res;
};

export const SignInAction = async (user) => {
  let url = 'user/login'
  let headers = {"Content-Type" : 'application/json'}
  // if(slicetoken){
  //   headers = { Authorization: slicetoken, 'Content-Type': 'application/json' }
  // }
  if (user.social_profile) {
    url = 'user/socialLogin'
    headers = { token: user.token, "Content-Type" : 'application/json' }
    delete user.token
  }
  const res = await serviceHandler.post(url, {
    body: JSON.stringify(user),
    headers
  });
  if (res.result) {
    cookies.set(
      COOKIE_IDENTIFIER,
      res.token,
      user.rememberMe ? 365 * 4 : 'session'
    );
    cookies.set(
      COOKIE_ID,
      JSON.stringify(res.body),
      user.rememberMe ? 365 * 4 : 'session'
    );
  }
  connectSocket(res.token)
  return res;
};

/*
 * user verify
*/
export const UserVerifyAction = async (slicetoken) => {
  let url = 'user/verify'
  let headers = {"Content-Type" : 'application/json'}
  if(slicetoken){
    headers = { Authorization: slicetoken, 'Content-Type': 'application/json' }
  }
  const res = await serviceHandler.get(url, {
    headers
  });
  if (res.result) {
  }
  return res;

};

export const connectSocket = (token) => {
  socket.on("connect",()=>{
    socket.emit("authentication",{
      token: token,
      medium: "web"
    })
  })
  socket.on('checking',(id)=>{
    console.log('connected to -->',id)
  })
  socket.on('unauthorized', (reason) => {
    console.log('Unauthorized:', reason);
  });
  
  socket.on('disconnect', (reason) => {
    console.log(`Disconnected: ${reason}`);
  });
  socket.open()
}

export const SignOutAction = async () => {
  cookies.set(COOKIE_IDENTIFIER, '', -1);
  cookies.set(COOKIE_ID, '', -1);
  socket.close()
};

