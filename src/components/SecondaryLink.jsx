import { Link } from 'react-router-dom'
import '../assets/styles/secondaryLink.css'

const SecondaryLink = ({ to, children }) => (
        <Link
            to={to} 
            className="secondary-link"
        >
            { children }
        </Link>
)

export default SecondaryLink