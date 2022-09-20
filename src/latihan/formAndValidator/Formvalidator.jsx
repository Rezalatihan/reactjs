import React, { Component } from "react";

const Input = ({ Label, type, name, onChange }) => {
  return (
    <div>
      <Label>{Label} : </Label>
      <br />
      <input type={type} name={name} onChange={(e) => onChange(e.target.value)} />
    </div>
  );
};

const Showerror = ({ error }) => {
  return (
    <ul style={{ color: "red" }}>
      {error.map((errors, i) => (
        <li key={i}>{errors}</li>
      ))}
    </ul>
  );
};

class Formvalidator extends Component {
  state = {
    email: "",
    password: "",
    error: [],
  };

  handelSubmit = (e) => {
    e.preventDefault();
    // console.log(this.state);
    const { email, password } = this.state;

    let message = [];
    if (email.length === 0) {
      message = [...message, "email tidak boleh kosong"];
    }

    if (password.length === 0) {
      message = [...message, "Password tidak boleh kosong"];
    }

    if (message.length > 0) {
      this.setState({
        error: message,
      });
    }
  };

  render() {
    const style = {
      with: "400px",
      margin: "100px auto 0",
      border: "1px solid",
      padding: "10px",
    };
    return (
      <div style={style}>
        {/* <Showerror error={this.state.error} /> */}
        {this.state.error && <Showerror error={this.state.error} />}
        <form onSubmit={this.handelSubmit}>
          <Input type="email" name="email" Label="Email" onChange={(value) => this.setState({ email: value })} />
          <Input type="password" name="password" Label="Password" onChange={(value) => this.setState({ password: value })} />
          <br />
          <button type="submit">Kirim</button>
        </form>
      </div>
    );
  }
}

export default Formvalidator;
