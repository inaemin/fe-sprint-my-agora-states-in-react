import React, { useEffect, useState } from "react";
import Form from "./Components/Form";
import Discussions from "./Components/Discussions";
import "./style.css";

const App = () => {
  const [data, setData] = useState();
  const [notice, setNotice] = useState();
  const [normal, setNormal] = useState();

  // Function to collect data
  const getApiData = async () => {
    const response = await fetch("http://localhost:4000/discussions").then((res) => res.json());
    setData(response);
    setNotice(response.filter((element) => element.notice));
    setNormal(response.filter((element) => !element.notice));
  };

  useEffect(() => {
    getApiData();
  }, []);

  // 출처: https://contactmentor.com/fetch-in-reactjs-example/

  const handleData = (event) => {
    event.preventDefault();

    const newDiscussion = {
      id: data.length + 1,
      createdAt: new Date().toISOString(),
      title: event.target[1].value,
      url: "",
      author: event.target[0].value,
      text: event.target[2].value,
      answer: null,
      avatarUrl: `https://picsum.photos/seed/${event.target[0].value}/200/200`,
      notice: event.target[3].checked,
    };

    // submit form 내용 초기화하기
    event.target[0].value = "";
    event.target[1].value = "";
    event.target[2].value = "";
    event.target[3].checked = false;

    if (newDiscussion.notice) {
      setNotice([newDiscussion, ...notice]);
    } else {
      setNormal([newDiscussion, ...normal]);
    }
    // TODO: POST로 요청보내기
  };

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
        <Form onClick={handleData} />
        {data && <Discussions notice={notice} normal={normal} />}
      </main>
    </div>
  );
};

export default App;
