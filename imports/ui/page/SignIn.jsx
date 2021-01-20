import React from "react";
import { Link } from "react-router-dom";
import { SigninForm } from "../component/SigninForm";
import "./styles/Layout.css";

export const SignIn = () => (
  <div className="PageContainer">
    <div className="goBack">
      <Link to="/" className="goBackContent">
        <i className="fas fa-caret-down fa-lg"></i>
        Regresar
      </Link>
    </div>
    <div className="pageContent signInGrid">
      <div className="presentation">
        <h1>Crea una cuenta</h1>
        <img className="signInImage" src={"/images/box.png"} alt="box" />
      </div>
      <div className="pageFormContainer">
        <h3 className="datos">Ingresa tus datos</h3>
        <SigninForm />
      </div>
    </div>
  </div>
);
