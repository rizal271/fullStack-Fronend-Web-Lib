import axios from "axios";
let URL = "https://perpusfinal.herokuapp.com";
let token = localStorage.getItem("token")
let id = localStorage.getItem("id")
let auth ={
  'authorization' : 'w3lc0meto4pp',
  'x-access-token' : token,
  'x-control-user': id
}

export const getKategori = () => {
  return {
    type: "GET_KATEGORI",
    payload: axios.get(URL+'/category', {
      headers: auth
    })
  };
};

export const postKategori = (data) => {
  console.log('ini dari aksi',data[0]);
  // {id_ktp:data[0].id_ktp, nama_KATEGORI: data[0].nama_KATEGORI, alamat: data[0].alamat}
  return {
    type: "POST_KATEGORI",
    payload: axios.post(URL+'/category', data[0], {
      headers: auth
    })
  };
};

export const deleteKategori = (id_kategori) =>{
  console.log('action id', id_kategori)
	return{
		type: 'DELETE_KATEGORI',
		payload: axios.delete(URL +`/category/${id_kategori}`, {
      headers: auth
    })
	}
}

