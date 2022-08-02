import { Link } from 'react-router-dom';


const HeaderLinks = () => {

    return (
        <div className='header-links'>
            <Link to="/howitworks">How it works</Link>
            <Link to="/blog">Useful blog</Link>
            <Link to="/contact">Contact</Link>
        </div>
    );
}

export default HeaderLinks;