import PrimaryButton from './PrimaryButton'
import PrimaryLink from './PrimaryLink'
import InputForm from './InputForm'

import '../assets/styles/formLogin.css'

const FormLogin = () => {
    return(
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
    )
}

export default FormLogin