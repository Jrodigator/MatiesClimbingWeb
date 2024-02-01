// SEAN : I'm not sure where to put this file but just adding it here to see how to call the express endpoints

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
  // State variable for file upload
  const [file, setFile] = useState(null);
  const [paymentType, setPaymentType] = useState('studentAccount');

  const handleFileChange = (event) => {
    // Get the file from input
    const selectedFile = event.target.files[0];
    setFile(selectedFile);
  };


  const handleSignup = async () => {
    // Validation checks
    if (!name || !surname || !membershipType) {
      alert("Please fill in all required fields.");
      return;
    }

    try {
    const formData = new FormData();
    formData.append('name', name);
    formData.append('surname', surname);
    formData.append('username', username);
    formData.append('password', password);
    formData.append('email', email);
    formData.append('phone_number', phoneNumber);
    formData.append('student_number', studentNumber);
    formData.append('id_number', idNumber);
    formData.append('foreign_student', foreignStudent);
    formData.append('gender', gender);
    formData.append('membership_type', membershipType);
    formData.append('start_date', "2024-01-01");
    formData.append('end_date', "2024-01-02");
    formData.append('pop', file);
    formData.append('paymentType', paymentType)

      const response = await fetch("http://139.84.230.49:3001/member", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        // Handle successful signup
        alert("User signed up succesfully!")
        console.log("User signed up successfully!");
      } else {
        // Handle signup failure
        alert("Signup failed");
        console.error("Signup failed");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
<div className="container mt-5">
      <div className="row">
        <h2 className="d-flex justify-content-center mb-4">Signup</h2>
        <div className="row">
          <div className="col-md-6 mb-3">
            <label htmlFor="name" className="form-label">Name:</label>
            <input
              type="text"
              id="name"
              className="form-control"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="col-md-6 mb-3">
            <label htmlFor="surname" className="form-label">Surname:</label>
            <input
              type="text"
              id="surname"
              className="form-control"
              value={surname}
              onChange={(e) => setSurname(e.target.value)}
            />
          </div>
          <div className="col-md-6">
            <label htmlFor="username" className="form-label">Username:</label>
            <input
              type="text"
              id="username"
              className="form-control"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="col-md-6">
            <label htmlFor="email" className="form-label">Email:</label>
            <input
              type="email"
              id="email"
              className="form-control"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="col-md-6">
            <label htmlFor="phoneNumber" className="form-label">Phone Number:</label>
            <input
              type="text"
              id="phoneNumber"
              className="form-control"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
          </div>
          <div className="col-md-6">
            <label htmlFor="foreignStudent" className="form-label">Foreign Student:</label>
            <input
              type="checkbox"
              id="foreignStudent"
              className="form-check-input"
              checked={foreignStudent}
              onChange={(e) => setForeignStudent(e.target.checked)}
            />
          </div>
          <div className="col-md-6">
            <label htmlFor="idNumber" className="form-label">ID Number:</label>
            <input
              type="text"
              id="idNumber"
              className="form-control"
              value={idNumber}
              onChange={(e) => setIdNumber(e.target.value)}
            />
          </div>
          <div className="col-md-6">
            <label htmlFor="studentNumber" className="form-label">Student Number:</label>
            <input
              type="text"
              id="studentNumber"
              className="form-control"
              value={studentNumber}
              onChange={(e) => setStudentNumber(e.target.value)}
            />
          </div>
          <div className="col-md-6 mb-3">
            <label htmlFor="membershipType" className="form-label">Membership Type:</label>
            <select
              id="membershipType"
              className="form-select"
              value={membershipType}
              onChange={(e) => {
                setMembershipType(e.target.value);
                // Reset file input if membership type changes
                setFile(null);
              }}
            >
              <option value="">Select Membership Type</option>
              <option value="STUDENT">Student</option>
              <option value="EXTERNAL">External</option>
            </select>
          </div>
          {membershipType === "STUDENT" && (
            <div className="col-md-6 mb-3">
              <label className="form-label">Payment Option:</label>
              <div>
                <input
                  type="radio"
                  id="studentAccount"
                  className="form-check-input"
                  name="paymentType"
                  value="studentAccount"
                  checked={paymentType === 'studentAccount'}
                  onChange={() => setPaymentType('studentAccount')}
                />
                <label htmlFor="studentAccount" className="form-check-label">Pay via Student Account</label>
              </div>
              <div>
                <input
                  type="radio"
                  id="eft"
                  className="form-check-input"
                  name="paymentType"
                  value="eft"
                  checked={paymentType === 'eft'}
                  onChange={() => setPaymentType('eft')}
                />
                <label htmlFor="eft" className="form-check-label">Pay via EFT</label>
              </div>
              {paymentType === 'eft' && (
                <div className="mt-3">
                  <div className="alert alert-info">
                    <strong>Banking Details:</strong><br/>
                    Account Name: Your Account Name<br/>
                    Account Number: Your Account Number<br/>
                    Bank: Your Bank<br/>
                    Reference: Your Reference
                  </div>
                  <label htmlFor="proofOfPayment" className="form-label">Proof of Payment:</label>
                  <input
                    type="file"
                    id="proofOfPayment"
                    className="form-control"
                    onChange={handleFileChange}
                  />
                </div>
              )}
            </div>
          )}
          {membershipType === "EXTERNAL" && (
            <div className="col-md-6 mb-3">
              <div className="mt-3">
                <div className="alert alert-info">
                    <strong>Banking Details:</strong><br/>
                    Account Name: Your Account Name<br/>
                    Account Number: Your Account Number<br/>
                    Bank: Your Bank<br/>
                    Reference: Your Reference
                </div>
              </div>
              <label htmlFor="proofOfPayment" className="form-label">Proof of Payment:</label>
              <input
                type="file"
                id="proofOfPayment"
                className="form-control"
                onChange={handleFileChange}
              />
            </div>
          )}
          <div className="col-md-6 mb-3">
            <label htmlFor="gender" className="form-label">Gender:</label>
            <select
              id="gender"
              className="form-select"
              value={gender}
              onChange={(e) => setGender(e.target.value)}
            >
              <option value="">Select Gender</option>
              <option value="student">Male</option>
              <option value="external">Female</option>
            </select>
          </div>
          <div className="col-md-6">
            <button onClick={handleSignup} className="btn btn-primary">Signup</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignupPage;
