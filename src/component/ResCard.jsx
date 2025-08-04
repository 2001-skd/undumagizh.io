import "../css/body.css";
import "../../src/index.css";

const ResCard = (props) => {
  const { name, cuisine, rating, img, prepTimeMinutes, difficulty } = props;
  return (
    <>
      <span className="label">{difficulty}</span>
      <div className="res_card">
        <div className="res_image">
          <img src={img} alt={name} />
        </div>
        <div className="res_details">
          <h4>
            {name}({cuisine})
          </h4>

          <h6>Preparing Time In Minutes : {prepTimeMinutes}</h6>

          <span>⭐ {rating}</span>
        </div>
      </div>
    </>
  );
};

export default ResCard;
