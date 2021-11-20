import { Link } from 'react-router-dom'
import '../assets/styles/primaryLink.css'

const PrimaryLink = ({ to, className, text }) => (
        <Link
            to={to} 
            className={`primary-link ${className ? className : ""}`}
        >
            { text }
        </Link>
)

export default PrimaryLink