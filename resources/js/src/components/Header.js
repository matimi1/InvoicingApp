import HeaderLinks from './HeaderLinks';
import UserElement from './UserElement';
import { Link } from 'react-router-dom';
//import logo from "../images/logo.svg";

const Header = () => {

    return (
        <header>

            <div className='header-logo'>
                <Link to="/">
                    <img className="header-logo-img" src="../images/logo.svg" alt="logo" /></Link>
            </div>
            <div className='header-links-container'>
                <HeaderLinks />
                <UserElement />
            </div>

        </header>
    );
}

export default Header;