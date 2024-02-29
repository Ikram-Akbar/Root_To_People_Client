import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const SingleDonationCard = ({ item }) => {
  const { id, tags, title, title_color, price, card_img } = item;
  return (
    <div className="card bg-base-100 shadow-xl">
      <figure>
        <img
        className="rounded"
          src={card_img}
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title " style={{ color: title_color }}>
          {title}
        </h2>

        <div className="card-actions">
          {tags.map((tag, index) => (
            <div
              key={index}
              className="badge badge-outline"
              style={{
                backgroundColor: tag.color,
                color: "white",
                padding: "5px",
              }}
            >
              {tag?.name}
            </div>
          ))}
        </div>
        <div> 
       
        <button className=" mb-2 font-bold w-full" >
          $ {price}
        </button>
        <Link to={`/donation/${id}`}><button className="btn btn-outline w-full " style={{ color: title_color }}>
          Donate Now
        </button></Link>
        </div>
      </div>
    </div>
  );
};

SingleDonationCard.propTypes = {
  item: PropTypes.object.isRequired,
};

export default SingleDonationCard;
