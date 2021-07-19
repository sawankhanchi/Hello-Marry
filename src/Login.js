import React, { useState } from 'react';
import ClearIcon from '@material-ui/icons/Clear';
import './Login.css';
import { useHistory } from "react-router-dom";
// import countries from "./countries-data.js";
// import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

function Login() {
    const history = useHistory();
    const [pNumber, setPNumber] = useState('');

    return (
        <div className="login">

            <div>
                <ClearIcon
                    onClick={() => history.push('/')}
                    style={{ fontSize: 20,
                    marginRight: 150,
                    cursor: 'pointer',
                    marginTop: '60px'}}
                />
            </div>

            <div className="login_header">
                <p>Log in or sign up</p>
            </div>

            <div className="login_subHeader">
                <p>Welcome to Hellomarry</p>
            </div>

            <div className="login_container">
                <form>
                    {/* <h4 className="form_dropdown_heading">COUNTRY / REGION</h4>
                    
                    <div>
                    <select className="dropdown_country_input" >
                    {countries && expand_icon && countries.map(c => <option>{c.name}</option>)}
                    </select>
                    </div> */}

                    <input type="text" className="phone_input" placeholder=" +91 phone number" value={pNumber} onChange={() =>setPNumber()}/>

                    <button type="submit" className='login_continueButton'>Continue</button>

                    <div className="social_buttons_heading">
                        <p>OR SIGN IN WITH</p>
                    </div>

                    <div>
                        <button className="socialMedia_button">
                            <img src="https://img.icons8.com/fluent/26/000000/facebook-new.png" alt="" />
                            Facebook
                        </button>


                        <button className="socialMedia_button">
                            <img src="https://img.icons8.com/color/26/000000/google-logo.png" alt="" />
                            Google
                        </button>


                        <button className="socialMedia_button">
                            <img src="https://img.icons8.com/material-sharp/26/000000/mac-os.png" alt="" />
                            Apple
                        </button>
                    </div>

                </form>
            </div>
        </div>
    )
}

export default Login;
