import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Dashboard from './pages/Dashboard';
import PublicDashboard from './pages/PublicDashboard';
import { useAuth } from './hooks/useAuth';

export default function App() {
  const { isAuthenticated } = useAuth();
  return (
    <div style={{ padding: 20, fontFamily: 'sans-serif' }}>
      <Routes>
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/dashboard" element={isAuthenticated ? <Dashboard /> : <Navigate to="/signin" />} />
        <Route path="/public/:hash" element={<PublicDashboard />} />
        <Route path="/" element={<Navigate to="/signin" />} />
      </Routes>
    </div>
  );
}
