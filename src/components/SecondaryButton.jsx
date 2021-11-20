import { Link } from 'react-router-dom'
import '../assets/styles/secondaryButton.css'

const SecondaryButton = (props) => {
    const { to, text, className } = props;
    if (to) {
        return (
            <Link to={to} 
                className={`secondary-button ${className ? className : ""}`}>
                {text}
            </Link>            
        )
    } else {
        return (
            <button 
                className={`secondary-button ${className ? className : ""}`}>
                {text}
            </button>
        )
    }
}

export default SecondaryButton