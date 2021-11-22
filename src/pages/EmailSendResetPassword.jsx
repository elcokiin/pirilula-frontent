import '../assets/styles/emailSendResetPassword.css'
import imgEmail from "../assets/images/email.svg"
import PrimaryButton from '../components/PrimaryButton'
import SecondaryLink from '../components/SecondaryLink'
import Title from '../components/Title'
import Subtitle from '../components/Subtitle'

const ForgetPassword = () => {
    return (
        <div class="container">
            <div class="container-content">
                <Title>Email has been sent!</Title>
                <Subtitle>Please check your inbox for instructions on how to reset the password</Subtitle>

                <figure class="email-image">
                    <img src={ imgEmail } alt="email"></img>
                </figure>

                <div className="email-reset-password-primary-button">
                    <PrimaryButton to="/login">
                        Back to login
                    </PrimaryButton>
                </div>

                <p class="resend">
                    <span>Didn't receive the email?</span>
                    <div className="email-send-reset-password-link">
                        <SecondaryLink to="#">
                            Resend
                        </SecondaryLink>
                    </div>
                </p>
            </div>
        </div>
    )
}

export default ForgetPassword