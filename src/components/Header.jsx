import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
    return(
        <div>
            <style jsx global>{`
                div {
                    background-color: black;
                }

                a {
                    color: white;
                    text-decoration: none;
                    font-size: 30px;
                }
            `}</style>
            <Link className="link" to="/">Home</Link>
            <Link to="/produce">Produce Calendar</Link>
            <Link to="/markets">Upcoming Markets</Link>
        </div>
    );
}

export default Header;