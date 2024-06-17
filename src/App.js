




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
import Navbar from './components/Navbar';


// import AdminRoutes from './pages/protected_routes/AdminRoutes';

function App() {
  return (



    <Router>
      <Routes>



        {/* Admin routes */}
        {/* <Route element={<AdminRoutes />}> */}

        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
        <Route path='/home' element={<Homepage />} />





      </Routes>






    </Router>

  );
}

export default App;
