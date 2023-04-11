import { RestaurantCard } from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { filterData } from "./utils/helper";
import useOnline from "./Hooks/useOnline";
import { useContext } from "react";
import UserContext from "./utils/UserContext";

const Body = () => {
  // useState: To create a state variable, searchText is local state variable
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const { user, setUser } = useContext(UserContext);

  async function getRestaurants() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.1702401&lng=72.83106070000001&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    setAllRestaurants(json?.data?.cards[2]?.data?.data?.cards);
    setFilteredRestaurants(json?.data?.cards[2]?.data?.data?.cards);
  }

  useEffect(() => {
    getRestaurants();
  }, []);

  if (!allRestaurants) return null;

  // if(filteredRestaurants?.length===0)
  // return<h1>No Restaurant to match your filter!</h1>
  const isOnline = useOnline();
  if (!isOnline) {
    return <h1>Offline, please check your internet connection</h1>;
  }
  return filteredRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <>
      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="Search a restaurant you want..."
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        ></input>
        <button
          className="search-btn"
          onClick={() => {
            const data = filterData(searchText, allRestaurants);
            setFilteredRestaurants(data);
          }}
        >
          Search
        </button>
        <input
          value={user.user}
          onChange={e =>
            setUser({ name: e.target.value, email: "add@gmail.com" })
          }
        ></input>
      </div>
      <div className="restaurant-list">
        {filteredRestaurants.map((restaurant) => {
          return (
            <Link
              to={"/restaurant/" + restaurant.data.id}
              key={restaurant.data.id}
            >
              {" "}
              <RestaurantCard key={restaurant.data.id} {...restaurant.data} />
            </Link>
          );
        })}
      </div>
    </>
  );
};

export default Body;
