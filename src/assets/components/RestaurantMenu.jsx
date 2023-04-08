import { useParams } from "react-router-dom"; // import useParams for read id

const RestaurantMenu = () => {
  const params = useParams();
  const {id }=params // call useParams and get value of restaurant id using object destructuring
  console.log(id)


return (
    <div className="restaurant-menu">
      <h1>
        Restaurant Details Page {id}
      </h1>
      <p></p>
    </div>
  );
};

export default RestaurantMenu;