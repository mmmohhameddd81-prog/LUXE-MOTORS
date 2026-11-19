import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

function Navbar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) =>
    path === "/" ? location.pathname === "/" : location.pathname.startsWith(path);

  const close = () => setOpen(false);

  return (
    <header className="navbar">
      <div className="container navbar-inner">
        <Link to="/" className="brand" onClick={close}>
          <span className="brand-mark">LM</span>
          LUXE MOTORS
        </Link>

        <button
          className="hamburger"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          <span />
          <span />
          <span />
        </button>

        <nav>
          <ul className={`nav-links ${open ? "open" : ""}`}>
            <li>
              <Link to="/" className={isActive("/") ? "active" : ""} onClick={close}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className={isActive("/about") ? "active" : ""} onClick={close}>
                About
              </Link>
            </li>
            <li>
              <Link to="/cars" className={isActive("/cars") ? "active" : ""} onClick={close}>
                Cars
              </Link>
            </li>
            <li className="nav-cta">
              <Link to="/cars" className="btn btn-primary" onClick={close}>
                Explore Cars
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;