import { Link } from 'react-router-dom'
import '../assets/styles/secondaryLink.css'

const SecondaryLink = ({ to, className, text }) => (
        <Link
            to={to} 
            className={`secondary-link ${className ? className : ""}`}
        >
            { text }
        </Link>
)

export default SecondaryLink