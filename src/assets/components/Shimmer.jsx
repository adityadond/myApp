import { shimmer_card_unit } from "../../../constant";

// Shimmer card to display with animation
// const CardShimmer = () => {
//   return (
//     <div className="shimmer-card">
//       <div className="shimmer-img stroke animate"></div>
//       <div className="shimmer-title stroke animate"></div>
//       <div className="shimmer-tags stroke animate "></div>
//       <div className="shimmer-details stroke animate "></div>
//     </div>
//   );
// };

const Shimmer = () => {
  return (
    <div className="restaurant-list">
      {Array(shimmer_card_unit)
        .fill("")
        .map((element, index) => {
          return <div className="shimmer-card" key={index}></div>;
        })}
    </div>
  );
};
export default Shimmer;
