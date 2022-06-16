import "./App.css";
import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className="app">
      <nav className="app-nav">
        <Link to="/">Home</Link>
        <Link to="objective">Objective</Link>
        <Link to="teams">Teams</Link>
        <Link to="thanks">Thank You</Link>
      </nav>
      <div className="app-content">
        <Outlet />
      </div>
      <footer>
        <p>Credera ♥️ XD</p>
      </footer>
    </div>
  );
}

export default App;
