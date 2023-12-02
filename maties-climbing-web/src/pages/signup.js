// SEAN : I'm not sure where to put this but just adding it here to see how to call the express endpoints

// function getMember() {
//     fetch('http://localhost:3001')
//     .then(response => {
//         return response.text();
//     })
//     .then(data => {
//         // do something with the data like display on a component or something
//     })
// }


// SignupPage.js
import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card } from "../components/Card.js";
import "./page.css";

function SignupPage() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = async () => {
    try {
      const response = await fetch("http://localhost:3001/member", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username,
          email,
          password,
        }),
      });

      if (response.ok) {
        // Handle successful signup
        console.log("User signed up successfully!");
      } else {
        // Handle signup failure
        console.error("Signup failed");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="container">
      <div className="row">
        <h2 className="d-flex justify-content-center">Signup</h2>
        <div className="row">
          {/* Add form elements for username, email, and password */}
          <div className="col-md-6">
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="col-md-6">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="col-md-6">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="col-md-6">
            <button onClick={handleSignup}>Signup</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignupPage;
