import React, { Component, Fragment } from "react";
import {
  Table,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter
} from "reactstrap";
import swal from 'sweetalert';
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import {getKategori} from "../Global/redux/actions/kategori";
import {getBuku, postBuku, deleteBuku} from "../Global/redux/actions/buku"

class Buku extends Component {
  state = {
    bukulist: [],
    modal: false,
    modaledit:false,
    insertlist:[],
    kategorilist:[]
  };

  
  componentDidMount = async () => {
    await this.props.dispatch(getBuku());
    await this.props.dispatch(getKategori());
    console.log("ini dari props listbuku", this.props.listbuku);
    console.log("ini dari props list Kategori", this.props.listkategori);
    this.setState({
      bukulist: this.props.listbuku.listBuku.result,
      kategorilist: this.props.listkategori.listKategori.result
    });
  };
  toggle = this.toggle.bind(this);
  toggle() {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }
  
  toggleedit = this.toggleedit.bind(this);
  toggleedit() {
    this.setState(prevState => ({
      modaledit: !prevState.modal
    }));
  }
  handledelete = (id_kategori) =>{
    console.log('coba id', id_kategori);
    swal({
        title: "Apakah Anda Yakin?",
        text: "Data Anda tidak akan kembali lagi",
        icon: "warning",
        buttons: true,
        dangerMode: true,
      }).then((willDelete) => {
        if (willDelete) {
          swal("Data Behasil dihapus!", {
            icon: "success",
          });
          this.props.dispatch(deleteBuku(id_kategori));
          this.setState({ id_kategori : id_kategori })
        } else {
          swal("Data Anda Aman!");
        }
      })
  }
  handleupdate = () =>{
    swal({
        title: "Maaf Fitur ini Sedang Masa Perbaikan",
        icon: "warning",
      })
  }
  onChangeFile = e => {
    console.log(e.target.files[0]);
    this.setState({
      file: e.target.files[0]
    });
  };
  render() {
    const insertList = () => {
      const dataFile = new FormData();
      dataFile.append("id_kategori", this.state.id_kategori);
      dataFile.append("nama_buku", this.state.nama_buku);
      dataFile.append(
        "pengarang",
        this.state.pengarang
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
    const list = this.state.bukulist;
    const list_kategori = this.state.kategorilist;
    console.log('ini dari list bawah ya', list_kategori)
    
    return (
      <div className="container">
        <div className="row mt-5 justify-content-md-center">
          <h1>Data Buku</h1>
        </div>
        <Button className="btn btn-info btn-sm" onClick={this.toggle}>
          {" "}
          <i className="fa fa-plus" title="add">
            {" "}
            Tambah Data
          </i>
        </Button>
        <div className="row mt-5 justify-content-md-center">
          <Table hover>
            <thead>
              <tr>
                <th>#</th>
                <th>Nama Buku</th>
                <th>Kategori</th>
                <th>Lokasi Rak</th>
                <th>Pengarang</th>
                <th>Gambar</th>
                <th>Status</th>
                <th>Aksi</th>
              </tr>
            </thead>
            <tbody>
              {list.map((val, index) => {
                let no = 1;
                return (
                  <tr>
                    <th key="" scope="row">
                      
                    </th>
                    <td>{val.nama_buku}</td>
                    <td>{val.nama_kategori}</td>
                    <td>{val.nama_rak}</td>
                    <td>{val.pengarang}</td>
                    <td>
                        <img src={val.gbr} width={60} />
                    </td>
                    <td>{val.status}</td>
                    <td>
                      <Button className="btn btn-success btn-sm"  onClick={() =>this.handleupdate()} >
                        {" "}
                        <i className="fa fa-edit" title="edit" />
                      </Button>{" "}
                      <Button className="btn btn-danger btn-sm" onClick={() =>this.handledelete()}>
                        {" "}
                        <i className="fa fa-trash" title="delete" />
                      </Button>
                    </td>
                  </tr>
                 );
              })} 
            </tbody>
          </Table>
        </div>
        <Fragment>
          <Modal
            isOpen={this.state.modal}
            toggle={this.toggle}
            className={this.props.className}
          >
            <ModalHeader toggle={this.toggle}>Tambah Data </ModalHeader>
            <ModalBody>
              <div className="form-group">
                <label className="control-label" htmlFor="idKtp">
                  Nama Buku
                </label>
                <input
                  type="text"
                  name="nama_buku"
                  className="form-control"
                  id="idKtp"
                  required
                  onChange = {(e)=>this.setState({nama_buku:e.target.value})}
                />
              </div>
              <div className="form-group">
                <label className="control-label" htmlFor="namaPeminjam">
                  Kategori
                </label>
                <select name="id_kategori" onChange = {(e)=>this.setState({id_kategori:e.target.value})} className="form-control" required>
                <option >--Pilih Kategori Buku--</option>
                {list_kategori.map((val_list, index) =>{
                    return(
                        <option key ={index} value={val_list.id_kategori}>{val_list.nama_kategori}</option>
                    )
                })}
                </select >
              </div>
              <div className="form-group">
                <label className="control-label" htmlFor="idKtp">
                  pengarang
                </label>
                <input
                  type="text"
                  name="pengarang"
                  className="form-control"
                  id="idKtp"
                  required
                  onChange = {(e)=>this.setState({pengarang:e.target.value})}
                />
              </div>
              <div className="form-group">
                <label className="control-label" htmlFor="idKtp">
                 URL Gambar Buku
                </label>
                <input
                  type="file"
                  name="gbr"
                  className="form-control"
                  id="idKtp"
                  required
                  onChange={this.onChangeFile}
                />
              </div>
            </ModalBody>
            <ModalFooter>
              <Button color="primary" onClick={insertList.bind(this)}>
                Simpan
              </Button>{" "}
            </ModalFooter>
          </Modal>
        </Fragment>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    listbuku: state.buku,
    listkategori: state.kategori
  };
};

export default connect(mapStateToProps)(Buku);
