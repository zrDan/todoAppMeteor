import React from "react";
import { Link } from "react-router-dom";
import { LoginForm } from "../component/LoginForm";
import "./styles/Layout.css";

export const LogIn = () => {
  return (
    <div className="PageContainer">
      <div className="pageContent logInGrid">
        <div className="presentation">
          <h1>ToDo App</h1>
          <img className="logInImage" src={"/images/pencil.png"} alt="pencil" />
        </div>
        <div className="pageFormContainer">
          <h3>Bienvenido!</h3>
          <LoginForm />
        </div>
        <div className="accountOptionsContainer">
          <Link to="/SignIn">
            <h4>Crea una cuenta</h4>
          </Link>
        </div>
      </div>
    </div>
  );
};
