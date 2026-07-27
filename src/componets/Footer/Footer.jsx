import React from 'react'
export default function Footer() {
  return (
   <footer className="bg-dark text-white mt-5 py-4">
      <div className="container">

        <div className="row">

          
          <div className="col-md-4">
            <h5>My Website</h5>
            <p>
              Build modern websites using React and Bootstrap.
            </p>
          </div>
          <div className="col-md-4">
            <h5>Quick Links</h5>

            <ul className="list-unstyled">
              <li>
                <a href="/" className="text-white text-decoration-none">
                  Home
                </a>
              </li>

              <li>
                <a href="/about" className="text-white text-decoration-none">
                  About
                </a>
              </li>

              <li>
                <a href="/login" className="text-white text-decoration-none">
                  Login
                </a>
              </li>

              <li>
                <a href="/register" className="text-white text-decoration-none">
                  Register
                </a>
              </li>
            </ul>

          </div>

          <div className="col-md-4">

            <h5>Contact</h5>

            <p>
              Email: example@gmail.com
            </p>

            <p>
              Phone: +20 123 456 789
            </p>

          </div>


        </div>


        <hr />


        <div className="text-center">
          <p className="mb-0">
            © 2026 My Website. All Rights Reserved.
          </p>
        </div>


      </div>
    </footer>


  )
}
