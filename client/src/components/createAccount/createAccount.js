import React, { useState } from "react";
import { Link } from 'react-router-dom';
import axios from "axios";

const CreateAccount = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [displayError, setDisplayError] = useState("");
  const [isLoggedIn, setIsLoggedIn ] = useState(false);

  const handleSignup = (e) => {
    e.preventDefault();

    axios
      .post("/api/create-account", { email, password })
      .then((data) => {
        localStorage.setItem("jwtToken", data.data.token);
        setIsLoggedIn(true);
      })
      .catch((err) => {
        console.log(err.response.data.error.message);
        setDisplayError(err.response.data.error.message);
      });
  };

  return (
    <>
    <nav className="navbar navbar-light bg-light">
        <Link to="/" className="navbar-brand">Spaceship</Link>
        {isLoggedIn ? <Link to="/member-profile" className="ml-auto">Profile</Link>
        : <Link to="/login">Login</Link>}
   </nav>
    <div className="container">
      <form>
        {displayError && (
          <div className="alert alert-danger" role="alert">
            {displayError}
          </div>
        )}
        {isLoggedIn && 
        <div className="alert alert-success" role="alert">
            Account Created Successfully!
        </div>
        }
     
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Email Address</label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Password</label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button
          onClick={handleSignup}
          type="submit"
          className="btn btn-primary"
        >
          Create account
        </button>
      </form>
    </div>
  </>
  );
};

export default CreateAccount;
