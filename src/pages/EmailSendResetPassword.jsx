import '../assets/styles/emailSendResetPassword.css'
import imgEmail from "../assets/images/email.svg"
import PrimaryButton from '../components/PrimaryButton'
import SecondaryLink from '../components/SecondaryLink'

const ForgetPassword = () => {
    return (
        <div class="container">
            <div class="container-content">
                <h1 class="title">Email has been sent!</h1>
                <p class="subtitle">Please check your inbox for instructions on how to reset the password</p>

                <figure class="email-image">
                    <img src={ imgEmail } alt="email"></img>
                </figure>

                <PrimaryButton
                    text="Back to login"
                    to="/login"
                    className="forget-password-button"
                />

                <p class="resend">
                    <span>Didn't receive the email?</span>
                    <SecondaryLink 
                        to="#"
                        text="Resend"
                    />
                </p>
            </div>
        </div>
    )
}

export default ForgetPassword