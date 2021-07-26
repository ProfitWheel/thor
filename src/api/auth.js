import axios from 'axios';

let url = "http://35.200.172.84/api";

//Set Authorization Token
export function setAuthorizationToken(token) {
    if (token) {
      axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    } else {
      delete axios.defaults.headers.common['Authorization'];
    }
  }
  
  //Authentication
  export function authenticate(UserData) {
    return axios.post(`${url}/auth/login/`, UserData) //login api
  }
  
  export function resetOtp(userData) {
    return axios.post(`${url}/auth/otp/`, userData); //reset otp api
  }
  
  export function register(userData) {
    return axios.post(`${url}/auth/register/`, userData); //register api
  }