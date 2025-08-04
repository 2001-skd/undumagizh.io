import { useEffect, useState } from "react";
import { API_URL } from "./constants";

const useBody = () => {
  const [allRecipe, setAllRecipe] = useState([]);
  const [filteredRecipe, setFilteredRecipe] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    try {
      const res = await fetch(`${API_URL}`);
      const data = await res.json();
      setAllRecipe(data?.recipes);
      setFilteredRecipe(data?.recipes);
      setLoading(false);
    } catch (e) {
      setError("failed to Fetch Recipes");
    } finally {
      setError("");
      setLoading(false);
    }
  }

  useEffect(() => {
    if (searchText.trim() === "") {
      setFilteredRecipe(allRecipe);
    }
  }, [searchText]);

  // handle search box change
  function handleChange(e) {
    setSearchText(e.target.value);
  }

  function handleSearch() {
    if (searchText && searchText.length > 0) {
      const searchRes = allRecipe.filter((value) =>
        value.name.toLocaleLowerCase().includes(searchText.toLocaleLowerCase())
      );

      if (searchRes && searchRes.length > 0) {
        console.log(searchRes);
        setFilteredRecipe(searchRes);
      } else {
        alert("No Item Found");
      }
    } else {
      alert("Search Properly...");
    }
  }

  return {
    setFilteredRecipe,
    setAllRecipe,
    allRecipe,
    filteredRecipe,
    loading,
    setLoading,
    error,
    setError,
    handleSearch,
    handleChange,
  };
};

export default useBody;
