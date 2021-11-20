import { Link } from 'react-router-dom'
import '../assets/styles/login.css'
import PrimaryButton from '../components/PrimaryButton'
import PrimaryLink from '../components/PrimaryLink';

const Login = () => {
  return (
    <div className="login">
      <div className="form-container">
        <form action="/" className="form">
          <label htmlFor="email-username-login" className="label">
            Email or username address
          </label>
          <input
            type="text"
            name="email-username" 
            id="email-username-login"
            placeholder="pirilula@example.com" 
            className="input input-email" />

          <label htmlFor="password" className="label">Password</label>
          <input 
            type="password"
            id="password"
            placeholder="*********"
            className="input input-password" />

          <PrimaryButton 
            text="Log In"
            className="login-button"
          />
          <PrimaryLink 
            text="Forgot your password?"
            to="/forgot-password"
          />
        </form>

        <Link to="/signup" className="secondary-button signup-button">Sign up</Link>
      </div>
  </div>
  );
}

export default Login;