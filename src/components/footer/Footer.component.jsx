import React from 'react';
import './footer.scss';

const Footer = () => {
    return (
        <div className="footer">
            <div className="row">
                <div className="col-12 footer-1 mt-5 d-flex">
                    <span><i className="fab fa-instagram"></i></span>
                    <span><i className="fab fa-linkedin"></i></span>
                    <span><i className="fab fa-facebook"></i></span>
                    <span><i className="fab fa-twitter"></i></span>
                </div>
                <div className="col-12 footer-2 text-center">
                    <span>&#169;2019 SmartCode All rights reserved </span>
                </div>
            </div>
        </div>
    )
}

export default Footer;
