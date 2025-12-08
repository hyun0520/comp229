import { Link } from "react-router-dom";
import logoimg from '../assets/logoimg.png'
import './Layout.css'


export default function Layout() {
    return (
        <>
        {/* Header */}
        <header className="header">
            <Link to="/"> {/*Move to homepage*/}
                    <img className="logo" src={logoimg} alt="logo" /> 
            </Link>
                <nav className="nav">
                    <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/projects">Projects</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                    <li><Link to="/service">Service</Link></li>  
                    </ul>
                </nav>
            <div></div>
        </header>
        
        {/* Footer */}
        <footer className="footer">
            <p>© 2025 CH.Lee Portfolio. All Rights Reserved.</p>
        </footer>
        </>
    )
}