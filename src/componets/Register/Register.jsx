import React, { useState } from "react";
import HomeStyle from "./Register.module.css";
export default function Register() {


  const [formData, setFormData] = useState({

    name: "",
    email: "",
    password: "",
    confirmPassword: ""

  });



  const [errors, setErrors] = useState({});



  function handleChange(e) {

    setFormData({

      ...formData,

      [e.target.name]: e.target.value

    });

  }




  function validate() {

    let newErrors = {};



    if (!formData.name.trim()) {

      newErrors.name = "Name is required";

    }



    if (!formData.email) {

      newErrors.email = "Email is required";

    } 
    else if (
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)
    ) {

      newErrors.email = "Invalid email format";

    }




    if (!formData.password) {

      newErrors.password = "Password is required";

    } 
    else if (formData.password.length < 6) {

      newErrors.password = "Password must be at least 6 characters";

    }




    if (!formData.confirmPassword) {

      newErrors.confirmPassword = "Confirm password is required";

    } 
    else if (
      formData.password !== formData.confirmPassword
    ) {

      newErrors.confirmPassword = "Passwords do not match";

    }



    return newErrors;

  }




  function handleSubmit(e) {

    e.preventDefault();



    const validationErrors = validate();



    if (Object.keys(validationErrors).length > 0) {

      setErrors(validationErrors);

      return;

    }



    localStorage.setItem(
      "isRegistered",
      true
    );


    localStorage.setItem(
      "user",
      JSON.stringify(formData)
    );



    alert("Register Successfully 🎉");



    setFormData({

      name:"",
      email:"",
      password:"",
      confirmPassword:""

    });


    setErrors({});


  }





  return (

    <div>

      <div className="container mt-5">

        <div className="row justify-content-center">


          <div className="col-md-6">


            <div className={`card shadow ${HomeStyle["register-card"]}`}>


              <div className="card-body">


                <h2 className="text-center mb-4">
                  Register
                </h2>



                <form onSubmit={handleSubmit}>


                  <div className="mb-3">

                    <label className="form-label">
                      Name
                    </label>

                    <input
                      type="text"
                      name="name"
                      className="form-control"
                      placeholder="Enter your name"
                      value={formData.name}
                      onChange={handleChange}
                    />

                    <small className="text-danger">
                      {errors.name}
                    </small>

                  </div>





                  <div className="mb-3">

                    <label className="form-label">
                      Email
                    </label>

                    <input
                      type="email"
                      name="email"
                      className="form-control"
                      placeholder="Enter your email"
                      value={formData.email}
                      onChange={handleChange}
                    />

                    <small className="text-danger">
                      {errors.email}
                    </small>

                  </div>





                  <div className="mb-3">

                    <label className="form-label">
                      Password
                    </label>

                    <input
                      type="password"
                      name="password"
                      className="form-control"
                      placeholder="Create password"
                      value={formData.password}
                      onChange={handleChange}
                    />

                    <small className="text-danger">
                      {errors.password}
                    </small>

                  </div>





                  <div className="mb-3">

                    <label className="form-label">
                      Confirm Password
                    </label>

                    <input
                      type="password"
                      name="confirmPassword"
                      className="form-control"
                      placeholder="Confirm password"
                      value={formData.confirmPassword}
                      onChange={handleChange}
                    />

                    <small className="text-danger">
                      {errors.confirmPassword}
                    </small>

                  </div>





                  <button 
                    className="btn btn-success w-100"
                    type="submit"
                  >

                    Register

                  </button>



                </form>


              </div>


            </div>


          </div>


        </div>


      </div>


    </div>

  );
}