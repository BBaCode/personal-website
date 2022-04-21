import "./NavBar.scss";
import { Link } from "react-router-dom";
import { useState } from "react";

function NavBar() {
  let [navState, setNavState] = useState({
    activeLink: null,
    links: ["About Me", "Work"],
    path: ["/about", "/work"],
  });

  function toggleActive(index) {
    setNavState({ ...navState, activeLink: navState.links[index] });
  }

  function toggleActiveStyles(index) {
    if (
      navState.links[index] === navState.activeLink &&
      window.location.pathname === navState.path[index]
    ) {
      return "nav__list-item nav__list-item-active";
    } else {
      return "nav__list-item";
    }
  }

  return (
    <div className="nav">
      <Link
        onClick={() => {
          toggleActive();
        }}
        className="nav__header"
        to="/"
      >
        <h2 className="nav__header">Brian B.</h2>
      </Link>
      <ul className="nav__list">
        {navState.links.map((link, index) => {
          return (
            <Link
              className={toggleActiveStyles(index)}
              to={navState.path[index]}
              onClick={() => {
                toggleActive(index);
              }}
              key={index}
            >
              <li>{link}</li>
            </Link>
          );
        })}
        {/* <Link className="nav__list-item" to="/about">
          <li>About Me</li>
        </Link>
        <Link className="nav__list-item" to="/work">
          <li>Work</li>
        </Link> */}
      </ul>
    </div>
  );
}

export default NavBar;
