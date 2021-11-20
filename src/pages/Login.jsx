import PrimaryButton from '../components/PrimaryButton'
import PrimaryLink from '../components/PrimaryLink'
import SecondaryButton from '../components/SecondaryButton'
import InputForm from '../components/InputForm'

import '../assets/styles/login.css'

const Login = () => {
  return (
    <div className="login">
      <div className="form-container">
        <form action="/" className="form">
          <InputForm
            name='email-username'
            id='email-username-login'
            placeholder='pirilula@example.com'
            className='input-email'
            text = 'Email or username address'
          />
          <InputForm 
            type='password'
            id='password-login'
            placeholder='*********'
            className='input-password'
            text='Password'
          />
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