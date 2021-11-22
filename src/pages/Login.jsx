import FormLogin from '../components/FormLogin'
import SecondaryButton from '../components/SecondaryButton'

const Login = () => {
  return (
    <div className="container">
      <div className="container-content">
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