import { IMG_CDN_URL } from "../../constants";



const Restrauntcard = ({restaurant}) => {



    const { name,
  cuisines,
  cloudinaryImageId,
  lastMileTravelString,}=restaurant
  return (
    <div className="card">
      <img src={IMG_CDN_URL + cloudinaryImageId} />
      <h2>{name}</h2>
      <h3>{cuisines.join(", ")}</h3>
      <h4>{lastMileTravelString} minutes</h4>
    </div>
  );
};

export default Restrauntcard;