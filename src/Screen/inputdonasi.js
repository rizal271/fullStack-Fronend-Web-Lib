import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { Button } from "reactstrap";
import { Link } from "react-router-dom";
import swal from "sweetalert";
import {postBuku} from "../Global/redux/actions/buku"
import { getKategori } from "../Global/redux/actions/kategori";
import "../Screen/assets/css/login.css";
import axios from "axios";

class inputdonasi extends Component {
  state = {
    kategorilist: []
    // donasilist: [],
    // id_kategori: 1,
    // nama_buku_donasi: "",
    // pengarang_buku_donasi: "",
    // avatarSource: null,
    // gbr_buku_donasi: null,
    // no_ktp: 1,
    // nama_donasi: "",
    // alamat_donasi: ""
  };

  componentDidMount = async () => {
    await this.props.dispatch(getKategori());
    console.log("ini dari props list Kategori", this.props.listkategori);
    this.setState({
      kategorilist: this.props.listkategori.listKategori.result
    });
  };
  onChangeFile = e => {
    console.log(e.target.files[0]);
    this.setState({
      file: e.target.files[0]
    });
  };
  render() {
    const bookAdd = () => {
      const dataFile = new FormData();
      dataFile.append("id_kategori", this.state.id_kategori);
      dataFile.append("nama_buku", this.state.nama_buku_donasi);
      dataFile.append(
        "pengarang",
        this.state.pengarang_buku_donasi
      );
      dataFile.append("gbr", this.state.file);
      add(dataFile);
    };
    let add = async data => {
      await this.props
        .dispatch(postBuku(data))
        .then(() => {
          swal({
            title: "Succes",
            text: "Add Success !!",
            icon: "success",
            button: "OK"
          }).then(() => {
            window.location.href = "/book";
          });
        })
        .catch(() => {
          swal({
            title: "Add Failed",
            text: "Book Is Avalaible",
            icon: "warning",
            buttons: "OK"
          }).then(() => {
            window.location.href = "/book";
          });
        });
    };
    const list_kategori = this.state.kategorilist;
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
            <div className="card card-signin my-5">
              <div className="card-body">
                <h5 className="card-title text-center">Donasi Buku</h5>
                <form className="form-signin" encType="multipart/form-data">
                  <div className="form-group">
                    <select
                      name="id_kategori"
                      onChange={e =>
                        this.setState({ id_kategori: e.target.value })
                      }
                      className="form-control"
                      required
                    >
                      <option>--Pilih Kategori Buku--</option>
                      {list_kategori.map((val_list, index) => {
                        return (
                          <option key={index} value={val_list.id_kategori}>
                            {val_list.nama_kategori}
                          </option>
                        );
                      })}
                    </select>
                  </div>
                  <div className="form-group">
                    <input
                      type="text"
                      name="nama_buku_donasi"
                      className="form-control"
                      placeholder="Nama Buku"
                      id="idKtp"
                      required
                      autoFocus
                      onChange={e =>
                        this.setState({ nama_buku_donasi: e.target.value })
                      }
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="text"
                      name="pengarang_buku_donasi"
                      className="form-control"
                      placeholder="Nama Pengarang"
                      id="namaPeminjam"
                      required
                      onChange={e =>
                        this.setState({ pengarang_buku_donasi: e.target.value })
                      }
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="file"
                      name="gbr_buku_donasi"
                      className="form-control"
                      placeholder="Nama Lengkap"
                      id="namaPeminjam"
                      required
                      onChange={this.onChangeFile}
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="text"
                      name="no_ktp"
                      className="form-control"
                      placeholder="No Ktp"
                      id="namaPeminjam"
                      required
                      onChange={e => this.setState({ no_ktp: e.target.value })}
                    />
                  </div>
                  <Button
                    className="btn btn-lg btn-success btn-block text-uppercase"
                    color=""
                    onClick={bookAdd.bind(this)}
                  >
                    Donasi Buku
                  </Button>{" "}
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    listdonasi: state.donasi,
    listkategori: state.kategori
  };
};

export default connect(mapStateToProps)(inputdonasi);
