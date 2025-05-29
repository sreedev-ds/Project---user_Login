import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

function ProtectedRoute({ children }) {
  const loggedIn = useSelector((state) => state.login.loggedIn);

  return loggedIn ? children : <Navigate to="/" />;
}

export default ProtectedRoute;
