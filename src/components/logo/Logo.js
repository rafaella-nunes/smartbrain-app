import React from "react";
import Tilt from 'react-parallax-tilt';
import './Logo.css';
import brain from './logo_brain.png';

const Logo = () => {
    return(
        <div className="ma4 mt0">
            <Tilt className="Tilt br2 shadow-2 w3">
                <div style={{ height: '60px', width: '60px'}} className="pa2">
                    <img src= {brain} alt="brain logo"></img>
                </div>
            </Tilt>

        </div>
    );
}

export default Logo;