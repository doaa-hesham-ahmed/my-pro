import React from "react";
import { useLocation } from "react-router-dom";


export default function About() {

  const { state: recipe } = useLocation();


  if (!recipe) {
    return (
      <h2 className="text-center mt-5">
        No Recipe Selected
      </h2>
    );
  }


  return (

    <div className="container mt-5">

      <div className="row align-items-center shadow p-4 rounded ">


        
        <div className="col-md-4">

          <img src={recipe.image_url} alt={recipe.title}  className="img-fluid rounded"
            style={{
              height: "400px",
              width: "100%",
              objectFit: "cover"
            }}
          />

        </div>

        <div className="col-md-4">
          <h1 className="mb-3">
            {recipe.title}
          </h1>
          <h5 className="text-muted mb-4">
            Publisher: {recipe.publisher}
          </h5>
          <p>
            <strong>Recipe ID:</strong> {recipe.id}
          </p>
          <p>
            This recipe is provided by {recipe.publisher}.
            You can view the full cooking instructions from the original source.
          </p>

          <a href={recipe.source_url} target="_blank" className="btn btn-success">
            Full Recipe
          </a>
        </div>
      </div>
    </div>

  );
}