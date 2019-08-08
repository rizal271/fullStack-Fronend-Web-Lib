import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import {
  Button,
} from "reactstrap";
import { Link } from "react-router-dom";
import swal from 'sweetalert';
import "../assets/css/login.css";
import { currentLogin } from "../../Global/redux/actions/login";

class Login extends Component {
  state = {
    userlogin: []
  };
  render() {
    const loginUser = () => {
      this.state.userlogin.push({
        email: this.state.email,
        password: this.state.password
      });
      console.log(this.state.userlogin);
      const datalogin = this.state.userlogin;
      // this.props.userLoginFetch(datalogin)
      this.props.dispatch(currentLogin(datalogin)).then(() =>{
        swal({
          title: "Login Berhasil",
          icon: "success"
        })
          this.props.history.push(`/`);
          console.log('coba coba coba xxx',this.props)
      }).catch(()=>{
        swal({
          title: "Login Gagal Username & Password Salah",
          icon: "warning"
        })
          this.props.history.push(`/`);
      })
     
      
      
      
    };
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
            <div className="card card-signin my-5">
              <div className="card-body">
                <h5 className="card-title text-center">Masuk</h5>
                <form className="form-signin">
                  <div className="form-group">
                    <input
                      type="email"
                      id="inputEmail"
                      name="email"
                      className="form-control"
                      placeholder="Email address"
                      onChange={e => this.setState({ email: e.target.value })}
                      required
                      autoFocus
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="password"
                      id="inputPassword"
                      name="password"
                      className="form-control"
                      placeholder="Password"
                      onChange={e =>
                        this.setState({ password: e.target.value })
                      }
                      required
                    />
                  </div>
                  <div className="custom-control custom-checkbox mb-3">
                    <input
                      type="checkbox"
                      className="custom-control-input"
                      id="customCheck1"
                    />
                    <label
                      className="custom-control-label"
                      htmlFor="customCheck1"
                    >
                      Remember password
                    </label>
                  </div>
                  <Button className="btn btn-lg btn-success btn-block text-uppercase" color="" onClick={loginUser.bind(this)}>
                Masuk
              </Button>
                  <div className="custom-control mt-3">
                    <label className="control-label">
                      Belum punya akun Perpustakaan?{" "}
                      <Link to="/register">
                        <b>Daftar</b>
                      </Link>
                    </label>
                  </div>
                  <hr className="my-4" />
                  <button
                    className="btn btn-lg btn-danger btn-block text-uppercase"
                    type="submit"
                  >
                    <i className="fa fa-google mr-2" /> Sign in with Google
                  </button>
                  <button
                    className="btn btn-lg btn-primary btn-block text-uppercase"
                    type="submit"
                  >
                    <i className="fa fa-facebook-f mr-2" /> Sign in with
                    Facebook
                  </button>
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
    userlogin: state.login
  };
};

export default connect(mapStateToProps)(Login);
