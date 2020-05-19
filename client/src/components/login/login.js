import React, { useState } from "react";
import { Link } from 'react-router-dom';
import axios from "axios";

const SignIn = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [displayError, setDisplayError] = useState("");
  const [isLoggedIn, setIsLoggedIn ] = useState(false);

  const handleSignin = (e) => {
    e.preventDefault();
    setDisplayError("");
    
    axios
      .post("/api/login", { email, password })
      .then((data) => {
        localStorage.setItem("jwtToken", data.data.token);
        localStorage.setItem("user", data.data.email);
        setIsLoggedIn(true);
      })
      .catch((err) => {
        //console.log(err);
        setDisplayError(err.response.data.error.message);
      });
  };

  return (
    <>
    <nav className="navbar navbar-light bg-light">
        <Link to="/" className="navbar-brand">Spaceship</Link>
        {isLoggedIn ? <Link to="/member-profile" className="ml-auto">Profile</Link>
        : <Link to='/create-account'>Create Account</Link>}
    </nav>
    <div className="container">
        {displayError && (
          <div className="alert alert-danger" role="alert">
            {displayError}
          </div>
        )}
        {isLoggedIn && 
        <div className="alert alert-success" role="alert">
            Login Successful!
        </div>
        }
      <form>
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
          onClick={handleSignin}
          type="submit"
          className="btn btn-primary"
        >
          Sign in
        </button>
      </form>
    </div>
  </>
  );
};

export default SignIn;
