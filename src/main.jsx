import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter,Routes,Route } from "react-router";
import AboutPage from "./Pages/AboutPage.jsx"
// import ContactPage from './Pages/ContactPage.jsx';
import { BookAIcon, Contact } from 'lucide-react';
import TopNavbar from './Components/TopNavbar.jsx';
import BottomNavbar from './Components/BottomNavbar.jsx';
import { NavLink } from 'react-router';
import loginUsPage from './Pages/loginUsPage.jsx';

import Footer from './Components/Footer.jsx';
import LoginPage from './Pages/LoginPage.jsx';
import RegisterPage from './Pages/RegisterPage.jsx';
import DashboardPage from './Pages/DashboardPage.jsx';



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <TopNavbar/>
    <BottomNavbar/>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/about" element={<AboutPage/>} />
      {/* <Route path="/Contact" element={<ContactPage/>} /> */}
      <Route path="/login" element={<LoginPage/>} />
      <Route path="/register" element={<RegisterPage/>} />
      <Route path="/dashboard" element={<DashboardPage/>} />
      <Route path="/blog/:123" element={<p>Single blog read Page</p>} />
      <Route path="/join-us" element={<p>Join us</p>} />
      

      

    </Routes>
    {/* <Footer/> */}
    </BrowserRouter>
  </StrictMode>,
)
