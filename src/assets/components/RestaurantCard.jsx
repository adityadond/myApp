import { IMG_URL } from "../../../constant";
import UserContext from "./utils/UserContext";
import { useContext } from "react";

export const RestaurantCard = ({
  name,
  cuisines,
  cloudinaryImageId,
  lastMileTravelString,
  area,
}) => {
  const { user } = useContext(UserContext);
 console.log(user,"card")
  return (
    <div className="card">
      <img src={IMG_URL + cloudinaryImageId} className="restImg" />
      <h2>{name}</h2>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{area}</h4>
      <h4>{lastMileTravelString}</h4>
      <h5>{user.user}</h5>
    </div>
  );
};
