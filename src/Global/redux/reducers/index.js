import {combineReducers} from 'redux';
import buku from './buku';
import home from './home'
import peminjam from './peminjam'
import peminjaman from './peminjaman'
import kategori from './kategori'
import login from './login'
import donasi from './donasi'


const appReducer = combineReducers({
    peminjam,
    peminjaman,
    home,
    kategori,
    buku,
    login,
    donasi
});

export default appReducer;
