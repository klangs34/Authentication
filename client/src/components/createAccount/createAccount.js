import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import axios from "axios";

const CreateAccount = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [displayError, setDisplayError] = useState("");
  const [isLoggedIn, setIsLoggedIn ] = useState(false);
  const [flashLogin, setFlashLogin ] = useState(false);
  const [display, setDisplay] = useState(false);

  useEffect(() => {
    localStorage.getItem('jwtToken') !== "" && setIsLoggedIn(true);
  }, [])

  const emailValid = (email) => {
    const emailRegex = /^([A-Za-z0-9_\-.+])+@([A-Za-z0-9_\-.])+\.([A-Za-z]{2,})$/;
    return emailRegex.test(email);
}

  const handleSignup = (e) => {
    e.preventDefault();

    if(!emailValid(email)) {
      setDisplayError('Invalid email format');
      return;
    }

    axios
      .post("/api/create-account", { email, password })
      .then((data) => {
        setDisplayError("");
        localStorage.setItem("jwtToken", data.data.token);
        setFlashLogin(true);
        setIsLoggedIn(true);
      })
      .catch((err) => {
        console.log(err.response.data.error.message);
        setDisplayError(err.response.data.error.message);
      });
  };

  const handleLogout = (e) => {
    e.preventDefault();
    localStorage.setItem('jwtToken', '');
    setDisplay(true);
    setIsLoggedIn(false);
}

  return (
    <>
    <nav className="navbar navbar-light bg-light">
        <Link to="/" className="navbar-brand">Spaceship</Link>
        {isLoggedIn ? <><Link to="/member-profile" className="ml-auto">Profile</Link>
        <a className="nav-link" href="/" onClick={handleLogout}>Logout</a></>
        : <Link to="/login">Login</Link>}
   </nav>
    <div className="container">
      <form>
        {displayError && (
          <div className="alert alert-danger mt-2" role="alert">
            {displayError}
          </div>
        )}
        {flashLogin && 
        <div className="alert alert-success mt-2" role="alert">
            Account Created Successfully!
        </div>
        }
        {display && 
        <div className="alert alert-success mt-2" role="alert">
            Logout Successful!
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
