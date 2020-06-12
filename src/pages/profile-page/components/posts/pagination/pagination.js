import React from "react";
import PropTypes from "prop-types";
import "./pagination.sass";
import Page from "./page/page";

const Pagination = ({ count, currentPage }) => (
  <div className="pagination">
    {count < 8
      ? new Array(count).fill(null).map((el, index) => (
          <Page
            key={`${index}`}
            pageNumber={index + 1}
            currentPage={currentPage}
          />
        ))
      : new Array(7).fill(null).map((el, index) => {
        console.log(el)
          if (index === 6)
            return (
              <Page
                key={`${index}`}
                pageNumber={count}
                currentPage={currentPage}
              />
            );
          if (index === 5) return <span className="pagination__ellipsis" key={`${index}`}>...</span>;
          return (
            <Page
              key={`${index}`}
              pageNumber={index + 1}
              currentPage={currentPage}
            />
          );
        })}
  </div>
);

Pagination.propTypes = {
  count: PropTypes.string,
  currentPage: PropTypes.string,
};

export default Pagination;
