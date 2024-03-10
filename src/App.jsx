
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
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import Layout from './Pages/Dashboard/Layout';
import Users from './Pages/Dashboard/Users';
import Issues from './Pages/Dashboard/Issues';
import ExpertCategory from './Pages/Dashboard/ExpertCategory';
import UserChatPage from './Pages/User/UserChatPage';
import ExpertChatPage from './Pages/Expert/ExpertChatPage';
import UserProfile from './Pages/User/UserProfile';

function App() {

  return (
    <>
      <ToastContainer />
        <Router>
          <Routes>
            <Route element={<PrivateRoutes />}>
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/login" element={<LoginPage />} />
            </Route>
            <Route element={<UserProtected />}>
            <Route path="/" element={<UserHomePage />} />
            <Route path="/chat" element={<UserChatPage />} />
            <Route path="/userprofile" element={<UserProfile />} />
            </Route>
            <Route element={<ExpertsProtected />}>
            <Route path="/experthome" element={<ExpertHomePage />} />
            <Route path="/expertprofile" element={<ExpertProfile />} />
            <Route path="/expert/chat" element={<ExpertChatPage />} />
            </Route>
            <Route element={<AdminProtected />}>
            <Route path="/dashboard" element={<Layout> </Layout>}>
            <Route path="/dashboard/" element={<Dashboard />} />
            <Route path="/dashboard/users" element={<Users />} />
            <Route path="/dashboard/issues" element={<Issues />} />
            <Route path="/dashboard/expert-category" element={<ExpertCategory />} />

            </Route>
            </Route>
          </Routes>
        </Router>
    </>
  )
}

export default App
