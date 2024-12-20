import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard';
import ManagerDashboard from './components/Dashboard/ManagerDashboard';
import NotFoundPage from './pages/NotFoundPage';
import PromoteEmployees from './components/Dashboard/PromoteEmployees';


function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Navigate to="/login" />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/dashboard/manager/promote" element={<PromoteEmployees />} />
                <Route path="/dashboard/employee" element={<EmployeeDashboard />} />
                <Route path="/dashboard/manager" element={<ManagerDashboard />} />
                <Route path="*" element={<NotFoundPage />} />
            </Routes>
        </Router>
    );
}

export default App;
