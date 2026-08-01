import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import AboutStyle from "./About.module.css";


export default function About() {
  const { state: recipe } = useLocation();
  const navigate = useNavigate();

  function handleAddRecipe() {

    const isLoggedIn = localStorage.getItem("isLoggedIn");


    if (!isLoggedIn) {
      alert("You must login first");
      navigate("/login");

    }
    else {
      alert("Recipe Added Successfully");
    }

  }

  if (!recipe) {

    return (<h2 className="text-center mt-5"> No Recipe Selected  </h2>

    );

  }

  return (

    <div className="container mt-5">


      <div className={`row align-items-center g-5 shadow p-4 rounded ${AboutStyle.recipeDetails}`}>



        <div className="col-md-4">

          <img src={recipe.image_url} alt={recipe.title} className="img-fluid rounded"
            style={{

              height: "400px",

              width: "100%",

              objectFit: "cover"

            }} />


        </div>

        <div className="col-md-5"><h1 className="mb-3"> {recipe.title}</h1>

          <h5 className="mb-4"> Publisher: {recipe.publisher}</h5>
          <p> <strong>Recipe ID:</strong> {recipe.id}</p>
          <p>This recipe is provided by {recipe.publisher}. You can view the full cooking instructions from the original source.</p>

          <button className="btn btn-outline-success me-3" onClick={handleAddRecipe}> Add Recipe </button>

          <button className="btn btn-outline-primary" onClick={() => navigate("/contact")}> Contact Us</button>

        </div>
      </div>
    </div>
  );
}
