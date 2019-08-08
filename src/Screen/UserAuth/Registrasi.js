import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import {
  Button,
} from "reactstrap";
import { Link } from "react-router-dom";
import swal from 'sweetalert';
import { registrasiPeminjam} from "../../Global/redux/actions/peminjam"
import '../assets/css/login.css'

class Registrasi extends Component {
  state = {
    registerlist:[]
  };
    render(){
      const registerList =()=>{
        this.state.registerlist.push({				
          'id_ktp':this.state.id_ktp,
          'nama_peminjam':this.state.nama_peminjam,
          'jk': this.state.jk,
          'alamat': this.state.alamat,
          'email': this.state.email,
          'password': this.state.password
        })
        console.log(this.state.registerlist)
        const data = this.state.registerlist
        this.props.dispatch(registrasiPeminjam(data));
        swal({
          title: "Selamat Anda Berhasil Mendaftar Silahkan Login",
          icon: "success",
        }).then(() => {
          this.props.history.push(`/login`)
        })
        
      }
        return(
            <div className="container">
            <div className="row">
              <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
                <div className="card card-signin my-5">
                  <div className="card-body">
                    <h5 className="card-title text-center">Daftar</h5>
                    <form className="form-signin">
                    <div className="form-group">
                <input
                  type="number"
                  name="id_ktp"
                  className="form-control"
                  placeholder="NO. KTP"
                  id="idKtp"
                  required
                  autoFocus
                  onChange = {(e)=>this.setState({id_ktp:e.target.value})}
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  name="nama_peminjam"
                  className="form-control"
                  placeholder="Nama Lengkap"
                  id="namaPeminjam"
                  required
                  onChange = {(e)=>this.setState({nama_peminjam:e.target.value})}
                />
              </div>
              <div className="form-group">
        <label>
          <input type="radio" name="jk" value="1" className="minimal" required defaultChecked onChange = {(e)=>this.setState({jk:e.target.value})} />
          Laki-Laki
        </label>
        {'                                                '}
        <label>
          <input type="radio" name="jk" value="0" className="minimal" required  onChange = {(e)=>this.setState({jk:e.target.value})}/>
          Perempuan
        </label>
      </div>
              <div className="form-group">
                <textarea
                  name="alamat"
                  className="form-control"
                  id="alamat"
                  placeholder="Alamat Lengkap"
                  required
                  onChange = {(e)=>this.setState({alamat:e.target.value})}
                />
                </div>
                      <div className="form-group">
                        <input type="email" id="inputEmail" name="email" className="form-control" placeholder="Email address" onChange = {(e)=>this.setState({email:e.target.value})} required  />
                      </div>
                      <div className="form-group">
                        <input type="password" id="inputPassword" name="password" className="form-control" placeholder="Password" onChange = {(e)=>this.setState({password:e.target.value})} required />
                      </div>
                      <div className="custom-control custom-checkbox mb-3">
                        <input type="checkbox" className="custom-control-input" id="customCheck1" />
                        <label className="custom-control-label" htmlFor="customCheck1">Saya Setuju dengan Persyaratan dan Ketentuan Perpustakaan</label>
                      </div>
                      <Button className="btn btn-lg btn-success btn-block text-uppercase" color="" onClick={registerList.bind(this)}>
                Daftar
              </Button>{" "}
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )
    }
}

const mapStateToProps = state => {
  return {
    listregistrasi: state.peminjam
  };
};

export default connect(mapStateToProps)(Registrasi);