import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import AdminDashboard from './Components/AdminDashboard';
import UserDashboard from './Components/UserDashboard';
import Analytics from './Components/Analytics';
import MyChartComponent from './Components/MyChartComponent';

const App = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/admin">Admin Dashboard</Link></li>
            <li><Link to="/user">User Dashboard</Link></li>
            <li><Link to="/analytics">Analytics Dashboard</Link></li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/user" element={<UserDashboard />} />
          <Route path="/analytics" element={<Analytics />} />
        </Routes>
      </div>
    </Router>
  );
};

const Home = () => <h2>Welcome to the Home Page!</h2>;

export default App;

