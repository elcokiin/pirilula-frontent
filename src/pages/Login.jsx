import FormLogin from '../components/FormLogin'
import SecondaryButton from '../components/SecondaryButton'

const Login = () => {
  return (
    <div className="container">
      <div className="container-content">
        <FormLogin />
        <SecondaryButton 
          to="/signup"
        >
          Sign Up
        </SecondaryButton>
      </div>
  </div>
  );
}

export default Login