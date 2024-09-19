import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios'; 
import './css/Loginstyle.css'; 

export default function Auth() {
  const [authMode, setAuthMode] = useState("signin");
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (authMode === "signup") {
      await handleSignUp();
    } else {
      await handleSignIn();
    }
  };

  const handleSignUp = async () => {
    try {
      if (!name || !email || !password) {
        setErrorMessage("Please fill in all fields");
        return;
      }

      const response = await axios.post('http://localhost:8000/api/users', {
        name,
        email,
        password
      });

      console.log(response.data);
      localStorage.setItem('token', response.data.token); 
      navigate('/');
    } catch (error) {
      console.error('Error:', error);
      setErrorMessage('Error signing up. Please try again.');
    }
  };

  const handleSignIn = async () => {
    try {
      const response = await axios.get('http://localhost:8000/api/users');
      const user = response.data.find(user => user.email === email && user.password === password);
      if (user) {
        navigate('/');
        localStorage.setItem('token', response.data.token); 
      } else {
        console.error('Invalid credentials');
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }


  const changeAuthMode = () => {
    setAuthMode(authMode === "signin" ? "signup" : "signin");
    setErrorMessage(''); 
  };

  return (
    <div className="Auth-form-container" style={{ width: '100%' }}>
      <form className="Auth-form" onSubmit={handleSubmit}>
        <div className="Auth-form-content">
          <h3 className="Auth-form-title headerfonts">{authMode === "signin" ? "Sign In" : "Sign Up"}</h3>
          <div className="text-center parafonts">
            {authMode === "signin" ? (
              <>
                Not registered yet?{" "}
                <span className="link-primary" onClick={changeAuthMode} role="button">
                  Sign Up
                </span>
              </>
            ) : (
              <>
                Already registered?{" "}
                <span className="link-primary" onClick={changeAuthMode} role="button">
                  Sign In
                </span>
              </>
            )}
          </div>
          {errorMessage && <div className="alert alert-danger">{errorMessage}</div>}
          {authMode === "signin" ? (
            <>
              <div className="form-group mt-3">
                <label className="parafonts">Email address</label>
                <input
                  type="email"
                  className="form-control mt-1"
                  placeholder="Enter email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="form-group mt-3">
                <label className="parafonts">Password</label>
                <input
                  type="password"
                  className="form-control mt-1"
                  placeholder="Enter password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
            </>
          ) : (
            <>
              <div className="form-group mt-3">
                <label className="parafonts">Full Name</label>
                <input
                  type="text"
                  className="form-control mt-1"
                  placeholder="e.g Jane Doe"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
              <div className="form-group mt-3">
                <label className="parafonts">Email address</label>
                <input
                  type="email"
                  className="form-control mt-1"
                  placeholder="Email Address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="form-group mt-3">
                <label className="parafonts">Password</label>
                <input
                  type="password"
                  className="form-control mt-1"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
            </>
          )}
          <div className="d-grid gap-2 mt-3">
            <button type="submit" className="btn btn-primary">
              {authMode === "signin" ? "Sign In" : "Sign Up"}
            </button>
          </div>
          
        </div>
      </form>
    </div>
  );
}
