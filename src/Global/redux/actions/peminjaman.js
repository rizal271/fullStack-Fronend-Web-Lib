import axios from "axios";
let URL = "https://perpusfinal.herokuapp.com";

let token = localStorage.getItem("token")
let id = localStorage.getItem("id")
let auth ={
  'authorization' : 'w3lc0meto4pp',
  'x-access-token' : token,
  'x-control-user': id
}


export const getPeminjaman = () => {
  return {
    type: "GET_PEMINJAMAN",
    payload: axios.get(URL+'/borrowing', {
      headers: auth
    })
  };
};

export const detailPeminjaman = (id) => {
  return {
    type: "DETAIL_PEMINJAMAN",
    payload: axios.get(URL+`/borrowing/details/${id}`, {
      headers: auth
    })
  };
};

export const getbyidUserPeminjaman = (id) => {
  return {
    type: "GET_BY_ID_USER_PEMINJAMAN",
    payload: axios.get(URL+`/borrowing/getbyiduser/${id}`, {
      headers: auth
    })
  };
};

export const kembaliPeminjaman = (id, data) => {
  console.log('ini dari aksi',data);
  return {
    type: "KEMBALI_PEMINJAMAN",
    payload: axios.patch(URL+`/borrowing/retruned/${id}`, data, {
      headers: auth
    })
  };
};

export const postPeminjaman = (data) => {
  console.log('ini dari aksi',data[0]);
  return {
    type: "POST_PEMINJAMAN",
    payload: axios.post(URL+'/borrowing', data[0], {
      headers: auth
    })
  };
};

export const deletePinjaman = (id_ktp) =>{
  console.log('action id', id_ktp)
	return{
		type: 'DELETE_PINJAMAN',
		payload: axios.delete(URL +`/borrowing/${id_ktp}`, {
      headers: auth
    })
	}
}

