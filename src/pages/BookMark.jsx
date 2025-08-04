import { useSelector, useDispatch } from "react-redux";
import "../css/bookmark.css";
import { deleteBookMark, resetBookMark } from "../utils/store/bookMarkSlice";

const BookMark = () => {
  const bookmarkedItems = useSelector((store) => store.bookmark.items);
  const dispatch = useDispatch();

  function handleRemoveBookMark(id) {
    dispatch(deleteBookMark({ id }));
  }

  function handleReset() {
    dispatch(resetBookMark());
  }

  return (
    <>
      {bookmarkedItems.length === 0 ? (
        <h1>No Items Found !</h1>
      ) : (
        <div className="bookmark_page">
          <div className="bookmark_header">
            <h2>Bookmarked Recipes</h2>
            <button className="reset_btn" onClick={handleReset}>
              Reset All
            </button>
          </div>
          <div className="bookmark_list">
            {bookmarkedItems.map((item) => (
              <div className="bookmark_card" key={item.id}>
                <button
                  className="delete_btn"
                  onClick={() => {
                    handleRemoveBookMark(item.id);
                  }}
                >
                  ×
                </button>
                <img
                  src={item.image}
                  alt={item.name}
                  className="bookmark_img"
                />
                <div className="bookmark_info">
                  <h3>{item.name}</h3>
                  <p>
                    <strong>Cuisine:</strong> {item.cuisine}
                  </p>
                  <p>
                    <strong>Tags:</strong> {item.tags.join(", ")}
                  </p>
                  <p>
                    <strong>Prep:</strong> {item.prepTimeMinutes} mins |{" "}
                    <strong>Cook:</strong> {item.cookTimeMinutes} mins
                  </p>
                  <p>
                    <strong>Rating:</strong> ⭐ {item.rating}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default BookMark;
