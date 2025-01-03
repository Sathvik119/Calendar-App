import React, { useState } from 'react';

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
    <div>
      <h1>Admin Dashboard</h1>
      <h2>Add New Company</h2>
      <form onSubmit={(e) => e.preventDefault()}>
        <input
          type="text"
          name="name"
          placeholder="Company Name"
          value={newCompany.name}
          onChange={handleInputChange}
          required
        />
        <input
          type="text"
          name="location"
          placeholder="Location"
          value={newCompany.location}
          onChange={handleInputChange}
          required
        />
        <input
          type="text"
          name="emails"
          placeholder="Emails (comma-separated)"
          value={newCompany.emails}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="phoneNumbers"
          placeholder="Phone Numbers (comma-separated)"
          value={newCompany.phoneNumbers}
          onChange={handleInputChange}
        />
        <textarea
          name="comments"
          placeholder="Comments"
          value={newCompany.comments}
          onChange={handleInputChange}
        />
        <select
          name="periodicity"
          value={newCompany.periodicity}
          onChange={handleInputChange}
        >
          <option value="1 week">1 week</option>
          <option value="2 weeks">2 weeks</option>
          <option value="1 month">1 month</option>
        </select>
        <button type="button" onClick={addCompany}>Add Company</button>
      </form>
      
      <h2>Manage Companies</h2>
      <ul>
        {companies.map((company, index) => (
          <li key={index}>
            {company.name} ({company.location})
            <button onClick={() => deleteCompany(index)}>Delete</button>
          </li>
        ))}
      </ul>

      <h2>Manage Communication Methods</h2>
      <ul>
        <li>LinkedIn Post</li>
        <li>LinkedIn Message</li>
        <li>Email</li>
        <li>Phone Call</li>
        <li>Other</li>
      </ul>
    </div>
  );
};

export default AdminDashboard;