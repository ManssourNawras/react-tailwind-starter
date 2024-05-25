import './App.css';

// lib
import {BrowserRouter as Router,Routes,	Route,Navigate} from "react-router-dom";
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

// custom
import { Home, Contact, Error } from './pages/client'
import { ForgetPassword, Login, Register, ResetPassord } from './pages/auth';
import { Dashboard} from './pages/admin';

function App() {
  return (
    <Router>
      <ToastContainer />
      <Routes>
        {/* ========== base pages =========== */}
        <Route path='/' element={<Home />}>
          {' '}
        </Route>
        <Route path='/contact' element={<Contact />}>
          {' '}
        </Route>

        {/* ================ auth ============== */}
        <Route path='/login' element={<Login />}>
          {' '}
        </Route>

        <Route path='/register' element={<Register />}>
          {' '}
        </Route>

        <Route path='/forget-password' element={<ForgetPassword />}>
          {' '}
        </Route>

        <Route path='/reset-password/:token' element={<ResetPassord />}>
          {' '}
        </Route>

        {/* ============ admin ============= */}
        <Route
          path='/admin'
          element={
            <Dashboard />
            // user.isLoggedin ? (
            //   <Dashboard />
            // ) : (
            //   <Navigate to='/login'></Navigate>
            // )
          }
        >
          {' '}
        </Route>

        {/* ==============  error - unkown pages ============= */}
        <Route path='/*' element={<Error />}>
          {' '}
        </Route>
      </Routes>
    </Router>
  )
}

export default App;
