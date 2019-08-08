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

import { getPeminjam, deletePinjam, postPeminjam} from "../Global/redux/actions/peminjam";

class Peminjam extends Component {
  state = {
    peminjamlist: [],
    modal: false,
    modaledit:false,
    idktp: '',
    insertlist:[]
  };

  
  componentDidMount = async () => {
    await this.props.dispatch(getPeminjam());
    console.log("ini dari props", this.props);
    this.setState({
      peminjamlist: this.props.listpeminjam.listPeminjam.result
    });
  };
  toggle = this.toggle.bind(this);
  toggle() {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }
  formupdate = (id_ktp) =>{
    
  }
  toggleedit = this.toggleedit.bind(this);
  toggleedit() {
    this.setState(prevState => ({
      modaledit: !prevState.modal
    }));
  }
  handledelete = (id_ktp) =>{
    console.log('coba id', id_ktp);
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
          this.props.dispatch(deletePinjam(id_ktp));
          this.setState({ id_ktp : id_ktp })
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
				'id_ktp':this.state.id_ktp,
				'nama_peminjam':this.state.nama_peminjam,
				'alamat':this.state.alamat
			})
			this.setState((prevState) => ({
				modal: !prevState.modal
			}));
      console.log(this.state.insertlist)
      const data = this.state.insertlist
      this.props.dispatch(postPeminjam(data));
			
		}
    const list = this.state.peminjamlist;
    console.log('dari list', list)
    
    return (
      <div className="container">
        <div className="row mt-5 justify-content-md-center">
          <h1>Data Peminjam Buku</h1>
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
                <th>No. KTP</th>
                <th>Nama</th>
                <th>Alamat</th>
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
                    <td>{val.id_ktp}</td>
                    <td>{val.nama_peminjam}</td>
                    <td>{val.alamat}</td>
                    <td>
                      <Button className="btn btn-success btn-sm" onClick={() =>this.handleupdate()}>
                        {" "}
                        <i className="fa fa-edit" title="edit" />
                      </Button>{" "}
                      <Button className="btn btn-danger btn-sm" onClick={() =>this.handledelete(val.id_ktp)}>
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
                  NO. KTP
                </label>
                <input
                  type="text"
                  name="id_ktp"
                  className="form-control"
                  id="idKtp"
                  required
                  onChange = {(e)=>this.setState({id_ktp:e.target.value})}
                />
              </div>
              <div className="form-group">
                <label className="control-label" htmlFor="namaPeminjam">
                  Nama Peminjam
                </label>
                <input
                  type="text"
                  name="nama_peminjam"
                  className="form-control"
                  id="namaPeminjam"
                  required
                  onChange = {(e)=>this.setState({nama_peminjam:e.target.value})}
                />
              </div>
              <div className="form-group">
                <label className="control-label" htmlFor="alamat">
                  Alamat
                </label>
                <textarea
                  name="alamat"
                  className="form-control"
                  id="alamat"
                  required
                  onChange = {(e)=>this.setState({alamat:e.target.value})}
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
    listpeminjam: state.peminjam
  };
};

export default connect(mapStateToProps)(Peminjam);
