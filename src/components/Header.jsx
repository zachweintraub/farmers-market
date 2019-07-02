import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
    return(
        <div>
            <Link to="/produce">Produce Calendar</Link>
            <Link to="/markets">Upcoming Markets</Link>
        </div>
    );
}

export default Header;