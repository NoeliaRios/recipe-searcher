import "./style.scss";

function Recipe({
  title,
  calories,
  image,
  ingredients,
  time,
  mealType,
  foodId,
}) {
  return (
    <div className="result-body">
      <div className="img-box">
        <img src={image} alt="" />
      </div>
      <h2>{title}</h2>
      <div className="sub-box">
        <span className="cal-span">
          {calories.toLocaleString(undefined, { maximumFractionDigits: 2 })}{" "}
          Kcal
        </span>
        <h5>{mealType}</h5>
      </div>
      <ul>
        {ingredients.map((ingredient, key) => (
          <li key={key}>{ingredient.text}</li>
        ))}
      </ul>
    </div>
  );
}

export default Recipe;
