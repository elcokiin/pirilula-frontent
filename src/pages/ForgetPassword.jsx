import Title from '../components/Title'
import Subtitle from '../components/Subtitle'
import InputForm from '../components/InputForm'
import PrimaryButton from '../components/PrimaryButton'
import SecondaryButton from '../components/SecondaryButton'
import '../assets/styles/forgetPassword.css'

const ForgetPassword = () => {
    return (
        <div className="container">
            <div className="container-content">
                <Title>Forget Password</Title>
                <Subtitle>Enter your user account's verified email address and we will send you a password reset link.</Subtitle>
                <InputForm
                    label="Email"
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                    required
                />
                <div className="forget-password-primary-button">
                    <PrimaryButton to="/email-send-reset-password">
                        Send
                    </PrimaryButton>
                </div>
                <SecondaryButton to="/login">
                    Back to login
                </SecondaryButton>
            </div>
        </div>
    );
}

export default ForgetPassword