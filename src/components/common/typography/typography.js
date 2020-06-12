import React from "react";
import PropTypes from "prop-types";
import "./typography.sass";

const Typography = ({ before, firstText, secondText, className }) => {
  const beforeClass = before ? "typography_before" : "";

  return (
    <div className={`typography ${beforeClass} ${className}`}>
      <span className="typography__first">{firstText}</span>{" "}
      <span className="typography__second">{secondText}</span>
    </div>
  );
};

Typography.propTypes = {
  before: PropTypes.bool,
  firstText: PropTypes.string,
  secondText: PropTypes.string,
  className: PropTypes.string,
};

export default Typography;
