import PrimaryButton from '../components/PrimaryButton'
import PrimaryLink from '../components/PrimaryLink'
import SecondaryButton from '../components/SecondaryButton'

import '../assets/styles/login.css'

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

        <SecondaryButton 
          text="Sign Up"
          to="/signup"
          className="signup-button"
        />
      </div>
  </div>
  );
}

export default Login;