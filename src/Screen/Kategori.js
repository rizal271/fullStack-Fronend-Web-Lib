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

import { getKategori, postKategori,deleteKategori} from "../Global/redux/actions/kategori";

class Kategori extends Component {
  state = {
    kategorilist: [],
    modal: false,
    modaledit:false,
    idktp: '',
    insertlist:[]
  };

  
  componentDidMount = async () => {
    await this.props.dispatch(getKategori());
    console.log("ini dari props", this.props);
    this.setState({
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
          this.props.dispatch(deleteKategori(id_kategori));
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
  render() {
    const insertList =()=>{
			this.state.insertlist.push({				
				'nama_kategori':this.state.nama_kategori,
				'nama_rak':this.state.nama_rak
			})
			this.setState((prevState) => ({
				modal: !prevState.modal
			}));
      console.log(this.state.insertlist)
      const data = this.state.insertlist
      this.props.dispatch(postKategori(data));
			
		}
    const list = this.state.kategorilist;
    
    return (
      <div className="container">
        <div className="row mt-5 justify-content-md-center">
          <h1>Data Kategori Buku</h1>
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
                <th>Nama Kategori</th>
                <th>Lokasi Rak</th>
                <th>Aksi</th>
              </tr>
            </thead>
            <tbody>
              {list.map((val, index) => {
                let no = 1;
                return (
                  <tr>
                    <th key={index} scope="row">
                      {no++}
                    </th>
                    <td>{val.nama_kategori}</td>
                    <td>{val.nama_rak}</td>
                    <td>
                      <Button className="btn btn-success btn-sm" onClick={() =>this.handleupdate()}>
                        {" "}
                        <i className="fa fa-edit" title="edit" />
                      </Button>{" "}
                      <Button className="btn btn-danger btn-sm" onClick={() =>this.handledelete(val.id_kategori)}>
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
                  Nama Kategori
                </label>
                <input
                  type="text"
                  name="nama_kategori"
                  className="form-control"
                  id="idKtp"
                  required
                  onChange = {(e)=>this.setState({nama_kategori:e.target.value})}
                />
              </div>
              <div className="form-group">
                <label className="control-label" htmlFor="namaPeminjam">
                  Lokasi Kategori
                </label>
                <select name="nama_rak" onChange = {(e)=>this.setState({nama_rak:e.target.value})} className="form-control" required>
                <option >--Pilih Lokasi Rak--</option>
                <option value="Rak A">Rak A</option>
                <option value="Rak B">Rak B</option>
                <option value="Rak C">Rak C</option>
                <option value="Rak D">Rak D</option>
                <option value="Rak E">Rak E</option>
                <option value="Rak F">Rak F</option>
                <option value="Rak G">Rak G</option>
                <option value="Rak H">Rak H</option>
                <option value="Rak I">Rak I</option>
                <option value="Rak J">Rak J</option>
                <option value="Rak K">Rak K</option>
                </select >
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
    listkategori: state.kategori
  };
};

export default connect(mapStateToProps)(Kategori);
