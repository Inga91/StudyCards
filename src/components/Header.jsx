import './Header.scss'
import { Link } from 'react-router-dom'
// import Logo from '../assets/img/logo.png'
import Logo2 from '../assets/img/logo2.png'

function Header() {
    return (
        <header className="header">
            <div className="header_container container ">
                <Link to="/" className="header__link-logo">
                    <img src={Logo2} alt="Logo" className="logo-pic" />
                </Link>
                <nav className="header__nav">
                    <ul className="header__list">
                        <li className="header__item">
                            <Link to="/" className="header__link">
                                Home
                            </Link>
                        </li>
                        <li className="header__item">
                            <Link to="/game" className="header__link">
                                Game
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Header
