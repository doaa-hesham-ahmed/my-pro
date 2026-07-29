import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import LoginStyle from "./Login.module.css";

export default function Login() {

  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState("");



  function handleLogin(e) {

    e.preventDefault();


    const isRegistered = localStorage.getItem("isRegistered");


    if (!isRegistered) {

      alert("You must register first 😊");

      navigate("/register");

      return;

    }



    const user = JSON.parse(
      localStorage.getItem("user")
    );



    if (
      email === user.email &&
      password === user.password
    ) {


      localStorage.setItem(
        "isLoggedIn",
        true
      );


      alert("Login Successfully 🎉");


      navigate("/");


    } else {

      setError("Invalid email or password");

    }

  }



  return (

    <div className="container mt-5">


      <div className="row justify-content-center">


        <div className="col-md-6">



          <div className={`card shadow ${LoginStyle.loginCard}`}>


            <div className="card-body">


              <h2 className="text-center mb-4">
                Login
              </h2>



              <form onSubmit={handleLogin}>


                {
                  error && 
                  <p className="text-danger text-center">
                    {error}
                  </p>
                }



                <div className="mb-3">


                  <label>
                    Email
                  </label>


                  <input

                    type="email"

                    className="form-control"

                    placeholder="Enter your email"

                    value={email}

                    onChange={(e)=>setEmail(e.target.value)}

                    required

                  />


                </div>





                <div className="mb-3">


                  <label>
                    Password
                  </label>


                  <input

                    type="password"

                    className="form-control"

                    placeholder="Enter your password"

                    value={password}

                    onChange={(e)=>setPassword(e.target.value)}

                    required

                  />


                </div>





                <div className="form-check mb-3">


                  <input

                    type="checkbox"

                    className="form-check-input"

                    id="remember"

                  />


                  <label 
                    className="form-check-label"
                    htmlFor="remember"
                  >
                    Remember me
                  </label>


                </div>





                <button
                  className="btn btn-success w-100"
                  type="submit"
                >
                  Login
                </button>



              </form>



            </div>


          </div>


        </div>


      </div>


    </div>

  );

}