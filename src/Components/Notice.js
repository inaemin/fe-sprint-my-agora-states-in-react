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

const Notice = ({ notice: obj }) => {
  return (
    <div>
      <li className="discussion__container" id={obj.id}>
        <div className="discussion__noti">
          <i className="fa-solid fa-circle-exclamation"></i>
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
            <a href={obj.url}>{obj.title}</a>
          </h2>
          <div className="discussion__information">
            {obj.author} asked {timePassed(obj.createdAt)} ago
            {obj.answer ? (
              <span style={{ color: "#3fb950" }}>&nbsp;·&nbsp;Answered</span>
            ) : (
              <span>&nbsp;·&nbsp;Unanswered</span>
            )}
          </div>
        </div>
        <div className="discussion__answered">
          <i className="fa-solid fa-circle-exclamation" style={{ color: "#f2cc60" }}></i>
        </div>
      </li>
      <div className="discussion__bar"></div>
    </div>
  );
};

export default Notice;
