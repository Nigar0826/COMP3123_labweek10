import React, { useState } from 'react';
import './App.css';

function App() {
  const [formData, setFormData] = useState({
    email: '',
    fullName: '',
    address: '',
    address2: '',
    city: '',
    province: '',
    postalCode: '',
    terms: false
  });

  const [submittedData, setSubmittedData] = useState(null);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedData(formData);
  };

  return (
      <div className="form-container">
        <h1>Data Entry Form</h1>
        <form onSubmit={handleSubmit}>
          <div className="inline-group">
            <div className="form-group">
              <label>Email</label>
              <input
                  type="email"
                  name="email"
                  placeholder="Enter email"
                  value={formData.email}
                  onChange={handleChange}
                  className="form-control"
              />
            </div>
            <div className="form-group">
              <label>Name</label>
              <input
                  type="text"
                  name="fullName"
                  placeholder="Full Name"
                  value={formData.fullName}
                  onChange={handleChange}
                  className="form-control"
              />
            </div>
          </div>

          <div className="form-group">
            <label>Address</label>
            <input
                type="text"
                name="address"
                placeholder="1234 Main St"
                value={formData.address}
                onChange={handleChange}
                className="form-control"
            />
          </div>

          <div className="form-group">
            <label>Address 2</label>
            <input
                type="text"
                name="address2"
                placeholder="Apartment, studio, or floor"
                value={formData.address2}
                onChange={handleChange}
                className="form-control"
            />
          </div>

          <div className="inline-group">
            <div className="form-group">
              <label>City</label>
              <input
                  type="text"
                  name="city"
                  placeholder="City"
                  value={formData.city}
                  onChange={handleChange}
                  className="form-control"
              />
            </div>
            <div className="form-group">
              <label>Province</label>
              <select
                  name="province"
                  value={formData.province}
                  onChange={handleChange}
                  className="form-control"
              >
                <option value="">Choose...</option>
                <option value="Ontario">Ontario</option>
                <option value="Quebec">Quebec</option>
                <option value="British Columbia">British Columbia</option>
                <option value="Alberta">Alberta</option>
              </select>
            </div>
            <div className="form-group">
              <label>Postal Code</label>
              <input
                  type="text"
                  name="postalCode"
                  placeholder="Postal Code"
                  value={formData.postalCode}
                  onChange={handleChange}
                  className="form-control"
              />
            </div>
          </div>

          <div className="checkbox">
            <input
                type="checkbox"
                name="terms"
                checked={formData.terms}
                onChange={handleChange}
            />
            <label>Agree to Terms & Condition?</label>
          </div>

          <button type="submit" className="submit-btn">Submit</button>
        </form>

        {/* Display submitted data */}
        {submittedData && (
            <div className="submitted-info">
              <h2>Submitted Information</h2>
              <p><span>Email:</span> {submittedData.email}</p>
              <p><span>Full Name:</span> {submittedData.fullName}</p>
              <p><span>Address:</span> {submittedData.address}</p>
              <p><span>Address 2:</span> {submittedData.address2}</p>
              <p><span>City:</span> {submittedData.city}</p>
              <p><span>Province:</span> {submittedData.province}</p>
              <p><span>Postal Code:</span> {submittedData.postalCode}</p>
              <p><span>Terms Accepted:</span> {submittedData.terms ? "Yes" : "No"}</p>
            </div>

        )}
      </div>
  );
}

export default App;
