import React from 'react'

import { Link } from "react-router-dom";

export default function Navbar() {

  //const user = localStorage.getItem("user")

  return (

    <div>

      {

       

          <nav className="navbar navbar-expand-lg navbar-dark bg-warning">

            <div className="container-fluid">

              <Link className="navbar-brand" to="/">ADMIN PAGE</Link>

              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">

                <span className="navbar-toggler-icon"></span>

              </button>

              <Link className="btn btn-outline-light " to="/adduser">ADD USER</Link>




            </div>

          </nav>

       

      }

      {/* {

        user == "normal" && (

          <nav className="navbar navbar-expand-lg navbar-dark bg-warning">

            <div className="container-fluid">

              <Link className="navbar-brand" to="/">View All Page</Link>

              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">

                <span className="navbar-toggler-icon"></span>

              </button>

            </div></nav>




        )

      } */}

    </div>

  )

}