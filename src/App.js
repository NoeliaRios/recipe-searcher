import { useEffect, useState } from "react";
import "./App.css";
import Recipe from "./components/Recipe";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

function App() {
  const APP_ID = "9319ee86";
  const APP_KEY = "d8fa3f2292fffc066603ad914dfb3a3b";

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("pizza");

  useEffect(() => {
    getRecipes();
  }, [query]); //it only reloads when query exists, meaning once the form is submitted

  const getRecipes = async () => {
    const response = await fetch(
      `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
    );
    const data = await response.json();
    setRecipes(data.hits);
    console.log(data.hits);
    // fetch(
    //   `https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`
    // ).then(response => {
    //   response.json()
    // });
  };

  const updateSearch = (e) => {
    setSearch(e.target.value);
    console.log(search);
  };

  const getSearch = (e) => {
    e.preventDefault();
    setQuery(search);
    setSearch("");
  };

  return (
    <div className="App">
      <h1>Happy Cooking!</h1>
      <div className="search-box">
        <form className="search-form" onSubmit={getSearch}>
          <input
            className="search-bar"
            type="text"
            value={search}
            onChange={updateSearch}
          />
          <button className="search-button" type="submit">
            <FontAwesomeIcon icon={faSearch} />
          </button>
        </form>
      </div>
      <div className="recipe-box">
        {recipes.map((recipe, key) => (
          <Recipe
            key={key}
            title={recipe.recipe.label}
            calories={recipe.recipe.calories}
            image={recipe.recipe.image}
            ingredients={recipe.recipe.ingredients}
            time={recipe.recipe.totalTime}
            mealType={recipe.recipe.mealType}
            foodId={recipe.recipe.ingredients.foodId}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
