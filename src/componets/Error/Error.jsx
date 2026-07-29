import React from 'react'
import { Link } from "react-router-dom";

export default function Error() {
  return (
    <div className="container text-center mt-5">

      <h1 className="display-1">
        404
      </h1>

      <h2>
        Page Not Found
      </h2>

      <p>
        The page you are looking for does not exist.
      </p>

      <Link
        to="/"
        className="btn btn-primary"
      >
        Go Home
      </Link>

    </div>
  )
}