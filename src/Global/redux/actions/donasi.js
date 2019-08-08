import axios from "axios";
let URL = "https://perpusfinal.herokuapp.com";

let token = localStorage.getItem("token")
let id = localStorage.getItem("id")
let auth ={
  'authorization' : 'w3lc0meto4pp',
  'x-access-token' : token,
  'x-control-user': id,
  
}

export const getDonasi = () => {
  return {
    type: "GET_DONASI",
    payload: axios.get(URL+'/donate',{
      headers: auth
    })
  };
};


export const postDonasi =  (data) => {
  // {id_ktp:data[0].id_ktp, nama_KATEGORI: data[0].nama_KATEGORI, alamat: data[0].alamat}
  return {
    type: "POST_DONASI",
    payload: axios.post(URL+'/donate', data, {
        headers: {
            'authorization' : 'w3lc0meto4pp',
        }
    })
  };
};

export const deleteBuku = (id_kategori) =>{
  console.log('action id', id_kategori)
	return{
		type: 'DELETE_BUKU',
		payload: axios.delete(URL +`/book/${id_kategori}`)
	}
}