import React, { useState } from 'react';
import './App.css'; // Assuming styles are placed in App.css

const AdminDashboard = () => {
  const [companies, setCompanies] = useState([]);
  const [newCompany, setNewCompany] = useState({
    name: '',
    location: '',
    emails: '',
    phoneNumbers: '',
    comments: '',
    periodicity: '2 weeks',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewCompany({ ...newCompany, [name]: value });
  };

  const addCompany = () => {
    setCompanies([...companies, { 
      ...newCompany, 
      emails: newCompany.emails.split(','), 
      phoneNumbers: newCompany.phoneNumbers.split(',') 
    }]);
    setNewCompany({
      name: '',
      location: '',
      emails: '',
      phoneNumbers: '',
      comments: '',
      periodicity: '2 weeks',
    });
  };

  const deleteCompany = (index) => {
    setCompanies(companies.filter((_, i) => i !== index));
  };

  return (
    <div className="admin-dashboard">
      <h1>Admin Dashboard</h1>

      {/* Add Company Section */}
      <div className="add-company">
        <h2>Add New Company</h2>
        <form onSubmit={(e) => e.preventDefault()} className="form">
          <input
            type="text"
            name="name"
            placeholder="Company Name"
            value={newCompany.name}
            onChange={handleInputChange}
            className="input-field"
            required
          />
          <input
            type="text"
            name="location"
            placeholder="Location"
            value={newCompany.location}
            onChange={handleInputChange}
            className="input-field"
            required
          />
          <input
            type="text"
            name="emails"
            placeholder="Emails (comma-separated)"
            value={newCompany.emails}
            onChange={handleInputChange}
            className="input-field"
          />
          <input
            type="text"
            name="phoneNumbers"
            placeholder="Phone Numbers (comma-separated)"
            value={newCompany.phoneNumbers}
            onChange={handleInputChange}
            className="input-field"
          />
          <textarea
            name="comments"
            placeholder="Comments"
            value={newCompany.comments}
            onChange={handleInputChange}
            className="input-field"
          />
          <select
            name="periodicity"
            value={newCompany.periodicity}
            onChange={handleInputChange}
            className="input-field"
          >
            <option value="1 week">1 week</option>
            <option value="2 weeks">2 weeks</option>
            <option value="1 month">1 month</option>
          </select>
          <button type="button" onClick={addCompany} className="btn btn-primary">Add Company</button>
        </form>
      </div>

      {/* Manage Companies Section */}
      <div className="manage-companies">
        <h2>Manage Companies</h2>
        <ul className="company-list">
          {companies.map((company, index) => (
            <li key={index} className="company-item">
              <span>{company.name} ({company.location})</span>
              <button onClick={() => deleteCompany(index)} className="btn btn-danger">Delete</button>
            </li>
          ))}
        </ul>
      </div>

      {/* Communication Methods */}
      <div className="communication-methods">
        <h2>Manage Communication Methods</h2>
        <ul className="methods-list">
          <li>LinkedIn Post</li>
          <li>LinkedIn Message</li>
          <li>Email</li>
          <li>Phone Call</li>
          <li>Other</li>
        </ul>
      </div>
    </div>
  );
};

export default AdminDashboard;

  
        
