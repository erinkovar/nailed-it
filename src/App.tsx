import "./App.css";
import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className="app">
      <nav className="app-nav">
        <Link className="nav" id="home" to="thanks">Thank You</Link>
        <Link className="nav" id="about" to="objective">Objective</Link>
        <Link className="nav" id="team" to="teams">Teams</Link>
        <Link className="nav" id="objective" to="/">Home</Link>
      </nav>
      <div className="app-content">
        <Outlet />
        <div className="moreInfo">
          Need more information, please try again.
        </div>
        
      </div>
      <footer>
        <p>Credera ♥️ XD</p>
      </footer>
    </div>
  );
}

export default App;
