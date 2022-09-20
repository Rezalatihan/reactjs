import React, { Component } from "react";

export default class Forminput extends Component {
  state = {
    email: "",
    password: "",
    error: [],
  };

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = (e) => {
    e.preventDefault();
    const { email, password } = this.state;
    let isValid = true;
    const error = [];

    if (email.length === 0) {
      error.emailLength = "Email tidak boleh kosong";
      isValid = false;
    }

    if (password.length < 8) {
      error.passwordLength = "Password harus lebih dari 8";
      isValid = false;
    }
    if (isValid) {
      alert(`
      email : ${email}
      password : ${password}`);
      console.log({ email, password });
      this.setState({ email: "", password: "" });
    }

    this.setState({ error });
    return isValid;
  };

  render() {
    const style = {
      with: "400px",
      margin: "100px auto 0",
      border: "1px solid",
      padding: "10px",
    };

    const { email, password, error } = this.state;
    return (
      <div style={style}>
        {Object.keys(error).map((key) => {
          // console.log(error);
          return (
            <div style={{ color: "red" }} key={key}>
              {error[key]}
            </div>
          );
        })}

        <form onSubmit={this.onSubmit}>
          <label>Email :</label>
          <br />
          <input type="email" name="email" value={email} onChange={this.onChange} />
          <br />
          <label>Password :</label>
          <br />
          <input type="password" name="password" value={password} onChange={this.onChange} />
          <br />
          <button type="submit">Kirim</button>
        </form>
      </div>
    );
  }
}
