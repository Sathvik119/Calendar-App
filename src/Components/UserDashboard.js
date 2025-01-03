import React, { useState } from 'react';

const UserDashboard = () => {
  const [companies, setCompanies] = useState([]);
  const [newCompany, setNewCompany] = useState({ name: '', nextCommunication: { type: '', date: '' } });

  // Function to add a new company
  const addCompany = () => {
    if (newCompany.name.trim() === '') {
      alert('Company name cannot be empty!');
      return;
    }
    setCompanies([...companies, { ...newCompany, lastCommunications: [] }]);
    setNewCompany({ name: '', nextCommunication: { type: '', date: '' } });
  };

  // Function to log a communication
  const logCommunication = (index, type, date, notes) => {
    const updatedCompanies = [...companies];
    updatedCompanies[index].lastCommunications.push({ type, date, notes });

    // Optionally calculate the next communication
    const nextDate = new Date(date);
    nextDate.setDate(nextDate.getDate() + 7); // Example: Schedule communication 7 days later
    updatedCompanies[index].nextCommunication = {
      type: 'Follow-up',
      date: nextDate.toISOString().split('T')[0],
    };

    setCompanies(updatedCompanies);
  };

  return (
    <div>
      <h1>User Dashboard</h1>

      <div style={{ marginBottom: '20px' }}>
        <h2>Add New Company</h2>
        <input
          type="text"
          placeholder="Company Name"
          value={newCompany.name}
          onChange={(e) => setNewCompany({ ...newCompany, name: e.target.value })}
        />
        <input
          type="text"
          placeholder="Next Communication Type"
          value={newCompany.nextCommunication.type}
          onChange={(e) =>
            setNewCompany({
              ...newCompany,
              nextCommunication: { ...newCompany.nextCommunication, type: e.target.value },
            })
          }
        />
        <input
          type="date"
          value={newCompany.nextCommunication.date}
          onChange={(e) =>
            setNewCompany({
              ...newCompany,
              nextCommunication: { ...newCompany.nextCommunication, date: e.target.value },
            })
          }
        />
        <button onClick={addCompany}>Add Company</button>
      </div>

      <table>
        <thead>
          <tr>
            <th>Company Name</th>
            <th>Last Five Communications</th>
            <th>Next Scheduled Communication</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {companies.map((company, index) => (
            <tr key={index}>
              <td>{company.name}</td>
              <td>
                {company.lastCommunications.slice(-5).map((comm, i) => (
                  <div key={i}>
                    {comm.type} on {comm.date}
                  </div>
                ))}
              </td>
              <td>
                {company.nextCommunication
                  ? `${company.nextCommunication.type} on ${company.nextCommunication.date}`
                  : 'None'}
              </td>
              <td>
                <button
                  onClick={() =>
                    logCommunication(
                      index,
                      'Email',
                      new Date().toISOString().split('T')[0],
                      'Followed up via email'
                    )
                  }
                >
                  Log Communication
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserDashboard;
