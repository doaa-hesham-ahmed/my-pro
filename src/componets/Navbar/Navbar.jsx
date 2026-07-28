import React, { useState } from 'react'
import { NavLink } from "react-router-dom";
import HomeStyle from "./Navbar.module.css";


export default function Navbar({setSearchTerm}) {


  const [search, setSearch] = useState("");


  function handleSubmit(e){

    e.preventDefault();

    if(search.trim()){
      setSearchTerm(search);
    }

  }


  return (

    <nav className=" navbar navbar-expand-lg bg-body-tertiary">

      <div className="container-fluid">


        <NavLink 
          className="navbar-brand"
          to="/"
        >
          Recipe App
        </NavLink>



        <button 
          className="navbar-toggler" 
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
        >

          <span className="navbar-toggler-icon"></span>

        </button>




        <div 
          className="collapse navbar-collapse" 
          id="navbarSupportedContent"
        >



          <ul className="navbar-nav me-auto mb-2 mb-lg-0">


            <li className="nav-item">

              <NavLink 
                className="nav-link"
                to="/"
              >
                Home
              </NavLink>

            </li>



            <li className="nav-item">

              <NavLink 
                className="nav-link"
                to="/about"
              >
                About
              </NavLink>

            </li>




            <li className="nav-item">

              <NavLink 
                className="nav-link"
                to="/login"
              >
                Login
              </NavLink>

            </li>




            <li className="nav-item">

              <NavLink 
                className="nav-link"
                to="/register"
              >
                Register
              </NavLink>

            </li>



          </ul>




          <form 
            className="d-flex"
            onSubmit={handleSubmit}
          >


            <input

              className="form-control me-2"

              type="search"

              placeholder="Search recipes..."

              value={search}

              onChange={(e)=>setSearch(e.target.value)}

            />



            <button 
              className="btn btn-outline-primary"
              type="submit"
            >
              Search
            </button>


          </form>



        </div>


      </div>


    </nav>

  )
}