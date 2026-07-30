import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaSpinner } from "react-icons/fa";
import axios from "axios";
import HomeStyle from "./Home.module.css";

export default function Home({ searchTerm }) {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [loadingMore, setLoadingMore] = useState(false);
  const [visibleCount, setVisibleCount] = useState(8);

  const navigate = useNavigate();

  async function getRecipes(term) {
    try {
      setLoading(true);

      const response = await axios.get(
        `https://forkify-api.jonas.io/api/v2/recipes?search=${
          term || "pizza"
        }`
      );

      setRecipes(response.data.data.recipes);
      setVisibleCount(8);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    getRecipes(searchTerm);
  }, [searchTerm]);

  function handleSeeMore() {
    setLoadingMore(true);

    setTimeout(() => {
      setVisibleCount((prev) => prev + 6);
      setLoadingMore(false);
    }, 1000);
  }

  if (loading) {
    return (
      <div className="text-center mt-5">
        <FaSpinner className={HomeStyle.spinner} />
      </div>
    );
  }

  return (
    <div className="container mt-5">
      <div className="row g-4">
        {recipes.slice(0, visibleCount).map((recipe) => (
          <div
            className="col-12 col-sm-6 col-md-4 col-lg-3"
            key={recipe.id}
          >
            <div className={`card h-100 shadow ${HomeStyle.recipeCard}`}>
              <img
                src={recipe.image_url}
                alt={recipe.title}
                className="card-img-top"
                style={{
                  height: "220px",
                  objectFit: "cover",
                }}
              />

              <div className="card-body d-flex flex-column">
                <h5 className="card-title">{recipe.title}</h5>

                <p className="card-text text-muted">
                  {recipe.publisher}
                </p>

                <button
                  className="btn btn-success mt-auto"
                  onClick={() =>
                    navigate("/about", { state: recipe })
                  }
                >
                  View Recipe
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {visibleCount < recipes.length && (
        <div className="text-center mt-5">
          <button
            className="btn btn-outline-success"
            onClick={handleSeeMore}
            disabled={loadingMore}
          >
            {loadingMore ? (
              <>
                <FaSpinner className={HomeStyle.spinnerBtn} />
                {" "}Loading...
              </>
            ) : (
              "See More"
            )}
          </button>
        </div>
      )}
    </div>
  );
}