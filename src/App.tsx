import "./App.css";
import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";
import NavDropDown from "./NavDropDown"

function App() {
  return (
    <div className="app">
      <NavDropDown></NavDropDown>
      <div className="app-content">
        <Outlet />
        <div id="moreInfo" className="moreInfo">
          Need more information, please try again.
        </div>
        
      </div>
      <footer>
        <p>Credera ♥️ XD</p>
      </footer>
    </div>
  );
}

/**
 *  <Link to="thanks">Thank You</Link>
        <Link to="objective">Objective</Link>
        <Link to="teams">Teams</Link>
        <Link to="/">Home</Link>
 */

export default App;
