




import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';

import './App.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';




//router bhitra multiple routes huncha
//routes bhitra single single routes create garne
//element ko lagi diff file garauna parcha ani yeta ayera connect garne

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


// import AdminRoutes from './pages/protected_routes/AdminRoutes';

function App() {
  return (



    <Router>
      <ToastContainer/>
      <Routes>



        {/* Admin routes */}
        {/* <Route element={<AdminRoutes />}> */}

        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
        <Route path='/home' element={<Homepage />} />
        <Route path='/women-empowerment' element={<WomenEmpowerment />} />
        <Route path='/sendemail' element={<SendEmail />} />
        <Route path='/resetpassword' element={<ResetPassword />} />
        <Route path='/resetcode' element={<ForgotPasswordCode />} />
        <Route path='/whatwedo' element={<Whatwedo />} />
        <Route path='/ourimpact' element={<OurImpact />} />
        <Route path='/contactus' element={<Contact />} />
        <Route path='/admin/dashboard' element={<AdminDashboard />} />
        








      </Routes>






    </Router>

  );
}

export default App;
