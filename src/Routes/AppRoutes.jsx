import { Routes, Route } from 'react-router-dom';
import Login_Page from '../Pages/Login/Login_Page.jsx';
import Home_Page from '../Pages/Home/Home_Page.jsx';
import ProtectedRoute from './ProtectedRoute.jsx';

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Login_Page />} />
      <Route
        path="/Home"
        element={
          <ProtectedRoute>
            <Home_Page />
          </ProtectedRoute>
        }
      />
      <Route path="*" element={<Login_Page />} />
    </Routes>
  );
}

export default AppRoutes;
