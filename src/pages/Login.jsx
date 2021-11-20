import FormLogin from '../components/FormLogin'
import SecondaryButton from '../components/SecondaryButton'

import '../assets/styles/login.css'

const Login = () => {
  return (
    <div className="login">
      <div className="form-container">
        <FormLogin />
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