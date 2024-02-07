import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from "./pages/Login";
import Navbar from './components/Navbar';
import Register from "./pages/Register";
import Courses from "./pages/Courses";
import {PrivateRoute} from "./routes/PrivateRoute";
import CourseDetails from "./pages/CourseDetails";
import MyCourses from "./pages/MyCourses";
import Footer from "./components/Footer";
import './index.css';

function App() {
  return (
      <Router>
        <div className="main-content">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/courses" element={<PrivateRoute><Courses /></PrivateRoute>} />
            <Route path="/courses/:id" element={<PrivateRoute><CourseDetails /></PrivateRoute>} />
            <Route path="/my-courses" element={<PrivateRoute><MyCourses /></PrivateRoute>} />
          </Routes>

        </div>
        <Footer />
      </Router>
  );
}

export default App;
