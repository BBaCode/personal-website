import "./NavBar.scss";

import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div className="nav">
      <Link className="nav__header" to="/">
        <h2 className="nav__header">Brian Bassett</h2>
      </Link>
    </div>
  );
}

export default NavBar;
