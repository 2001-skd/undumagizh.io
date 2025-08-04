import React from "react";
import "../css/shimmer.css";

const Shimmer = () => {
  return (
    <div className="shimmer-container">
      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((_, i) => (
        <div className="shimmer-card"></div>
      ))}
    </div>
  );
};

export default Shimmer;
