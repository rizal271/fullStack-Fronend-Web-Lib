import axios from "axios";
let URL = "https://perpusfinal.herokuapp.com";


export const currentLogin = (data) => {
    console.log('ini dari aksi',data[0]);
  return {
    type: "LOGIN_USER",
    payload: axios.post(URL + "/authuser/login", data[0]),
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json"
    }
  };
};

export const logout = () => {
return {
  type: "LOGIN_USER",
  payload: axios.post(URL + "/authuser/login"),
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json"
  }
};
};