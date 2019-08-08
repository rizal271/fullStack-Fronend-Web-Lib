import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import getHome from "../Global/redux/actions/home";
import Axios from "axios";

class Home extends Component {
  state = {
    bookhome: [],
    page: 1
  };
  componentDidMount = async () => {
    await this.props.dispatch(getHome(this.state.page));
    console.log("ini dari page ", this.state.page);
    this.setState({
      bookhome: this.props.listbookhome.listBuku.result
    });
  };
  search = (query) => {
    // Axios.get(`http://192.168.100.42:3343/book?search=${query}`)
    // .then((res) => {
    //     this.setState({bookhome : res.data})
    //     if(query === "") {
         
    //     }
    // })
    // .catch((err) => {
    //     console.log(err)
    // })
     
  };
  nextPage = async () => {
    await this.props.dispatch(getHome(this.state.page + 1)).then(() => {
      this.setState({
        bookhome: this.props.book
      });
    });
  };

  prevPage = async () => {
    await this.props.dispatch(getHome(this.state.page - 1)).then(() => {
      this.setState({
        bookhome: this.props.book
      });
    });
  };
  render() {
    const list = this.state.bookhome;

    // for (let pages = 0; pages < list.length; pages++) {
    if (list.length < 2) {
      var numPage = (
        <li className="page-item">
          <a className="page-link" href="#">
            1
          </a>
        </li>
      );
    } else {
      for (let index = 0; index > list.length; index++) {
        var numPage = (
          <li className="page-item">
            <a className="page-link" href="#">
              {index}
            </a>
          </li>
        );
      }
    }

    // }
    console.log("ini dari list", list);
    return (
      <div className="container">
        <div className="row justify-content-md-center">
          <div className="col-sm-7 mt-5">
            <input
              className="form-control form-control-lg rounded-pill search"
              ref="input"
              type="text"
              placeholder="Search..."
              onChange={this.search}
            />
          </div>
        </div>
        <div className="row mt-5 justify-content-md-center">
          {list.map((val, index) => {
            if (val.status === "ada") {
              var classStatus = "badge badge-success";
            } else {
              var classStatus = "badge badge-warning";
            }
            console.log(classStatus);
            return (
              <Fragment>
                <div className="col-md-3 mb-5" key={index}>
                  <div
                    className="card text-white bg-info"
                    style={{ width: "15rem" }}
                  >
                    <Link to={`/buku/detail/${val.id_buku}`}>
                      <img
                        src={val.gbr}
                        style={{ height: "180px" }}
                        className="card-img-top cardHome"
                        alt="..."
                      />
                    </Link>
                    <h5>
                      <span className={classStatus}>{val.status}</span>
                    </h5>
                    <div className="card-body">
                      <p className="card-text">
                        <h5>{val.nama_buku}</h5>
                      </p>
                      <p className="hidden" />
                    </div>
                  </div>
                </div>
              </Fragment>
            );
          })}
        </div>
        <div>
          <nav aria-label="Page navigation example">
            <ul className="pagination">
              <li className="page-item">
                <a 
                  className="page-link"
                  onClick={() => {
                    this.prevPage();
                  }}
                >
                  Previous
                </a>
              </li>
              <li className="page-item">
                <a
                  className="page-link"
                  onClick={() => {
                    this.nextPage();
                  }}
                >
                  Next
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    listbookhome: state.home
  };
};

export default connect(mapStateToProps)(Home);
