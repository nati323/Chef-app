import { useEffect, useRef, useState } from "react";
import ClaudeRecipe from "./ClaudeRecipe.jsx";
import IngredientsList from "./IngredientsList.jsx";
import { getRecipeFromMistral } from "./ai.js";

function Cmain() {
  const [recipe, setRecipe] = useState("");
  const recipeSaction = useRef(null);
  const [recipeShown, setRecipeShown] = useState(false);
  const [ingredients, setIngredients] = useState([]);
  const Lingredients = ingredients.map((ingredient) => {
    return <li key={ingredient}>{ingredient}</li>;
  });
  useEffect(() => {
    if (recipeSaction.current != null && recipe != "") {
      recipeSaction.current.scrollIntoView({ behavior: "smooth" });
    }
  }),
    [recipe];
  function ingredientSubmitted(formData) {
    const newIngredient = formData.get("ingredient");
    setIngredients((prevIngredients) => [...prevIngredients, newIngredient]);
  }
  async function handleGetClick() {
    const recipeMarkDown = await getRecipeFromMistral(ingredients);
    setRecipe(recipeMarkDown);
    setRecipeShown((prevShown) => !prevShown);
  }

  return (
    <main>
      <form action={ingredientSubmitted} className="main_form">
        <input
          type="text"
          placeholder="e.g orageno"
          aria-label="Add ingredient"
          name="ingredient"
        />
        <button>+ Add ingredients</button>
      </form>
      {ingredients.length > 0 && (
        <IngredientsList
          data={Lingredients}
          ref={recipeSaction}
          func={handleGetClick}
          isShown={recipeShown}
        />
      )}
      {recipeShown && <ClaudeRecipe data={recipe} />}
    </main>
  );
}
export default Cmain;

// Api-key: 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
