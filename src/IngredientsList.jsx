function IngredientsList(props) {
  return (
    <section className="section">
      <h2>Ingredients on hand: </h2>
      <ul className="ingredients-list">{props.data}</ul>
      {props.data.length > 3 && !props.isShown && (
        <div className="get-recipe-container">
          <div ref={props.ref}>
            <h3>Ready for a recipe?</h3>
            <p>generate a recipe from your list of ingredients.</p>
          </div>
          <button onClick={props.func}>
            {props.isShown ? "Close recipe" : "Get a recipe"}
          </button>
        </div>
      )}
    </section>
  );
}
export default IngredientsList;
