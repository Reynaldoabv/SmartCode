import React from 'react';
import './header.scss';

import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className="header container-fluid pl-0 pr-0">
            <nav className="row">
                <div className="col-10 ml-0 mr-0">
                    <Link className="navbar-brand">
                        <div className="logo">
                            <strong> [ </strong>Smart<strong>Code ]</strong>
                            <small className="text-center">HUMAN DIGITAL EXPERIENCES</small>
                        </div>                        
                    </Link>
                </div>
                <div className="col-2 link ml-0 mr-0">
                    <button className="btn btn-dark mt-3">&#9776; Menu</button>
                </div>                
            </nav>
        </div>
    )
}

export default Header;
