import React, { useEffect } from "react";
import "../style.css";

function Form({ onClick }) {
  const handleHeight = () => {
    const textarea = document.querySelector("textarea");
    if (window.innerWidth > 1000) {
      textarea.style["min-height"] = "500px";
      textarea.style.height = "1px";
      textarea.style.height = `${15 + textarea.scrollHeight}px`;
    } else {
      textarea.style["min-height"] = "100px";
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
      <form action="" method="get" className="form" onSubmit={onClick}>
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
              style={{ minHeight: window.innerWidth > 1000 ? "500px" : "100px" }}
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
