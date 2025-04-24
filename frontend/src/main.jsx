import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css'
import Register from './register.jsx';
import { Route,Routes,BrowserRouter } from 'react-router-dom';
import Login from './login.jsx';
import Blog from './blog.jsx';
import ProtectedRoute from './ProtectedRoute.jsx';

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/blog" element={<ProtectedRoute element={<Blog />} />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
);