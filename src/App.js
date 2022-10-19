import React, { useEffect, useState } from "react";
import Form from "./Components/Form";
import Discussions from "./Components/Discussions";
import "./style.css";

const App = () => {
  const [data, setData] = useState();

  // Function to collect data
  const getApiData = async () => {
    const response = await fetch("http://localhost:4000/discussions").then((res) => res.json());
    setData(response);
  };

  useEffect(() => {
    getApiData();
  }, []);

  // 출처: https://contactmentor.com/fetch-in-reactjs-example/

  const handleLandscape = () => {
    const main = document.querySelector("main");
    if (window.innerWidth > 1000) {
      main.style.flexDirection = "row";
    } else {
      main.style.flexDirection = "column";
    }
  };

  useEffect(() => {
    window.addEventListener("resize", handleLandscape);
    return () => {
      window.removeEventListener("resize", handleLandscape);
    };
  }, []);

  return (
    <div className="App">
      <h1>My Agora States</h1>
      <main style={{ flexDirection: window.innerWidth > 1000 ? "row" : "column" }}>
        <Form />
        {data && <Discussions data={data} />}
      </main>
    </div>
  );
};

export default App;
