import axios from "axios";
let URL = "https://perpusfinal.herokuapp.com";

let token = localStorage.getItem("token")
let id = localStorage.getItem("id")
let auth ={
  'authorization' : 'w3lc0meto4pp',
  'x-access-token' : token,
  'x-control-user': id
}


export const getPeminjam = () => {
  return {
    type: "GET_PEMINJAM",
    payload: axios.get(URL+'/member', {
      headers: auth
    })
  };
};

export const postPeminjam = (data) => {
  console.log('ini dari aksi',data[0]);
  // {id_ktp:data[0].id_ktp, nama_peminjam: data[0].nama_peminjam, alamat: data[0].alamat}
  return {
    type: "POST_PEMINJAM",
    payload: axios.post(URL+'/member', data[0], {
      headers: auth
    })
  };
};

export const registrasiPeminjam = (data) => {
  console.log('ini dari aksi',data[0]);
  // {id_ktp:data[0].id_ktp, nama_peminjam: data[0].nama_peminjam, alamat: data[0].alamat}
  return {
    type: "REGISTRASI_PEMINJAM",
    payload: axios.post(URL+'/authuser/register', data[0])
  };
};

export const deletePinjam = (id_ktp) =>{
  console.log('action id', id_ktp)
	return{
		type: 'DELETE_PINJAM',
		payload: axios.delete(URL +`/member/${id_ktp}`, {
      headers: auth
    })
	}
}

