import React, { useState } from "react";
import "./style.css";
function RegistrationForm() {
  return (
    <div className="form">
      <div className="form-body">
        <div className="username">
          <div className="email">
            <label className="form__label" for="email">
              Email{" "}
            </label>
            <input type="email" id="email" className="form__input" placeholder="Email" />
          </div>
        </div>
        <div className="password">
          <label className="form__label" for="password">
            Password{" "}
          </label>
          <input className="form__input" type="password" id="password" placeholder="Password" />
        </div>
        <div className="confirm-password">
          <label className="form__label" for="confirmPassword">
            Confirm Password{" "}
          </label>
          <input className="form__input" type="password" id="confirmPassword" placeholder="Confirm Password" />
        </div>
      </div>
      <div class="footer">
        <button type="submit" class="btn">
          Register
        </button>
      </div>
    </div>
  );
}
export default RegistrationForm;
