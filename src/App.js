import { Provider } from "react-redux";
import { Route } from "react-router-dom";
import "./App.css";
import Nav from "../src/Component/Navbar/navbar";
import store from "./Global/redux/store";
import Buku from "./Screen/Buku";
import Home from "./Screen/Home";
import Peminjam from "./Screen/Peminjam";
import Kategori from "./Screen/Kategori";
import Peminjaman from "./Screen/Peminjaman";
import login from "Screen/UserAuth/Login";
import Registrasi from "./Screen/UserAuth/Registrasi";
import DetailPeminjaman from "./Screen/DetailPeminjaman";
import React, { Component, Fragment } from "react";
import History from "./Screen/User/HistoryPinjam"
import detailBook from "./Screen/DetailBuku"
import isEmpty from "lodash.isempty";
import swal from "sweetalert";
import inputdonasi from "./Screen/inputdonasi";

function App() {
  const level = localStorage.getItem("level");
  return (
    <Provider store={store}>
      <div>
        <Nav />
        <Route exact path={"/"} component={Home} />
        <Route exact path={"/buku/detail/:id"} component={detailBook} />
        <Route exact path={"/login"} component={login} />
        <Route exact path={"/donasi"} component={inputdonasi} />
        <Route exact path={"/register"} component={Registrasi} />
        
        {level === "peminjam" ? (
          <Fragment>
            <Route exact path={"/borrowing"} component={History} />
            <Route
              exact
              path={"/borrowing/details/:id"}
              component={DetailPeminjaman}
            />
          </Fragment>
        ) : (
          <Fragment>
          </Fragment>
        )}
        {level === "admin" ? (
          <Fragment>
            <Route exact path={"/book"} component={Buku} />
            <Route exact path={"/borrower"} component={Peminjam} />
            <Route exact path={"/category"} component={Kategori} />
            <Route exact path={"/borrowing"} component={Peminjaman} />
            <Route
              exact
              path={"/borrowing/details/:id"}
              component={DetailPeminjaman}
            />
          </Fragment>
        ) : (
          <Fragment />
        )}
      </div>
    </Provider>
  );
}

export default App;
