import './Header.scss';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
  } from "react-router-dom";
import Logo from '../assets/img/logo.png';
import Logo2 from '../assets/img/logo2.png';


function Header() {
    return (
        <header className='header'>
          <div className='container header__container'>
          <Link to="/">
            <img src={Logo2} alt="Logo" className='logo-pic'/>
            </Link>
            <nav className='header__nav'>
          <ul className='header__list'>
            <li className='header__link'>
              <Link to="/">Home</Link>
            </li>
            <li className='header__link'>
              <Link to="/game">Game</Link>
            </li>
            
          </ul>
        </nav>
        </div>
        </header>
    );
}

export default Header;