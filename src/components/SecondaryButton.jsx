import { Link } from 'react-router-dom'
import '../assets/styles/secondaryButton.css'

const SecondaryButton = ({to, children}) => {
    if (to) {
        return (
            <Link to={to} 
                className="secondary-button">
                {children}
            </Link>            
        )
    } else {
        return (
            <button 
                className="secondary-button">
                {children}
            </button>
        )
    }
}

export default SecondaryButton