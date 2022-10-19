import React, { useEffect, useState } from "react";
import Notice from "./Notice";
import Discussion from "./Discussion";
import Pagination from "./Pagination";

const Discussions = ({ data }) => {
  const notice = data.filter((element) => element.notice);
  const normal = data.filter((element) => !element.notice);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);
  const [showingDis, setShowingDis] = useState(normal.slice(0, 10));
  const [load, setLoad] = useState(0);

  useEffect(() => {
    // 첫 화면 로딩
    if (!load) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
    // 이외의 경우
    else {
      if (window.innerWidth > 1000) {
        window.scrollTo({ top: 150, behavior: "smooth" });
      } else {
        window.scrollTo({ top: 520, behavior: "smooth" });
      }
    }
  }, [load]);

  const handleChangeLimit = (event) => {
    const newLimit = Number(event.target.value);
    setLimit(newLimit);
    setPage(1);
    setShowingDis(normal.slice(0, newLimit));
    setLoad(load + 1);
  };

  const handleCurrentPage = (event) => {
    const newPage = Number(event.target.textContent);
    setPage(newPage);
    setShowingDis(normal.slice((newPage - 1) * limit, newPage * limit));
    setLoad(load + 1);
  };

  const handlePrevNextPage = (event) => {
    if (event.target.textContent === " Previous") {
      setPage(page - 1);
      setShowingDis(normal.slice((page - 2) * limit, (page - 1) * limit));
      setLoad(load + 1);
    }
    if (event.target.textContent === "Next ") {
      setPage(page + 1);
      setShowingDis(normal.slice(page * limit, (page + 1) * limit));
      setLoad(load + 1);
    }
  };

  return (
    <section className="discussion__wrapper">
      <div className="pagination-limit__wrapper">
        정렬 개수
        <select
          defaultValue="10"
          name="pagination-limit"
          id="pagination-limit"
          onChange={handleChangeLimit}
        >
          <option>5</option>
          <option>10</option>
          <option>15</option>
          <option>20</option>
        </select>
      </div>
      <ul className="discussions__container" id="notice-bar">
        {notice.map((data) => (
          <Notice key={data.id} notice={data} />
        ))}
      </ul>
      <ul className="discussions__container">
        {showingDis.map((data) => (
          <Discussion key={data.id} normal={data} />
        ))}
      </ul>
      <Pagination
        limit={limit}
        data={normal}
        active_page={page}
        onNumBtn={handleCurrentPage}
        onPrevNextBtn={handlePrevNextPage}
      />
    </section>
  );
};

export default Discussions;
