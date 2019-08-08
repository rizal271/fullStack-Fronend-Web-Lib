import axios from "axios";
let URL = "https://perpusfinal.herokuapp.com";

let token = localStorage.getItem("token")
let id = localStorage.getItem("id")
let auth ={
  'authorization' : 'w3lc0meto4pp',
  'x-access-token' : token,
  'x-control-user': id
}

export const getBuku = () => {
  return {
    type: "GET_BUKU",
    payload: axios.get(URL+'/book',{
      headers: auth
    })
  };
};

export const getdetailBuku = (id) => {
  return {
    type: "GET_DETAIL_BUKU",
    payload: axios.get(URL+`/book/detail/${id}`)
  };
};

export const getBukuactive = () => {
  return {
    type: "GET_BUKU_ACTIVE",
    payload: axios.get(URL+'/book/active')
  };
};

export const postBuku = (data) => {
  console.log('ini dari aksi',data);
  // {id_ktp:data[0].id_ktp, nama_KATEGORI: data[0].nama_KATEGORI, alamat: data[0].alamat}
  return {
    type: "POST_BUKU",
    payload: axios.post(URL+'/book', data)
  };
};

export const deleteBuku = (id_kategori) =>{
  console.log('action id', id_kategori)
	return{
		type: 'DELETE_BUKU',
		payload: axios.delete(URL +`/book/${id_kategori}`)
	}
}