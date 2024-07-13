

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Register from './pages/user/Register';
import Login from './pages/user/Login';
import Homepage from './pages/user/Homepage';
import WomenEmpowerment from './pages/user/WomenEmpowerment';
import SendEmail from './pages/user/Email';
import ResetPassword from './pages/user/ResetPassword';
import ForgotPasswordCode from './pages/user/ForgetPassword';
import Whatwedo from './pages/user/Whatwedo';
import OurImpact from './pages/user/OurImpact';
import Contact from './pages/user/Contact';
import AdminDashboard from './pages/admin/AdminDashboard';
import UserDashboard from './pages/user/UserDashboard';
import Event from './pages/user/Events';
import DonationDetails from './pages/user/DonationDetails';
import DonationList from './components/DonationList';
import Profile from './pages/user/Profile';
import AdminEvent from './pages/admin/AdminEvent';
import Chat from './pages/user/Chat';
import AdminChat from './pages/admin/AdminChat';
import AdminOrganization from './pages/admin/AdminOrganization';
import OrganizationDetails from './pages/user/OrganizationDetails';
import EventList from './pages/user/EventGet';
import EventDetails from './pages/user/EventDetails';
import OppDetails from './pages/user/OppDetails';
import Performance from './pages/user/Performance';
import YouthEmpowerment from './pages/user/YouthEmpowerment';
import ProjectSummary from './pages/user/ProjectSummary';
import ChildrenDevelopment from './pages/user/ChildrenDevelopment';
import ChildProject from './pages/user/ChildProject';
import CommunityHealth from './pages/user/CommunityHealth';
import DRR from './pages/user/DRR';
import Com from './pages/user/Com';
import D from './pages/user/D';
import Teaching from './pages/user/Teaching';
import OurIm from './pages/user/OurIm';

function App() {
  return (
    <Router>
      <ToastContainer />
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Homepage />} />
        <Route path="/women-empowerment" element={<WomenEmpowerment />} />
        <Route path="/youth-empowerment" element={<YouthEmpowerment />} />
        <Route path="/children-development" element={<ChildrenDevelopment />} />
        <Route path="/community-health" element={<CommunityHealth />} />
        <Route path="/teaching-english" element={<Teaching />} />
        <Route path="/drr-research-volunteer" element={<DRR />} />
        <Route path="/sendemail" element={<SendEmail />} />
        <Route path="/resetpassword" element={<ResetPassword />} />
        <Route path="/resetcode" element={<ForgotPasswordCode />} />
        <Route path="/whatwedo" element={<Whatwedo />} />
        <Route path="/ourimpact" element={<OurImpact />} />
        <Route path="/contactus" element={<Contact />} />
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
        <Route path="/user/dashboard" element={<UserDashboard />} />
        <Route path="/event" element={<Event />} />
        <Route path="/donations" element={<DonationList />} /> {/* Assuming this is your donations list route */}
        <Route path="/donation/:id" element={<DonationDetails />} /> {/* Donation detail route */}
        <Route path="/profile" element={<Profile />} />
        <Route path="/admin/event" element={<AdminEvent />} />
        <Route path="/chat" element={<Chat />} />
        {/* <Route path="/admin/chat" element={<AdminChat />} /> */}
        <Route path="/admin/organization" element={<AdminOrganization />} />
        <Route path="/get_events" element={<EventList />} />
        <Route path="/eventDetails" element={<EventDetails />} />
        <Route path="/performance" element={<Performance />} />
        <Route path="/project" element={<ProjectSummary />} />
        <Route path="/child" element={<ChildProject />} />
        <Route path="/com" element={<Com />} />
        <Route path="/d" element={<D />} />
        <Route path="/teaching" element={<Teaching />} />
        <Route path="/our" element={<OurIm />} />
        <Route path="/oppDetails/:id" element={<OppDetails />} />


        <Route path="/organization/:id" element={<OrganizationDetails />} /> {/* Donation detail route */}





      </Routes>
    </Router>
  );
}

export default App;
