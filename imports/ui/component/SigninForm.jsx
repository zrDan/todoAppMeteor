import React, { useState } from "react";
import { Accounts } from "meteor/accounts-base";
import { useHistory } from "react-router-dom";
import "./style/Form.css";

export const SigninForm = () => {
  let history = useHistory();

  const [visibility, setVisibility] = useState("hidden");
  const [values, setValues] = useState({
    username: "",
    password: "",
    cpassword: "",
  });

  const { username, password, cpassword } = values;

  const handleChange = (name) => (e) => {
    setValues({ ...values, [name]: e.target.value });
  };

  const createUser = (username, password) => {
    Accounts.createUser({
      username: username,
      password: password,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password != cpassword) {
      setVisibility("visible");
    } else {
      createUser(username.toLocaleLowerCase(), password);
      history.push("/");
    }
  };

  return (
    <form className="form">
      <div className="formContent">
        <i className="fas fa-user"></i>
        <input
          type="text"
          name="name"
          id="name"
          autoComplete="off"
          placeholder="Nombre"
          onChange={handleChange("username")}
        />
      </div>
      <div className="formContent">
        <i className="fas fa-lock"></i>
        <input
          type="password"
          name="password"
          id="password"
          placeholder="Contraseña"
          required={true}
          onChange={handleChange("password")}
        />
      </div>
      <div className="formContent">
        <i className="fas fa-lock"></i>
        <input
          type="password"
          name="confirm_password"
          id="confirm_password"
          placeholder="Confirmar Contraseña"
          required={true}
          onChange={handleChange("cpassword")}
        />
      </div>
      <span style={{ visibility: visibility }}>
        *Las contraseñas no coinciden
      </span>
      <button onClick={handleSubmit}>Crear</button>
    </form>
  );
};
