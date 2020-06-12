import PropTypes from "prop-types";
import React from "react";
import "./page.sass";

const Page = ({ pageNumber, currentPage }) => (
  <span
    className={`pagination__page ${
      currentPage == pageNumber ? "pagination__page_selected" : ""
    }`}
  >
    {pageNumber}
  </span>
);

Page.propTypes = {
  pageNumber: PropTypes.string,
  currentPage: PropTypes.string,
};

export default Page;
