import React, { Component, Fragment } from "react";
import "../Screen/assets/css/bookdetail.css";
import { Link } from "react-router-dom";
import moment from "moment";
import { connect } from "react-redux";
import { getdetailBuku } from "../Global/redux/actions/buku";
import {ModalBody, ModalFooter, Modal, ModalHeader,Button} from 'reactstrap';
import { getPeminjaman, deletePinjaman, postPeminjaman} from "../Global/redux/actions/peminjaman";
import swal from "sweetalert";

class BookDetail extends Component {
  state = {
    detaillist: [],
    kembalilist: [],
    insertlist: [],
    modal:false,
  };

  componentDidMount = async () => {
    const id_detail = this.props.match.params.id;
    await this.props.dispatch(getdetailBuku(id_detail));
    console.log("ini dari props", this.props.listbuku);
    this.setState({
      detaillist: this.props.listbuku.listBuku
    });
  };
  onBtnpinjam = () => {
    if (localStorage.getItem("level") === "") {
      swal({
        title: "Mohon Maaf Fitur Peminjaman dialihkan ke admin Perpustakaan",
        icon: "warning"
      }).then(() => {});
    } else {
      swal({
        title: "Mohon Maaf anda Harus mendaftar terlebih dahulu",
        icon: "warning"
      }).then(() => {
        this.props.history.push(`/login`);
      });
    }
    // swal({
    //     title: "Login Berhasil",
    //     icon: "success"
    //   })
  };
  toggle = this.toggle.bind(this);

  toggle() {
      this.setState(prevState => ({
        modal: !prevState.modal
      }));
    }
  render() {
    const list = this.state.detaillist;
    const id_kt = localStorage.getItem("id")
    const insertList =()=>{
      if (localStorage.getItem("level") === "peminjam") {
        this.state.insertlist.push({				
          'id_buku':list.id_buku,
          'id_ktp':id_kt,
          'lama_pinjam':this.state.lama_pinjam
        })
        this.setState((prevState) => ({
          modal: !prevState.modal
        }));
        console.log('cek cek cek',this.state.insertlist)
        const data = this.state.insertlist
        this.props.dispatch(postPeminjaman(data));
       
      } else {
        swal({
          title: "Mohon Maaf anda Harus mendaftar terlebih dahulu",
          icon: "warning"
        }).then(() => {
          this.props.history.push(`/login`);
        });
      }
			
    }
    return (
      <div className="container">
        <div
          className="jumbotron"
          style={{ backgroundImage: `url(` + list.gbr + ")" }}
        >
          <div className="row">
            {list.status == "ada" ? (
              
              <Button className="btn btn-info btn-sm" onClick={this.toggle}>
              {" "}
              
                Pinjam Buku
            </Button>
            ) : (
              <span className="badge badge-warning">Sedang Dipinjam</span>
            )}
          </div>
          <div className="card cardBook" style={{ maxWidth: "15rem" }}>
            <img
              src={list.gbr}
              style={{ height: "299px" }}
              className="card-img-top"
              alt="..."
            />
          </div>
        </div>
        <div className="row">
          <div className="col-sm-8">
            <h4>{list.nama_buku}</h4>
            <p>{list.pengarang}</p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
        </div>
        <Fragment>
          <Modal
            isOpen={this.state.modal}
            toggle={this.toggle}
            className={this.props.className}
          >
            <ModalHeader toggle={this.toggle}>Form Peminjaman Buku </ModalHeader>
            <ModalBody>
              <div className="form-group">
                <label className="control-label" htmlFor="idKtp">
                  Berapa Hari ?
                </label>
                <input
                  type="text"
                  name="nama_kategori"
                  className="form-control"
                  id="idKtp"
                  required
                  onChange = {(e)=>this.setState({lama_pinjam:e.target.value})}
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
    listpeminjaman: state.peminjaman,
  };
};

export default connect(mapStateToProps)(BookDetail);
