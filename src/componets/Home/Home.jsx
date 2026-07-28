import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import HomeStyle from "./Home.module.css";


export default function Home({searchTerm}) {


  const [recipes,setRecipes] = useState([]);

  const navigate = useNavigate();

  async function getRecipes(term){


    try{


      let res = await fetch(

        `https://forkify-api.jonas.io/api/v2/recipes?search=${term}`

      );


      res = await res.json();


      setRecipes(res.data.recipes);


    }

    catch(error){

      console.log(error);

    }


  }




  useEffect(()=>{

    getRecipes(searchTerm);

  },[searchTerm]);





  return (

    <div className="container mt-5">


      <div className="row g-4">



        {recipes.map((recipe)=>(


          <div 
            className="col-md-3"
            key={recipe.id}
          >


            <div className="card h-100 shadow">



              <img

                src={recipe.image_url}

                className="card-img-top"

                alt={recipe.title}

                style={{
                  height:"200px",
                  objectFit:"cover"
                }}

              />



              <div className="card-body">


                <h5 className="card-title">

                  {recipe.title}

                </h5>



                <p className="card-text text-muted">

                  {recipe.publisher}

                </p>



                <button className="btn btn-primary"  onClick={() => navigate("/about", {state: recipe})}>

                  View Recipe

                </button>


              </div>



            </div>


          </div>



        ))}



      </div>



    </div>

  )

}