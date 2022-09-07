import { Navigate } from "react-router-dom";
import axios from "axios";
import React from "react";
import "./style.css";
class DropPin extends React.Component {
  constructor() {
    super();
    this.state = { longitude: "", latitude: "", description: "", redirect: false };
    this.handlelongitude = this.handlelongitude.bind(this);
    this.handlelatitude = this.handlelatitude.bind(this);
    this.handleDescription = this.handledescription.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handlelongitude(event) {
    this.setState({ longitude: event.target.value });
  }
  handlelatitude(event) {
    this.setState({ latitude: event.target.value });
  }
  handledescription(event) {
    this.setState({ description: event.target.value });
  }
  handleSubmit(event) {
    let user = {
      longitude: this.state.longitude,
      latitude: this.state.latitude,
      description: this.state.latitude,
    };
    axios.post("http://localhost:3000/sessions", user).then((res) => {
      axios.defaults.headers.common["Authorization"] = "Bearer " + res.data.jwt;
      localStorage.setItem("jwt", res.data.jwt);
      this.setState({ redirect: true });
    });
    event.preventDefault();
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit} className="form">
        {this.state.redirect ? <Navigate push to="/" /> : null}
        <div className="form-body">
          <div className="longitude">
            <label className="form__label">longitude </label>
            <input
              value={this.state.longitude}
              onChange={this.handlelongitude}
              type="longitude"
              id="longitude"
              className="form__input"
              placeholder="longitude"
            />
          </div>
          <div className="latitude">
            <label className="form__label">latitude </label>
            <input
              value={this.state.latitude}
              onChange={this.handlelatitude}
              className="form__input"
              type="latitude"
              id="latitude"
              placeholder="latitude"
            />
          </div>
          <div className="description">
            <label className="form__label">description </label>
            <input
              value={this.state.description}
              onChange={this.handledescription}
              type="description"
              id="description"
              className="form__input"
              placeholder="description"
            />
          </div>
        </div>
        <div className="footer">
          <button type="submit" className="btn">
            drop that pin!
          </button>
        </div>
      </form>
    );
  }
}
export default DropPin;
