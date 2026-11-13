
import { Link } from "react-router-dom";
import { FaGlobe } from "react-icons/fa";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark navigation">
      <div className="container">
        <Link className="navbar-brand" to="/">
          <FaGlobe /> WW3 CHANCE
        </Link>

        <div className="navbar-nav ms-auto">
          <Link className="nav-link" to="/">
            Dashboard
          </Link>

          <Link className="nav-link" to="/news">
            World News
          </Link>

          <Link className="nav-link" to="/analysis">
            Analysis
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
