import React, { useState } from 'react';

const UserDashboard = () => {
  const [companies, setCompanies] = useState([]);
  const [newCompany, setNewCompany] = useState({ name: '', nextCommunication: { type: '', date: '' } });
  const [showModal, setShowModal] = useState(false);
  const [selectedCompanyIndex, setSelectedCompanyIndex] = useState(null);
  const [communicationType, setCommunicationType] = useState('');
  const [communicationDate, setCommunicationDate] = useState('');
  const [notes, setNotes] = useState('');

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
  const logCommunication = () => {
    const updatedCompanies = [...companies];
    updatedCompanies[selectedCompanyIndex].lastCommunications.push({ type: communicationType, date: communicationDate, notes });

    // Calculate the next communication date (for example, 7 days later)
    const nextDate = new Date(communicationDate);
    nextDate.setDate(nextDate.getDate() + 7);
    updatedCompanies[selectedCompanyIndex].nextCommunication = {
      type: 'Follow-up',
      date: nextDate.toISOString().split('T')[0],
    };

    setCompanies(updatedCompanies);
    setShowModal(false);  // Close modal after submission
  };

  // Function to handle overdue and today highlight
  const getHighlightClass = (company) => {
    const today = new Date().toISOString().split('T')[0];
    const nextCommDate = company.nextCommunication ? company.nextCommunication.date : null;
    if (!nextCommDate) return ''; // No next communication, no highlight

    if (nextCommDate < today) return 'overdue';  // Red highlight for overdue
    if (nextCommDate === today) return 'due-today'; // Yellow highlight for due today
    return '';
  };

  return (
    <div className="dashboard-container">
      <h1>User Dashboard</h1>

      {/* Add Company Section */}
      <div className="add-company">
        <h2>Add New Company</h2>
        <div className="input-group">
          <input
            type="text"
            placeholder="Company Name"
            value={newCompany.name}
            onChange={(e) => setNewCompany({ ...newCompany, name: e.target.value })}
            className="input-field"
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
            className="input-field"
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
            className="input-field"
          />
          <button onClick={addCompany} className="btn btn-primary">Add Company</button>
        </div>
      </div>

      {/* Company List */}
      <div className="company-list">
        <h2>Company Communications</h2>
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
              <tr key={index} className={getHighlightClass(company)}>
                <td>{company.name}</td>
                <td>
                  {company.lastCommunications.slice(-5).map((comm, i) => (
                    <div key={i} className="communication-entry">
                      {comm.type} on {comm.date}
                      <div className="tooltip">{comm.notes}</div>
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
                    onClick={() => {
                      setSelectedCompanyIndex(index);
                      setShowModal(true);
                    }}
                    className="btn btn-secondary"
                  >
                    Log Communication
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Modal for logging communication */}
      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <h3>Log Communication for {companies[selectedCompanyIndex].name}</h3>
            <label>Communication Type:</label>
            <input
              type="text"
              value={communicationType}
              onChange={(e) => setCommunicationType(e.target.value)}
              placeholder="E.g., Email, Phone Call"
              className="input-field"
            />
            <label>Date:</label>
            <input
              type="date"
              value={communicationDate}
              onChange={(e) => setCommunicationDate(e.target.value)}
              className="input-field"
            />
            <label>Notes:</label>
            <textarea
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              placeholder="Add notes about the communication"
              className="input-field"
            />
            <div className="modal-actions">
              <button onClick={logCommunication} className="btn btn-primary">Submit</button>
              <button onClick={() => setShowModal(false)} className="btn btn-danger">Cancel</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserDashboard;
