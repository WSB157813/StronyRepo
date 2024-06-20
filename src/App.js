import { Searchbar } from "./components/Searchbar.js";
import Header from "./components/Header.js";
import React, { useState } from 'react';
import { RecipesList } from "./components/RecipesList.js";

function App() {
  const [recipes, setRecipes] = useState([]);
  console.log(recipes);
  return (
    <div className="App">
      <Header />
      <Searchbar setRecipes={setRecipes} />
      <RecipesList recipes={recipes} />
    </div>
  );
}

export default App;