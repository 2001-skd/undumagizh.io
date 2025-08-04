import "../css/body.css";
import "../../src/index.css";
import ResCard from "./ResCard";
import restaurants from "../utils/mockData";
import { useState, useEffect, use } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useBody from "../utils/useBody";

const Body = () => {
  const {
    setFilteredRecipe,
    setAllRecipe,
    allRecipe,
    filteredRecipe,
    loading,
    setLoading,
    error,
    setError,
    searchText,
    setSearchText,
    handleChange,
    handleSearch,
  } = useBody();

  if (loading) {
    return <Shimmer />;
  }
  if (error) {
    return <h1>{error}</h1>;
  }
  return (
    <div className="restaurant_container">
      <div className="filters">
        <div className="search_box">
          <input
            type="text"
            placeholder="Search Restaurants..."
            value={searchText}
            onChange={handleChange}
          />
          <button onClick={handleSearch}>Search</button>
        </div>
      </div>

      <div className="res_card_container">
        {filteredRecipe.length === 0 ? (
          <h1>Item Not Found</h1>
        ) : (
          filteredRecipe.map((value, index) => (
            <Link to={`/recipe/${value.id}`}>
              <ResCard
                key={value.id}
                name={value.name}
                img={value.image}
                cuisine={value.cuisine}
                rating={value.rating}
                prepTimeMinutes={value.prepTimeMinutes}
                difficulty={value.difficulty}
              />
            </Link>
          ))
        )}
      </div>
    </div>
  );
};

export default Body;
