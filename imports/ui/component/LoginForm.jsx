import { Meteor } from "meteor/meteor";
import React, { useState } from "react";
import "./style/Form.css";

export const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    Meteor.loginWithPassword(username, password);
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <div className="formContent">
        <i className="fas fa-user"></i>
        <input
          type="test"
          name="username"
          id="username"
          placeholder="Usuario"
          autoComplete="off"
          required={true}
          onChange={(e) => setUsername(e.target.value.toLocaleLowerCase())}
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
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button className="acceptButton" type="submit">
        Acceder
      </button>
    </form>
  );
};
