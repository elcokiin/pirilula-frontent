import { Link } from 'react-router-dom'
import '../assets/styles/primaryButton.css'

const PrimaryButton = ({ to, children }) => {
    if (to) {
        return (
            <Link to={to} 
                className="primary-button">
                {children}
            </Link>            
        )
    } else {
        return (
            <button 
                className="primary-button">
                {children}
            </button>
        )
    }
}

export default PrimaryButton