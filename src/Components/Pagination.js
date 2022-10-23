import React from "react";

function Pagination({ limit, data, active_page, onNumBtn, onPrevNextBtn }) {
  const pageCount = Math.ceil(data.length / limit);

  return (
    <nav className="pagination-container">
      <button
        className={active_page === 1 ? "pagination-button disabled" : "pagination-button"}
        id="prev-button"
        disabled={active_page === 1 ? true : false}
        onClick={onPrevNextBtn}
      >
        <i className="fa-solid fa-chevron-left"></i> Previous
      </button>
      <div id="pagination-numbers">
        {[...Array(pageCount)].map((e, i) => (
          <button
            className={i + 1 === active_page ? "pagination-number active" : "pagination-number"}
            key={`Page ${i + 1}`}
            page-index={i + 1}
            label={`Page ${i + 1}`}
            onClick={onNumBtn}
          >
            {i + 1}
          </button>
        ))}
      </div>
      <button
        className={active_page === pageCount ? "pagination-button disabled" : "pagination-button"}
        id="next-button"
        disabled={active_page === pageCount ? true : false}
        onClick={onPrevNextBtn}
      >
        Next <i className="fa-solid fa-chevron-right"></i>
      </button>
    </nav>
  );
}

export default Pagination;
