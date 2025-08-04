import "../css/recipe.css";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import useRecipeDetail from "../utils/useRecipeDetail";
import Accordion from "./Accordion";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addBookMark } from "../utils/store/bookMarkSlice";
import { deleteBookMark } from "../utils/store/bookMarkSlice";

const RecipeDetail = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const { id } = useParams();
  const recipeInfo = useRecipeDetail(id);
  const dispatch = useDispatch();
  const [booked, setBooked] = useState(false);

  function handleAddBookMark(item) {
    dispatch(addBookMark(item));
    setBooked(true);
  }

  function handleRemoveBookMark(id) {
    dispatch(deleteBookMark({ id }));
    setBooked(false);
  }

  return (
    <>
      {recipeInfo === null ? (
        <Shimmer />
      ) : (
        <div className="recipe-container">
          <h1 className="recipe-title">{recipeInfo?.name}</h1>
          <img
            src={recipeInfo?.image}
            alt={recipeInfo?.name}
            className="recipe-image"
          />
          {booked ? (
            <button
              className="bookmark_btn added"
              onClick={() => {
                handleRemoveBookMark(recipeInfo?.id);
              }}
            >
              Added To Bookmark!
            </button>
          ) : (
            <button
              className="bookmark_btn"
              onClick={() => {
                handleAddBookMark(recipeInfo);
              }}
            >
              Add To Bookmark
            </button>
          )}

          <div className="recipe-info">
            <p>
              <strong>🍽 Cuisine:</strong> {recipeInfo?.cuisine}
            </p>
            <p>
              <strong>⚙️ Difficulty:</strong> {recipeInfo?.difficulty}
            </p>
            <p>
              <strong>🔥 Calories per Serving:</strong>{" "}
              {recipeInfo?.caloriesPerServing}
            </p>
            <p>
              <strong>⏱ Prep Time:</strong> {recipeInfo?.prepTimeMinutes} mins
            </p>
            <p>
              <strong>👨‍🍳 Cook Time:</strong> {recipeInfo?.cookTimeMinutes} mins
            </p>
            <p>
              <strong>👥 Servings:</strong> {recipeInfo?.servings}
            </p>
            <p>
              <strong>⭐ Rating:</strong> {recipeInfo?.rating} (
              {recipeInfo?.reviewCount} reviews)
            </p>
            <p>
              <strong>🏷 Tags:</strong> {recipeInfo?.tags?.join(",")}
            </p>
            <p>
              <strong>🍽 Meal Type:</strong> {recipeInfo?.mealType.join(",")}
            </p>
          </div>

          <div className="recipe-section">
            <Accordion
              title={"Ingredients"}
              isActive={activeIndex === 0}
              onShow={() => {
                setActiveIndex(activeIndex === 0 ? null : 0);
              }}
            >
              <ul>
                {recipeInfo?.ingredients?.map((value, index) => (
                  <li key={index}>✔ {value}</li>
                ))}
              </ul>
            </Accordion>
          </div>

          <div className="recipe-section">
            <Accordion
              title={"Instructions"}
              isActive={activeIndex === 1}
              onShow={() => {
                setActiveIndex(activeIndex === 1 ? null : 1);
              }}
            >
              <ol>
                {recipeInfo?.instructions?.map((value, index) => (
                  <li key={index}>✔ {value}</li>
                ))}
              </ol>
            </Accordion>
          </div>
        </div>
      )}
    </>
  );
};

export default RecipeDetail;
