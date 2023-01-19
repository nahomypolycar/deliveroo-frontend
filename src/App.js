import "./App.css";
import axios from "axios";
import { useEffect, useState } from "react";
import logodeliveroo from "/Users/nahomy/Formation/REACT/JOUR6/Projet-Deliveroo/deliveroo-frontend/deliveroo-app/src/Assets/images/logo-teal.svg";

function App() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    console.log("mon composotant est render");
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:3200/");
        console.log(response.data.restaurant.name);
        setData(response.data.restaurant.name);
        setIsLoading(false);
      } catch (error) {
        console.log(error.response); // contrairement au error.message d'express
      }
    };
    fetchData();
  }, []);

  return isLoading ? (
    <span>En cours de chargement...</span>
  ) : (
    <div>
      <h1>
        {data.restaurant.map((name, index) => {
          return <li key={index}>{restaurant.restaurant.name}</li>;
        })}
      </h1>
    </div>
  );
}

export default App;

// <div>
//   <header className="container">
//     <img src={logodeliveroo} alt="logo" />
//   </header>
// </div>
