import {jwtDecode} from "jwt-decode";

export const getToken = () => localStorage.getItem("Inscribe_Barrer_Token");
export const getAuth = () => {
const auth = localStorage.getItem("isAuth");
if(auth == null || auth == false){
  return false;
}else{
  return true;
}
}

export const isValidToken = (token) => {
  try {
    const { exp } = jwtDecode(token);
    return Date.now() < exp * 1000;
  } catch (error) {
    return false;
  }
};
