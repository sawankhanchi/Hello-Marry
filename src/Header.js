import React from 'react';
import './Header.css';
// import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import { Link } from "react-router-dom";

function Header() {

    return (
        <div className="header">
            {/* <Link to="/"> */}
                <div className="header_logo">
                    {/* <FavoriteBorderIcon style={{ fontSize: 30}} /> */}
                    <p className="headerlogo_name">Hello Marry</p>
                </div>
            {/* </Link> */}

            <div className="header_left">
                <Link to="/login">
                    <p>Log in</p>
                </Link>
                
            </div>
        </div>
    )
}

export default Header;
