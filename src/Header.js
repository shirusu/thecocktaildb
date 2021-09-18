import React from 'react';
import {Link} from "react-router-dom";

const Header = () => {
    return (
        <div>
            <nav className="nav">
                <Link to="/" className="nav-link">Home</Link>
                <Link to="/drinks" className="nav-link">Drinks</Link>
            </nav>
            
        </div>
    );
};

export default Header;