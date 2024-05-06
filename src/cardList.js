import "./card.css";
import { Star } from "lucide-react";

const CardList = ({ data }) => {
  return (
    <div className="card-holder">
      {data.map((item) => (
        <div key={item.id} className="card">
          <div className="image-holder">
            {item.popular && <span className="popular">Popular </span>}
            <img src={item.image} alt="product_image" />
          </div>
          <div className="product-info">
            <div className="top">
              <h3 className="name">{item.name}</h3>
              <span className="price">{item.price}</span>
            </div>
            <div className="bottom">
              <p className="rate">
                {item.rating > 0 ? (
                  <Star stroke="gold" size={15} fill="gold" />
                ) : (
                  <Star stroke="#565B60" size={15} />
                )}{" "}
                {item.rating > 0 ? (
                  parseFloat(item.rating).toFixed(1)
                ) : (
                  <span className="no-rate">No ratings</span>
                )}
              </p>
              <p className="votes">
                {item.votes ? `(${item.votes} votes)` : ""}
              </p>
              <p className="available">
                {!item.available && <span className="sold">Sold out</span>}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CardList;
