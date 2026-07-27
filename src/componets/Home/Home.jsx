import { useEffect, useState } from "react";
import HomeStyle from "./Home.module.css";
import { useNavigate } from "react-router-dom";

export default function Home() {

  const [recipes, setRecipes] = useState([]);

  async function getRecipes(searchTerm = "pizza") {
    try {
      let res = await fetch(
        `https://forkify-api.jonas.io/api/v2/recipes?search=${searchTerm}`
      );

      res = await res.json();

      setRecipes(res.data.recipes);

    } catch (error) {
      console.log(error);
    }
  }


  useEffect(() => {
    getRecipes();
  }, []);


  return (
    <div className="container mt-5">

      <div className="row g-4">

        {recipes.map((recipe) => (

          <div className="col-md-3" key={recipe.id}>

            <div className="card h-100 shadow">

              <img
                src={recipe.image_url}
                className="card-img-top"
                alt={recipe.title}
                style={{height:"200px", objectFit:"cover"}}
              />


              <div className="card-body">

                <h5 className="card-title">
                  {recipe.title}
                </h5>

                <p className="card-text text-muted">
                  {recipe.publisher}
                </p>

                <button className="btn btn-primary" >
                  View Recipe
                </button>

              </div>

            </div>

          </div>

        ))}

      </div>

    </div>
  );
}