import CardList from "./cardList";
import "./cardHolder.css";
import { useState } from "react";
const Cardholder = ({ data, filterProducts }) => {
  const [filterdData, setfilterdData] = useState(data);
  const handelClick = (Value) => {
    let buttonOne = document.getElementById("button-one");
    let buttonTwo = document.getElementById("button-two");
    setfilterdData(Value);
    if (Value === data) {
      buttonOne.classList.add("active");
      buttonTwo.classList.remove("active");
    } else {
      buttonTwo.classList.add("active");
      buttonOne.classList.remove("active");
    }
  };
  return (
    <div className="continer">
      <div className="heading">
        <h1>Our Collection</h1>
        <p>
          Introducing our Coffee Collection, a selection of unique coffees from
          different roast types and origins, expertly roasted in small batches
          and shipped fresh weekly.
        </p>
        <button
          className="active"
          id="button-one"
          onClick={() => {
            handelClick(data);
          }}
        >
          All Products
        </button>
        <button
          id="button-two"
          onClick={() => {
            handelClick(filterProducts);
          }}
        >
          Available Now
        </button>
      </div>
      <CardList data={filterdData} />
    </div>
  );
};

export default Cardholder;
