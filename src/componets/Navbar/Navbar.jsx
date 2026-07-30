import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import HomeStyle from "./Navbar.module.css";
import { FaSun, FaMoon } from "react-icons/fa";

export default function Navbar({ setSearchTerm }) {

  const [search, setSearch] = useState("");
  const [darkMode, setDarkMode] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    if (search.trim()) {
      setSearchTerm(search);
    }
  }


  function toggleDarkMode() {
    setDarkMode(!darkMode);
    document.body.classList.toggle("dark-mode");
  }


  return (
    <nav className={`navbar navbar-expand-lg ${darkMode ? "navbar-dark bg-dark" : "bg-body-tertiary"}`}>
      <div className="container-fluid">
        <NavLink className="navbar-brand" to="/">
          <h3>Recipe App</h3>
        </NavLink>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink className="nav-link" to="/"> Home </NavLink>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link" to="/about"> About </NavLink>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link" to="/login"> Login </NavLink>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link" to="/register"> Register </NavLink>
            </li>

          </ul>

          <form className="d-flex me-3" onSubmit={handleSubmit} >
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search recipes..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />

            <button className="btn btn-outline-success" type="submit">  Search </button>
          </form>



          <button className="btn btn-outline-secondary d-flex align-items-center gap-2" onClick={toggleDarkMode}>
            {darkMode ? (
              <>
                <FaSun />
                Light
              </>
            ) : (
              <>
                <FaMoon />
                Dark
              </>
            )}
          </button>
        </div>
      </div>
    </nav>
  );
}