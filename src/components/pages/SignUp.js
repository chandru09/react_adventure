import React from "react";
import "../SignUp.css";

export default function SignUp() {
  return (
    <>
      <h1 className="reg">Register Now! </h1>
      <form className="reg-form">
        <div className="reg-inputs">
          <label className="form-label">First Name</label>
          <input
            className="form-input"
            type="fname"
            name="fname"
            placeholder="Enter your first name"
            required
          />
        </div>
        <div className="reg-inputs">
          <label className="form-label">Last Name</label>
          <input
            className="form-input"
            type="lname"
            name="lname"
            placeholder="Enter your last name"
            required
          />
        </div>
        <div className="reg-inputs">
          <label htmlFor="" className="form-label">
            Email
          </label>
          <input
            className="form-input"
            type="email"
            name="email"
            placeholder="Enter your email"
            required
          />
        </div>
        <div className="reg-inputs">
          <label htmlFor="" className="form-label">
            Password
          </label>
          <input
            className="form-input"
            type="password"
            name="password"
            placeholder="Enter your password"
            required
          />
        </div>
        <div className="reg-inputs">
          <label htmlFor="" className="form-label">
            Confirm Password
          </label>
          <input
            className="form-input"
            type="password"
            name="password"
            placeholder="Confirm your password"
            required
          />
        </div>
        <button className="reg-btn">Register</button>
      </form>
    </>
  );
}
