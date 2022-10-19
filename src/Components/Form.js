import React, { useEffect } from "react";
import "../style.css";

function Form() {

  /* 새로운 질문 접수 */
  //   const handleButtonClick = (event) => {
  //     const newDiscussion = {
  //       id: data.length + 1,
  //       createdAt: new Date().toISOString(),
  //       title: event.target[1].value,
  //       url: "",
  //       author: event.target[0].value,
  //       text: event.target[2].value,
  //       answer: null,
  //       avatarUrl: `https://picsum.photos/seed/${event.target[0].value}/200/200`,
  //       notice: event.target[3].checked,
  //     };

  //     // submit form 내용 초기화하기
  //     event.target[0].value = "";
  //     event.target[1].value = "";
  //     event.target[2].value = "";
  //     event.target[3].checked = false;

  //     data.unshift(newDiscussion); // 후에 POST로 바꿀 것
  //     if (newDiscussion.notice) {
  //       setNoti([newDiscussion, ...notice]);
  //     } else {
  //       setNormal([newDiscussion, ...normal]);
  //     }
  //   };

  const handleHeight = () => {
    const textarea = document.querySelector("textarea");
    if (window.innerWidth > 1000) {
      textarea.style["min-height"] = "500px";
      textarea.style.height = "1px";
      textarea.style.height = `${15 + textarea.scrollHeight}px`;
    } else {
      textarea.style["min-height"] = "auto";
      textarea.style.height = "1px";
      textarea.style.height = `${15 + textarea.scrollHeight}px`;
    }
  };

  useEffect(() => {
    window.addEventListener("resize", handleHeight);
    return () => {
      window.removeEventListener("resize", handleHeight);
    };
  }, []);

  return (
    <section className="form__container">
      <form action="" method="get" className="form">
        <div className="form__input--wrapper">
          <div>Start a new discussion</div>
          <div className="form__input--name">
            <input type="text" name="name" id="name" placeholder="Name" required />
          </div>
          <div className="form__input--title">
            <input type="text" name="title" id="title" placeholder="Title" required />
          </div>
          <div className="form__textbox">
            <textarea
              id="story"
              name="story"
              placeholder="질문을 작성하세요"
              required
              style={{ minHeight: window.innerWidth > 1000 ? "500px" : "auto" }}
              onKeyDown={handleHeight}
              onKeyUp={handleHeight}
            ></textarea>
          </div>
          <div className="form__input--notice">
            <label htmlFor="notice">공지로 등록할까요? </label>
            <input type="checkbox" name="notice" id="notice" value="notice" />
          </div>
        </div>
        <div className="form__submit">
          <input type="submit" value="Start discussion" />
        </div>
      </form>
    </section>
  );
}

export default Form;
