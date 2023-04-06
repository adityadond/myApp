import { IMG_URL } from "../../../constant";

export const RestaurantCard = ({
  name,
  cuisines,
  cloudinaryImageId,
  lastMileTravelString,
  area,
}) => {
  return (
    <div className="card">
      <img src={IMG_URL + cloudinaryImageId} className="restImg" />
      <h2>{name}</h2>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{area}</h4>
      <h4>{lastMileTravelString}</h4>
    </div>
  );
};
