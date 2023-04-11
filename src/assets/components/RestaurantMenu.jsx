import { useParams } from "react-router-dom"; // import useParams for read id
import { addItem, removeItem } from "./utils/cartSlice";
import { useDispatch } from "react-redux";

const RestaurantMenu = () => {
  const params = useParams();
  const { id } = params; // call useParams and get value of restaurant id using object destructuring

  const dispatch = useDispatch();
  const handleAddItem = () => {
    dispatch(addItem("grapes"));
  };

  const handleRemoveItem = () => {
    dispatch(removeItem("grapes"));
  };

  return (
    <div className="restaurant-menu">
      <h1>Restaurant Details Page {id}</h1>
      <button onClick={handleAddItem}>Add items</button>
      <button onClick={handleRemoveItem}>Remove items</button>
    </div>
  );
};

export default RestaurantMenu;
