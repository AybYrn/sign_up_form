import "./App.css";
import React from "react";

export default function App() {
  const [formData, setFormData] = React.useState({
    username: "",
    password: "",
    confirmPassword: "",
    joinNews: false,
  });

  function handleSubmit(event) {
    event.preventDefault()
    console.log(formData);
  }

  function handleChange(event) {
    const { name, value, type, checked } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  }
  return (
    <>
      <div className="background">
        <div className="shape"></div>
        <div className="shape"></div>
      </div>
      <form onSubmit={handleSubmit}>
        <h3>Login Here</h3>

        <label htmlFor="username">Username</label>
        <input
          type="text"
          placeholder="Email or Phone"
          id="username"
          name="username"
          onChange={handleChange}
          value={formData.username}
        />

        <label htmlFor="password">Password</label>
        <input
          type="password"
          placeholder="Password"
          id="password"
          name="password"
          onChange={handleChange}
          value={formData.password}
        />

        <label htmlFor="confPassword">Confirm Password</label>
        <input
          type="password"
          placeholder="Confirm Password"
          id="confPassword"
          name="confirmPassword"
          onChange={handleChange}
          value={formData.confirmPassword}
        />

        <div className="form--marketing">
          <label htmlFor="form-mark">I want to join the newsletter</label>
          <input
            type="checkbox"
            name="joinNews"
            id="form-mark"
            onChange={handleChange}
            checked={formData.joinNews}
          />
        </div>

        <button>Log In</button>
      </form>
    </>
  );
}
