import PrimaryButton from './PrimaryButton'
import PrimaryLink from './PrimaryLink'
import InputForm from './InputForm'

import '../assets/styles/formLogin.css'

const FormLogin = () => {
    return(
        <form action="/" className="form">
          <div className="form-login-input-email">
            <InputForm
              name='email-username'
              id='email-username-login'
              placeholder='pirilula@example.com'
              label = 'Email or username address'
            />
          </div>
          <InputForm 
              type='password'
              id='password-login'
              placeholder='*********'
              label='Password'
          />
          <PrimaryButton>
            Log In
          </PrimaryButton>
          <div className="form-login-link">
            <PrimaryLink to="/forget-password">
              Forgot your password?
            </PrimaryLink>
          </div>
        </form>
    )
}

export default FormLogin