import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

function NavDropDown() {
    const [isActivated, setActivation ] = useState(false);

    const hiddenStyle = {
        display: 'none'
    };

    const activeStyle = {
        animation: '0.3s ease-out expand'
    };

    
    return(
        <>
            <nav onClick={() => {setActivation(!isActivated)}} className="app-nav" >
            {isActivated ? "↑ Menu ↑" : "↓ Menu ↓"}
            </nav>
            <div style={isActivated ? activeStyle : hiddenStyle } id="plinkoContainer"> 
                <button id="addPlinko">Add Plinko</button> 
                <div id="plinko" ></div>
                <Link className="nav" to="thanks">Thank You</Link>
                <Link className="nav" to="objective">Objective</Link>
                <Link className="nav" to="teams">Teams</Link>
                <Link className="nav" to="/">Home</Link>
            </div>
        </>
    );
}

export default NavDropDown;