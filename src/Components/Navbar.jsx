import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import '../css/navbar.css'

const Navbar = () => {

    return (
        <>
            <nav>
                <div class= "nav-item" id= "logo">GMBD</div>
                <a className="navitem" id= "home"><Link to="/">Home</Link></a>
                <a className="navitem" id= "login"><Link to="/login">Login</Link></a>

                <div class="search-container">
                  <form>
                    <input class="search-entry" type="text" placeholder="Search" name="search"/>
                    <button type="search">Search</button>
                  </form>
                </div>
            </nav>
        </>
    )
}

export default Navbar;