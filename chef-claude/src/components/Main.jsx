export default function Main() {
  return (
    <main>
      <IngredientsForm />
    </main>
  );
}

function IngredientsForm() {
  return (
    <form className="add_ingredient_form">
      <input
        type="text"
        placeholder="eg. oregano"
        id="ingredient"
        name="ingredient"
        aria-label="Add ingredient"
      ></input>
      <button type="submit">Add Ingredient</button>
    </form>
  );
}
