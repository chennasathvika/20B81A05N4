import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const RegisterCompany = () => {
  const [companyName, setCompanyName] = useState('');
  const [ownerName, setOwnerName] = useState('');
  const [ownerEmail, setOwnerEmail] = useState('');
  const [rollNo, setRollNo] = useState('');
  const [accessCode, setAccessCode] = useState('');
  const [message, setMessage] = useState('');

  const navigate = useNavigate();

  const handleRegister = async () => {
    try {
      const response = await axios.post(
        'http://20.244.56.144/train/register',
        {
          companyName: companyName,
          ownerName: ownerName,
          ownerEmail: ownerEmail,
          rollNo: rollNo,
          accessCode: accessCode,
        }
      );

      setMessage('Company registered successfully.');
      navigate('/trains/:trainNumber');
    } catch (error) {
      setMessage('Error registering company.');
    }
  };

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <h2 className="mb-4">Register Your Company</h2>
          <form>
            <div className="form-group mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Company Name"
                value={companyName}
                onChange={e => setCompanyName(e.target.value)}
              />
            </div>
            <div className="form-group mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Owner Name"
                value={ownerName}
                onChange={e => setOwnerName(e.target.value)}
              />
            </div>
            <div className="form-group mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Owner Email"
                value={ownerEmail}
                onChange={e => setOwnerEmail(e.target.value)}
              />
            </div>
            <div className="form-group mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Roll No"
                value={rollNo}
                onChange={e => setRollNo(e.target.value)}
              />
            </div>
            <div className="form-group mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Access Code"
                value={accessCode}
                onChange={e => setAccessCode(e.target.value)}
              />
            </div>
            <button
              type="button"
              className="btn btn-primary"
              onClick={handleRegister}
            >
              Register
            </button>
            <p className="mt-2">{message}</p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegisterCompany;
