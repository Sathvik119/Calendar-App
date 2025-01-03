import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import AdminDashboard from './Components/AdminDashboard';
import UserDashboard from './Components/UserDashboard';
import Analytics from './Components/Analytics';
import MyChartComponent from './Components/MyChartComponent';
import './App.css'; // Import your styles

const App = () => {
  return (
    <Router>
      <div className="app-container">
        <header className="app-header">
          <h1>Communication Tracking System</h1>
        </header>

        {/* Navbar with centered items */}
        <nav className="navbar">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/admin">Admin Dashboard</Link></li>
            <li><Link to="/user">User Dashboard</Link></li>
            <li><Link to="/analytics">Analytics Dashboard</Link></li>
          </ul>
        </nav>

        {/* Main Content */}
        <div className="main-content center-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/admin" element={<AdminDashboard />} />
            <Route path="/user" element={<UserDashboard />} />
            <Route path="/analytics" element={<Analytics />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

const Home = () => (
  <div className="home-content">
    <h2>Welcome to the Home Page!</h2>
    <p>This is a system to track and manage your communications with various companies.</p>
  </div>
);

export default App;
