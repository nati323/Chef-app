import Markdown from "react-markdown";

function ClaudeRecipe(props) {
  return (
    <section>
      <h2 className="recipeH2">Chef Claude Recommends:</h2>
      <article className="suggested-recipe-container" aria-live="polite">
        <Markdown>{props.data}</Markdown>
      </article>
    </section>
  );
}
export default ClaudeRecipe;
