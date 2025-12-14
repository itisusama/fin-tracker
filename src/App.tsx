import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Landing from './pages/Landing';
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';
import Reset from './pages/auth/Reset';
import DashboardLayout from './layouts/dashboard';
import Income from './pages/dashboard/Income';
import Expense from './pages/dashboard/Expense';
import Email from './pages/dashboard/Email';
import Report from './pages/dashboard/Report';
import Logout from './pages/dashboard/Logout';
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react';
import { Toaster } from 'react-hot-toast';

const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // animation duration (in ms)
      once: true,     // whether animation should happen only once
    });
  }, []);
  return (
    <div>
      <Router>
        <Toaster />
        <Routes>
          <Route path="/" element={<Landing />} />
          {/* AUTH ROUTES */}
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/reset" element={<Reset />} />
          {/* AUTH ROUTES */}
          
          {/* DASHBOARD ROUTES */}
          <Route element={<DashboardLayout />}>
            <Route path="/income" element={<Income />} />
            <Route path="/expense" element={<Expense />} />
            <Route path="/email" element={<Email />} />
            <Route path="/report" element={<Report />} />
            <Route path="/logout" element={<Logout />} />
          </Route>
          {/* DASHBOARD ROUTES */}
        
        </Routes>
      </Router>
    </div>
  )
}

export default App