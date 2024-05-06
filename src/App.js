import "./App.css";
import Cardholder from "./cardHolder";
import { useState, useEffect } from "react";

function App() {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/devchallenges-io/web-project-ideas/main/front-end-projects/data/simple-coffee-listing-data.json"
    )
      .then((response) => response.json())
      .then((data) => {
        setData(data.slice(0, data.length));
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);
  if (loading) {
    return <div>loading...</div>;
  }
  const filterProducts = data.filter((item) => item.available);
  return (
    <div className="app">
      <Cardholder data={data} filterProducts={filterProducts} />
    </div>
  );
}

export default App;
