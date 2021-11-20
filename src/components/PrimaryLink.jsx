import { Link } from 'react-router-dom'
import '../assets/styles/primaryLink.css'

const PrimaryLink = (props) => {
    const { to, className, text } = props
    return (
        <Link
            to={to} 
            className={`primary-link ${className ? className : ""}`}>
                { text }
        </Link>
    )
}

export default PrimaryLink