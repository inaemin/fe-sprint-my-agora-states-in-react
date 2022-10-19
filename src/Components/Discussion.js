import React from "react";

const timePassed = (value) => {
  const now = new Date().getTime();
  const created = new Date(value).getTime();
  const time = now - created;
  let timepassed;
  if (time < 1000 * 60) {
    // seconds ago
    timepassed = parseInt(time / 1000);
    if (timepassed === 1) {
      timepassed += " second";
    } else {
      timepassed += " seconds";
    }
  } else if (time < 1000 * 60 * 60) {
    // minites ago
    timepassed = parseInt(time / (1000 * 60));
    if (timepassed === 1) {
      timepassed += " minute";
    } else {
      timepassed += " minutes";
    }
  } else if (time < 1000 * 60 * 60 * 24) {
    // hours ago
    timepassed = parseInt(time / (1000 * 60 * 60));
    if (timepassed === 1) {
      timepassed += " hour";
    } else {
      timepassed += " hours";
    }
  } else if (time < 1000 * 60 * 60 * 24 * 30) {
    // days ago
    timepassed = parseInt(time / (1000 * 60 * 60 * 24));
    if (timepassed === 1) {
      timepassed += " day";
    } else {
      timepassed += " days";
    }
  } else if (time < 1000 * 60 * 60 * 24 * 365) {
    // months ago
    timepassed = parseInt(time / (1000 * 60 * 60 * 24 * 30));
    if (timepassed === 1) {
      timepassed += " month";
    } else {
      timepassed += " months";
    }
  } else {
    // years ago
    timepassed = parseInt(time / (1000 * 60 * 60 * 24 * 365));
    if (timepassed === 1) {
      timepassed += " year";
    } else {
      timepassed += " years";
    }
  }
  return timepassed;
};

const Discussion = ({ normal: obj }) => {
  const dynamicAccordion = (event) => {
    event.currentTarget.classList.toggle("selected");
    const answer = event.currentTarget.querySelector(".discussion__accordion");
    if (answer.style.maxHeight) {
      answer.style.maxHeight = null;
      answer.style.display = "none";
    } else {
      answer.style.display = "block";
      answer.style.maxHeight = answer.scrollHeight + "px";
    }
  };

  return (
    <div
      className={obj.answer ? "discussion__container__wrapper" : null}
      onClick={obj.answer ? dynamicAccordion : null}
    >
      <li className="discussion__container" id={obj.id}>
        <div className="discussion__arrow">
          <button>
            <i className="fa-solid fa-arrow-up"></i>
          </button>
        </div>
        <div className="discussion__avatar--wrapper">
          <img
            className="discussion__avatar--image"
            src={obj.avatarUrl}
            alt={`avatar of ${obj.author}`}
          />
        </div>
        <div className="discussion__content">
          <h2 className="discussion__title">
            <a href={obj.url} target="_blank" rel="noopener noreferrer">
              {obj.title}
            </a>
          </h2>
          <div className="discussion__information">
            {obj.author} asked {timePassed(obj.createdAt)} ago{" "}
            {obj.answer ? (
              <span style={{ color: "#3fb950" }}>&nbsp;·&nbsp;Answered</span>
            ) : (
              <span>&nbsp;·&nbsp;Unanswered</span>
            )}
          </div>
        </div>
        <div className="discussion__answered">
          {obj.answer ? (
            <i className="fa-solid fa-circle-check" style={{ color: "#3fb950" }}></i>
          ) : (
            <i className="fa-regular fa-circle-check" style={{ color: "#8b949e" }}></i>
          )}
        </div>
      </li>
      {obj.answer ? (
        <div className="discussion__accordion">
          <div className="discussion__accordion__content">
            <img
              src={obj.answer.avatarUrl}
              className="discussion__avatar--image"
              alt={`avatar of ${obj.answer.author}`}
            />
            <span>{obj.answer.author}</span>
            <span className="discussion__information">{timePassed(obj.answer.createdAt)} ago</span>
          </div>
          <div className="discussion__accordion__text">
            <div dangerouslySetInnerHTML={{__html: obj.answer.bodyHTML}}></div>
            <br />
            <div className="discussion__accordion__text__tick">
              <i className="fa-solid fa-circle-check"></i>
              <span>Marked as answer</span>
            </div>
          </div>
        </div>
      ) : null}
      <div className="discussion__bar"></div>
    </div>
  );
};

export default Discussion;
