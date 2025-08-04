import { useEffect, useState } from "react";
import { API_URL } from "./constants";

const useRecipeDetail = (id) => {
  const [recipeInfo, setRecipeInfo] = useState(null);
  useEffect(() => {
    fetchRecipe();
  }, [id]);

  async function fetchRecipe() {
    const res = await fetch(`${API_URL}/${id}`);
    const data = await res.json();
    setRecipeInfo(data);
  }

  return recipeInfo;
};

export default useRecipeDetail;
