import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom';
import { Button } from './Button';
import './Navbar.css';

function Navbar() {
    const [click, setClick] = useState(false);
    const fClick = () => setClick(!click);
    const closeMenu = () => setClick(false);
    const [button, setButton] = useState(true);

    const prikaziDugme = () => {
        if(window.innerWidth <= 960) {
            setButton(false);
        }
        else {
            setButton(true);
        }
    }

    useEffect(() => {
        prikaziDugme();
    }, []);

    window.addEventListener('resize', prikaziDugme);

    return (
        <>
           <nav className="navbar">
               <div className="navbar-container">

                    <Link to='/' className='navbar-logo' onClick={closeMenu}>
                        Numino  <i className="far fa-compass"></i>
                    </Link>

                    <div className="menu-icon" onClick={fClick}>
                        <i className={click ? "fas fa-times" : 'fas fa-bars'}></i>
                    </div>

                    <ul className={click ? 'nav-menu active': 'nav-menu'}>

                        <li className="nav-item">
                            <Link to='/' className='nav-links' onClick={closeMenu}>
                                Home
                            </Link>
                        </li>

                        <li className="nav-item">
                            <Link to='/about' className='nav-links' onClick={closeMenu}>
                                About
                            </Link>
                        </li>

                        <li className="nav-item">
                            <Link to='/signup' className='nav-links-mobile' onClick={closeMenu}>
                                Sign Up
                            </Link>
                        </li>

                    </ul>
                    {button && <Button buttonStyle='btn--outline'> Sign Up </Button>}
               </div>
           </nav>
        </>
    )
}

export default Navbar

