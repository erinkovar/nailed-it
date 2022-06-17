import React from "react";
import { useState } from "react";

function NavDropDown() {
    const [isActivated, setActivation ] = useState(false);
    
    return(
        <>
            <nav onClick={() => {setActivation(!isActivated)}} className="app-nav" >
            {isActivated ? "↑ Menu ↑" : "↓ Menu ↓"}
            </nav>
            <div id="plinko"> Hey </div>
        </>
    );
}

export default NavDropDown;