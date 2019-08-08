import axios from "axios";
let URL = "https://perpusfinal.herokuapp.com";

const getHome = (data) => {
  return {
    type: "GET_HOME",
    payload: axios.get(URL+`/book/?page=${data}`)
  };
};

export default getHome