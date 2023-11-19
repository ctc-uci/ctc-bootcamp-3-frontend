import {useState} from 'react';
import {Link} from 'react-router-dom';
import './NavBar.css';

function NavBar() {
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);
    return(
        <>
            <nav className="navbar">
                <div className="navbar-container">
                    <Link to="/" onClick={closeMobileMenu} className="navbar-logo">
                        <i className="fas fa-dice-d20"></i>All About You
                    </Link>
                    <div className = 'menu-icon' onClick={handleClick}>
                    <   i className = {click ? 'fas fa-times' : 'fas fa-bars'} />
                    </div>
                    <ul className={click ? 'nav-menu active': 'nav-menu'}>
                        <li className="nav-item">
                            <Link to="/hangman" onClick={closeMobileMenu} className="nav-links">
                                Hangman
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/truthslies" onClick={closeMobileMenu} className="nav-links">
                                Truths and Lies
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/rps" onClick={closeMobileMenu} className="nav-links">
                                Rock Paper Scissors
                            </Link>
                        </li>
                        {/* <li className="nav-item">
                            <Link to="/members" onClick={closeMobileMenu} className="nav-links">
                                Members
                            </Link>
                        </li> */}
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default NavBar;