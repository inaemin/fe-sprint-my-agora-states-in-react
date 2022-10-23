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
      id: data[0].id + 1, // 임시 id. 그래도 unique한 key여야 error가 안 남.
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

    newDiscussion.notice
      ? setNotice([newDiscussion, ...notice])
      : setNormal([newDiscussion, ...normal]);

    // TODO: POST로 요청보내기
    fetch("http://localhost:4000/discussions", {
      method: "post",
      body: JSON.stringify(newDiscussion),
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => res.json());
    // 일단 새로고침 하면 저장된 데이터가 날라오는거 보면 POST가 동작하지만
    // 서버가 재시작하면 저장했던 내용은 사라짐
  };

  const handleLandscape = () => {
    const main = document.querySelector("main");
    if (window.innerWidth > 1000) {
      main.style.flexDirection = "row";
      main.style.alignItems = "flex-start";
    } else {
      main.style.flexDirection = "column";
      main.style.alignItems = "center";
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
      <main
        style={{
          flexDirection: window.innerWidth > 1000 ? "row" : "column",
          alignItems: window.innerWidth > 1000 ? "flex-start" : "column",
        }}
      >
        <Form onClick={handleData} />
        {data && <Discussions notice={notice} normal={normal} />}
      </main>
    </div>
  );
};

export default App;
