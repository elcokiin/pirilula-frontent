import { Link } from 'react-router-dom'
import '../assets/styles/buttonPrimary.css'

const ButtonPrimary = (props) => {
    const { link, to, message, className } = props;
    if (link) {
        return (
            <Link to={to} 
                className={`primary-button ${className ? className : ""}`}>
                {message}
            </Link>            
        )
    } else {
        return (
            <button 
                className={`primary-button ${className ? className : ""}`}>
                {message}
            </button>
        )
    }
}

export default ButtonPrimary