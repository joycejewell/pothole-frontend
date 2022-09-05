import { Navigate } from "react-router-dom";
import axios from "axios";
import React from "react";
import "./style.css";
class RegistrationForm extends React.Component {
  constructor() {
    super();
    this.state = { email: "", password: "", confirmPassword: "", redirect: false };
    this.handleEmail = this.handleEmail.bind(this);
    this.handlePassword = this.handlePassword.bind(this);
    this.handleConfirmPassword = this.handleConfirmPassword.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleEmail(event) {
    this.setState({ email: event.target.value });
  }
  handlePassword(event) {
    this.setState({ password: event.target.value });
  }
  handleConfirmPassword(event) {
    this.setState({ confirmPassword: event.target.value });
  }
  handleSubmit(event) {
    let user = {
      email: this.state.email,
      password: this.state.password,
      confirm_password: this.state.confirmPassword,
    };
    axios.post("http://localhost:3000/users", user).then((res) => {
      console.log(res.data);
      this.setState({ redirect: true });
    });
    event.preventDefault();
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit} className="form">
        {this.state.redirect ? <Navigate push to="/" /> : null}
        <div className="form-body">
          <div className="username">
            <div className="email">
              <label className="form__label">Email </label>
              <input
                value={this.state.email}
                onChange={this.handleEmail}
                type="email"
                id="email"
                className="form__input"
                placeholder="Email"
              />
            </div>
          </div>
          <div className="password">
            <label className="form__label">Password </label>
            <input
              value={this.state.password}
              onChange={this.handlePassword}
              className="form__input"
              type="password"
              id="password"
              placeholder="Password"
            />
          </div>
          <div className="confirm-password">
            <label className="form__label">Confirm Password </label>
            <input
              value={this.state.confirmPassword}
              onChange={this.handleConfirmPassword}
              className="form__input"
              type="password"
              id="confirmPassword"
              placeholder="Confirm Password"
            />
          </div>
        </div>
        <div className="footer">
          <button type="submit" className="btn">
            register
          </button>
        </div>
      </form>
    );
  }
}
export default RegistrationForm;
