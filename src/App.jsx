
import './App.css'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import PrivateRoutes from './ProtectedRouter/PrivateRoutes';
import RegisterPage from './Pages/RegisterPage';
import LoginPage from './Pages/LoginPage';
import UserProtected from './ProtectedRouter/UserProtected';
import UserHomePage from './Pages/User/UserHomePage';
import AdminProtected from './ProtectedRouter/AdminProtected';
import Dashboard from './Pages/Dashboard/Dashboard';
import ExpertsProtected from './ProtectedRouter/ExpertsProtected';
import ExpertHomePage from './Pages/Expert/ExpertHomePage';
import ExpertProfile from './Pages/Expert/ExpertProfile';

function App() {

  return (
    <>
       <Router>
        <Routes>
          {/* <Route element={<PrivateRoutes />}> */}
            <Route path="register/" element={<RegisterPage />} />
            <Route path="login/" element={<LoginPage />} />
          {/* </Route> */}
          {/* <Route element={<UserProtected />}> */}
            <Route path="/" element={<UserHomePage />} />
          {/* </Route> */}
          {/* <Route element={<ExpertsProtected />}> */}
            <Route path="experthome/" element={<ExpertHomePage />} />
            <Route path="expertprofile/" element={<ExpertProfile />} />
          {/* </Route> */}
          {/* <Route element={<AdminProtected />}> */}
            <Route path="dashboard" element={<Dashboard />} />
          {/* </Route> */}
        </Routes>
      </Router>
    </>
  )
}

export default App
