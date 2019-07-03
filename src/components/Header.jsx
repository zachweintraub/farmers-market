import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
    return(
        <div>
            <style jsx>{`
                div {
                    background-color: black;
                }
                
                .link {
                    color: white;
                    text-decoration: none;
                    font-size: 30px;
                    margin-right: 4%;
                }
            `}</style>
            <div className="headerLinks">
                <Link to="/" style={{textDecoration: 'none'}}><span className="link">Home</span></Link>
                <Link to="/markets" style={{textDecoration: 'none'}}><span className="link">Upcoming Markets</span></Link>
            </div>
        </div>
    );
}

export default Header;