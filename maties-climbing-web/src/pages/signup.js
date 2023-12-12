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
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [studentNumber, setStudentNumber] = useState('');
  const [idNumber, setIdNumber] = useState('');
  const [foreignStudent, setForeignStudent] = useState(false);
  const [gender, setGender] = useState('');
  const [membershipType, setMembershipType] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  const handleSignup = async () => {
    try {
      const response = await fetch("http://localhost:3001/member", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          surname,
          username,
          password,
          email,
          phone_number: phoneNumber,
          student_number: studentNumber,
          id_number: idNumber,
          foreign_student: foreignStudent,
          gender,
          membership_type: membershipType,
          start_date: "2024-01-01", //startDate, // this should be set based on teh membership type that is chosen (half or full year)
          end_date: "2024-12-31", //endDate, // this should be set based on teh membership type that is chosen (half or full year)
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
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="col-md-6">
            <label htmlFor="surname">Surname:</label>
            <input
              type="text"
              id="surname"
              value={surname}
              onChange={(e) => setSurname(e.target.value)}
            />
          </div>
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
            <label htmlFor="phoneNumber">Phone Number:</label>
            <input
              type="text"
              id="phoneNumber"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
          </div>
          <div className="col-md-6">
            <label htmlFor="foreignStudent">Foreign Student:</label>
            <input
              type="checkbox"
              id="foreignStudent"
              checked={foreignStudent}
              onChange={(e) => setForeignStudent(e.target.checked)}
            />
          </div>
          <div className="col-md-6">
            <label htmlFor="idNumber">ID Number:</label>
            <input
              type="text"
              id="idNumber"
              value={idNumber}
              onChange={(e) => setIdNumber(e.target.value)}
            />
          </div>
          <div className="col-md-6">
            <label htmlFor="studentNumber">Student Number:</label>
            <input
              type="text"
              id="studentNumber"
              value={studentNumber}
              onChange={(e) => setStudentNumber(e.target.value)}
            />
          </div>
          <div className="col-md-6">
            <label htmlFor="membershipType">Membership Type:</label>
            <select
              id="membershipType"
              value={membershipType}
              onChange={(e) => setMembershipType(e.target.value)}
            >
              <option value="">Select Membership Type</option>
              <option value="STUDENT">Student</option>
              <option value="EXTERNAL">External</option>
            </select>
          </div>
          <div className="col-md-6">
            <label htmlFor="gender">Gender:</label>
            <select
              id="gender"
              value={gender}
              onChange={(e) => setGender(e.target.value)}
            >
              <option value="">Select Gender</option>
              <option value="student">Male</option>
              <option value="external">Female</option>
            </select>
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
