import { Link } from 'react-router-dom'
import '../assets/styles/primaryLink.css'

const PrimaryLink = ({ to, children }) => (
        <Link
            to={to} 
            className="primary-link"
        >
            { children }
        </Link>
)

export default PrimaryLink