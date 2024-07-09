




// import {
//   BrowserRouter as Router,
//   Routes,
//   Route
// } from 'react-router-dom';

// import './App.css';
// import { ToastContainer } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';




// //router bhitra multiple routes huncha
// //routes bhitra single single routes create garne
// //element ko lagi diff file garauna parcha ani yeta ayera connect garne

// import Register from './pages/user/Register';
// import Login from './pages/user/Login';
// import Homepage from './pages/user/Homepage';
// import WomenEmpowerment from './pages/user/WomenEmpowerment';
// import SendEmail from './pages/user/Email';
// import ResetPassword from './pages/user/ResetPassword';
// import ForgotPasswordCode from './pages/user/ForgetPassword';
// import Whatwedo from './pages/user/Whatwedo';
// import OurImpact from './pages/user/OurImpact';
// import Contact from './pages/user/Contact';
// import AdminDashboard from './pages/admin/AdminDashboard';
// import UserDashboard from './pages/user/UserDashboard';
// import Event from './pages/user/Events';
// import DonationDetails from './pages/user/DonationDetails';


// // import AdminRoutes from './pages/protected_routes/AdminRoutes';

// function App() {
//   return (



//     <Router>
//       <ToastContainer/>
//       <Routes>



//         {/* Admin routes */}
//         {/* <Route element={<AdminRoutes />}> */}

//         <Route path='/register' element={<Register />} />
//         <Route path='/login' element={<Login />} />
//         <Route path='/home' element={<Homepage />} />
//         <Route path='/women-empowerment' element={<WomenEmpowerment />} />
//         <Route path='/sendemail' element={<SendEmail />} />
//         <Route path='/resetpassword' element={<ResetPassword />} />
//         <Route path='/resetcode' element={<ForgotPasswordCode />} />
//         <Route path='/whatwedo' element={<Whatwedo />} />
//         <Route path='/ourimpact' element={<OurImpact />} />
//         <Route path='/contactus' element={<Contact />} />
//         <Route path='/admin/dashboard' element={<AdminDashboard />} />
//         <Route path='/user/dashboard' element={<UserDashboard />} />
//         <Route path='/event' element={<Event />} />

        








//       </Routes>






//     </Router>

//   );
// }

// export default App;



// import {
//   BrowserRouter as Router,
//   Routes,
//   Route
// } from 'react-router-dom';

// import './App.css';
// import { ToastContainer } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

// import Register from './pages/user/Register';
// import Login from './pages/user/Login';
// import Homepage from './pages/user/Homepage';
// import WomenEmpowerment from './pages/user/WomenEmpowerment';
// import SendEmail from './pages/user/Email';
// import ResetPassword from './pages/user/ResetPassword';
// import ForgotPasswordCode from './pages/user/ForgetPassword';
// import Whatwedo from './pages/user/Whatwedo';
// import OurImpact from './pages/user/OurImpact';
// import Contact from './pages/user/Contact';
// import AdminDashboard from './pages/admin/AdminDashboard';
// import UserDashboard from './pages/user/UserDashboard';
// import Event from './pages/user/Events';
// import DonationDetails from './pages/user/DonationDetails';
// import DonationList from './components/DonationList';

// function App() {
  

//   return (
//     <Router>
//       <ToastContainer />
//       <Routes>
//         <Route path='/register' element={<Register />} />
//         <Route path='/login' element={<Login />} />
//         <Route path='/home' element={<Homepage />} />
//         <Route path='/women-empowerment' element={<WomenEmpowerment />} />
//         <Route path='/sendemail' element={<SendEmail />} />
//         <Route path='/resetpassword' element={<ResetPassword />} />
//         <Route path='/resetcode' element={<ForgotPasswordCode />} />
//         <Route path='/whatwedo' element={<Whatwedo />} />
//         <Route path='/ourimpact' element={<OurImpact />} />
//         <Route path='/contactus' element={<Contact />} />
//         <Route path='/admin/dashboard' element={<AdminDashboard />} />
//         <Route path='/user/dashboard' element={<UserDashboard />} />
//         <Route path='/event' element={<Event />} />
        
//       </Routes>
//     </Router>
//   );
// }

// export default App;

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

function App() {
  return (
    <Router>
      <ToastContainer />
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Homepage />} />
        <Route path="/women-empowerment" element={<WomenEmpowerment />} />
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
        <Route path="/admin/chat" element={<AdminChat />} />
        <Route path="/admin/organization" element={<AdminOrganization />} />
        



        
      </Routes>
    </Router>
  );
}

export default App;
