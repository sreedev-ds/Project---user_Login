import { Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import './Login_Section.css';
import Login_Footer from './Login_Footer';

import {
  setUsername,
  setPassword,
  setError,
  setLoggedIn,
} from '../../../redux/loginSlice.jsx';

import { validatePassword } from '../Utils-Validation/Login_Validation.jsx';

function Login_Section() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { username, password, error } = useSelector((state) => state.login);

  const handleSubmit = (e) => {
    e.preventDefault();

   
    if (!username.trim()) {
      dispatch(setError('Username is required.'));
      return;
    }

   
    const passwordError = validatePassword(password);
    if (passwordError) {
      dispatch(setError(passwordError));
      return;
    }

    
    dispatch(setError(''));
    dispatch(setLoggedIn(true));
    navigate('/Home');
  };

  return (
    <div className="login-container">
      <form onSubmit={handleSubmit} className="login-card">
        <h2 className="login-header">Sign In</h2>
        <p className="login-subtext">
          New user? <a href="#">Create an account</a>
        </p>

        <input
          type="text"
          placeholder="Username or email"
          className="custom-input"
          value={username}
          onChange={(e) => dispatch(setUsername(e.target.value))}
        />

        <input
          type="password"
          placeholder="Password"
          className="custom-input mt-3"
          value={password}
          onChange={(e) => dispatch(setPassword(e.target.value))}
        />

        {error && (
          <p className="text-danger mt-2 text-wrap small" style={{ maxWidth: '100%' }}>
            {error}
          </p>
        )}

        <div className="custom-checkbox-wrapper mt-3">
          <input type="checkbox" id="keepSignedIn" className="custom-checkbox" />
          <label htmlFor="keepSignedIn" className="checkbox-label">
            Keep me signed in
          </label>
        </div>

        <Button type="submit" className="custom-button mt-3">
          Sign In
        </Button>

        <div>
          <Login_Footer />
        </div>
      </form>
    </div>
  );
}

export default Login_Section;
